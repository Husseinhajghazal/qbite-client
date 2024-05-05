"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Meal } from "@/types/Meal";
import { motion } from "framer-motion";
import { Restaurant } from "@/types/Restaurant";
import { changeTextLanguage, mergeCurrency } from "@/util/helpers";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const FoodItem = ({
  restaurant,
  food,
}: {
  restaurant: Restaurant;
  food: Meal;
}) => {
  const languageState = useSelector(
    (state: RootState) => state.language.language
  ) as "en" | "ar";
  const money = useSelector((state: RootState) => state.money.money);
  const [name, setName] = useState(food.name.fallback);
  const [description, setDescription] = useState(food.description.fallback);
  const [price, setPrice] = useState(food.prices[0].price.toString());

  useEffect(() => {
    setName(changeTextLanguage(food.name, languageState, food.name.fallback));
    setDescription(
      changeTextLanguage(
        food.description,
        languageState,
        food.description.fallback
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageState]);

  useEffect(() => {
    setPrice(mergeCurrency(food.prices));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [money]);

  return (
    <Link
      data-aos="zoom-out-down"
      data-aos-duration="300"
      href={`/${restaurant.username}/${food.slug}${food.id}`}
      style={{ backgroundColor: restaurant.primaryColor }}
      className={`flex md:flex-col h-fit shadow-xl rounded-2xl relative`}
    >
      <div className="w-[100px] h-[100px] md:w-full md:h-[200px] rounded-2xl overflow-hidden">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.2, rotate: 1.5, filter: "saturate(1.5)" }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${food.images[0].imageURL}`}
            alt={food.slug}
            width={500}
            height={200}
            className="object-cover h-full w-full"
          />
        </motion.div>
      </div>
      <div className="py-2 px-5 flex-1">
        <h2
          style={{ color: restaurant.secondaryColor }}
          className="font-bold text-sm md:font-extrabold"
        >
          {name}
        </h2>
        <p
          style={{ color: restaurant.backgroundColor }}
          className="text-xs md:text-sm mt-1"
        >
          {description.length > 50
            ? description.substring(0, 50) + "..."
            : description}
        </p>
        <p className="md:text-lg font-bold md:text-right mt-1 text-white">
          {price}
        </p>
      </div>
    </Link>
  );
};

export default FoodItem;
