"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import LanguageSwitcher from "@/components/Buttons/LanguageSwitcher";
import SearchBar from "@/components/SearchBar/SearchBar";
import CategorySwiper from "@/components/CategorySwiper/CategorySwiper";
import FoodList from "@/components/FoodList/FoodList";
import Filter from "@/components/Filter/Filter";
import BackgroundFilter from "@/components/background/BackgroundFilter";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import type { RootState } from "@/store/store";
import { Category } from "@/types/CategorySwiper";
import { Restaurant } from "@/types/Restaurant";
import { Meal } from "@/types/Meal";
import { setFoodList } from "@/store/reducers/filter";

const RestaurantPage = ({
  restaurant,
  categoriesData,
  MealsData,
}: {
  restaurant: Restaurant;
  categoriesData: Category[];
  MealsData: Meal[];
}) => {
  const show = useSelector((state: RootState) => state.filter.show);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFoodList(MealsData));
    localStorage.setItem("restaurant", JSON.stringify(restaurant));
  }, [MealsData, dispatch, restaurant]);

  return (
    <React.Fragment>
      <div className="w-full h-[325px] relative">
        <Image
          src={`https://res.cloudinary.com/dc779no05/image/upload/v1704906980/${restaurant.backgroundURL}`}
          alt={`${restaurant.name.fallback} Restaurant Cover Image`}
          width={2000}
          height={325}
          className="w-full h-[325px] object-cover saturate-100"
        />
        <div
          className={`absolute w-full h-full bg-[${restaurant.backgroundColor}]/20 top-0 left-0`}
        />
        <div
          className={`absolute w-full h-[25px] bg-[${restaurant.backgroundColor}] -bottom-1 left-0 rounded-t-3xl`}
        />
        <Image
          src={`https://res.cloudinary.com/dc779no05/image/upload/v1704906980/${restaurant.logoURL}`}
          alt={`${restaurant.name.fallback} Restaurant Logo`}
          width={150}
          height={150}
          className="absolute inset-8 mx-auto"
        />
        <SearchBar restaurant={restaurant} />
        <LanguageSwitcher y="top" x="left" />
      </div>
      <CategorySwiper restaurant={restaurant} categoriesData={categoriesData} />
      <FoodList restaurant={restaurant} />
      <AnimatePresence>
        {show && <Filter restaurant={restaurant} />}
      </AnimatePresence>
      <AnimatePresence>{show && <BackgroundFilter />}</AnimatePresence>
    </React.Fragment>
  );
};

export default RestaurantPage;
