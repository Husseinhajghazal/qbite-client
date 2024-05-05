"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Navigation } from "swiper/modules";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "@/types/CategorySwiper";
import { Restaurant } from "@/types/Restaurant";
import { changeTextLanguage } from "@/util/helpers";
import { setCategory } from "@/store/reducers/filter";

const CategorySwiper = ({
  restaurant,
  categoriesData,
}: {
  restaurant: Restaurant;
  categoriesData: Category[];
}) => {
  return (
    <div className={`w-full bg-[${restaurant.backgroundColor}]`}>
      <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto">
        <div className="w-full flex md:hidden lg:hidden items-center">
          <div className="swiper-button image-swiper-button-prev pb-3">
            <IoIosArrowBack size={24} />
          </div>
          <Swiper
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
            }}
            modules={[Navigation]}
            slidesPerView={3}
          >
            {categoriesData.map((category) =>
              RenderCategory({
                category,
                backgroundColor: restaurant.backgroundColor,
                secondaryColor: restaurant.secondaryColor,
                primaryColor: restaurant.primaryColor,
              })
            )}
          </Swiper>
          <div className="swiper-button image-swiper-button-next pb-3">
            <IoIosArrowForward size={24} />
          </div>
        </div>
        <div className="w-full hidden md:flex lg:hidden items-center gap-5">
          <div className="swiper-button image-swiper-button-prev pb-6">
            <IoIosArrowBack size={24} />
          </div>
          <Swiper
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
            }}
            modules={[Navigation]}
            slidesPerView={4}
          >
            {categoriesData.map((category) =>
              RenderCategory({
                category,
                backgroundColor: restaurant.backgroundColor,
                secondaryColor: restaurant.secondaryColor,
                primaryColor: restaurant.primaryColor,
              })
            )}
          </Swiper>
          <div className="swiper-button image-swiper-button-next pb-6">
            <IoIosArrowForward size={24} />
          </div>
        </div>
        <div className="w-full hidden md:hidden lg:flex items-center gap-5">
          <div className="swiper-button image-swiper-button-prev pb-6">
            <IoIosArrowBack size={24} />
          </div>
          <Swiper
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
            }}
            modules={[Navigation]}
            slidesPerView={5}
          >
            {categoriesData.map((category) =>
              RenderCategory({
                category,
                backgroundColor: restaurant.backgroundColor,
                secondaryColor: restaurant.secondaryColor,
                primaryColor: restaurant.primaryColor,
              })
            )}
          </Swiper>
          <div className="swiper-button image-swiper-button-next pb-6">
            <IoIosArrowForward size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderCategory = ({
  category,
  backgroundColor,
  secondaryColor,
  primaryColor,
}: {
  category: Category;
  backgroundColor: string;
  secondaryColor: string;
  primaryColor: string;
}) => {
  const languageState = useSelector(
    (state: RootState) => state.language.language
  ) as "en" | "ar";

  const activeCategory = useSelector(
    (state: RootState) => state.filter.category
  );

  const isSelected = activeCategory === category.name.fallback;
  const dispatch = useDispatch();

  const [name, setName] = useState(category.name.fallback);

  useEffect(() => {
    setName(
      changeTextLanguage(category.name, languageState, category.name.fallback)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageState]);

  return (
    <SwiperSlide key={category.id}>
      <div
        onClick={() => dispatch(setCategory(category.name.fallback))}
        className="pb-5 md:pb-10 pt-3 pl-3"
      >
        <motion.div
          data-aos="zoom-out-down"
          data-aos-duration="300"
          style={{
            color: backgroundColor,
            backgroundColor: isSelected ? secondaryColor : primaryColor,
          }}
          className={`transition-colors w-[80px] h-[80px] lg:w-28 lg:h-28 shadow-md rounded-2xl flex flex-col justify-center items-center gap-2 cursor-pointer`}
          whileHover={{
            scale: 1.1,
          }}
        >
          <div
            className={`transition-colors text-[25px] lg:text-[40px]`}
            style={{
              color: isSelected ? primaryColor : secondaryColor,
            }}
          >
            {category.icon}
          </div>
          <h3
            className={`transition-colors lg:font-bold lg:text-lg`}
            style={{
              color: isSelected ? primaryColor : secondaryColor,
            }}
          >
            {name}
          </h3>
        </motion.div>
      </div>
    </SwiperSlide>
  );
};

export default CategorySwiper;
