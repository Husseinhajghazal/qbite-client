"use client";

import React, { Fragment, useEffect, useState } from "react";
import ImageSlider from "@/components/ImageSlide/ImageSlider";
import LanguageSwitcher from "@/components/Buttons/LanguageSwitcher";
import Image from "next/image";
import Backward from "@/components/Buttons/Backward";
import { Restaurant } from "@/types/Restaurant";
import { Meal } from "@/types/Meal";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { changeTextLanguage, mergeCurrency } from "@/util/helpers";

const MealPage = ({
  restaurant,
  Meal,
}: {
  restaurant: Restaurant;
  Meal: Meal;
}) => {
  const languageState = useSelector(
    (state: RootState) => state.language.language
  ) as "en" | "ar";
  const money = useSelector((state: RootState) => state.money.money);
  const [name, setName] = useState(Meal.name.fallback);
  const [description, setDescription] = useState(Meal.description.fallback);
  const [price, setPrice] = useState(Meal.prices[0].price.toString());

  useEffect(() => {
    localStorage.setItem("restaurant", JSON.stringify(restaurant));
  }, [restaurant]);

  useEffect(() => {
    setName(changeTextLanguage(Meal.name, languageState, Meal.name.fallback));
    setDescription(
      changeTextLanguage(
        Meal.description,
        languageState,
        Meal.description.fallback
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageState]);

  useEffect(() => {
    setPrice(mergeCurrency(Meal.prices));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [money]);

  return (
    <Fragment>
      <div className="w-full h-[325px] relative">
        <Backward backgroundColor={restaurant.primaryColor} />
        <ImageSlider images={Meal.images} />
        <div
          className={`absolute z-10 w-full h-[25px] bg-[${restaurant.backgroundColor}] -bottom-1 left-0 rounded-t-3xl`}
        />
        <div
          data-aos="fade-left"
          data-aos-duration="300"
          className="absolute -bottom-5 lg:-bottom-10 right-8 md:right-16 lg:right-32 z-10 flex items-center justify-center gap-1 p-1 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white text-[20px] md:text-[30px] lg:text-[40px] text-white font-bold rounded-2xl"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${restaurant.logoURL}`}
            alt="Logo"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <LanguageSwitcher y="top" x="left" />
      </div>
      <div
        className={`pt-16 py-8 md:px-24 px-8 bg-[${restaurant.backgroundColor}] min-h-[400px]`}
      >
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-xl md:text-3xl">{name}</h2>
          <h2
            style={{ backgroundColor: restaurant.secondaryColor }}
            className={`font-bold text-2xl py-1 px-3 md:py-3 md:px-6 rounded-2xl`}
          >
            {price}
          </h2>
        </div>
        <h4 className="text-gray-400 font-semibold mb-3">
          From{" "}
          <span className="font-extrabold text-gray-600">
            {restaurant.name.fallback}
          </span>
        </h4>
        <div className="grid gap-6 md:grid-cols-4 divide-y-2 md:divide-x-2 md:divide-y-0 divide-gray-300">
          <p className="md:my-6 md:col-span-3">{description}</p>
          <div className="pt-3 md:pl-8 text-xl divide-y-2 divide-gray-300">
            {Meal.details.map((detail) => (
              <p
                key={detail.productDetails.unit.id}
                className="flex gap-3 items-center py-2"
              >
                {detail.productDetails.icon} {detail.value}{" "}
                {detail.productDetails.unit.fallback}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MealPage;
