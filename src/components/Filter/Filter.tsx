"use client";

import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import PriceSlider from "./PriceSlider";
import Button from "../Buttons/Button";
import { useDispatch } from "react-redux";
import { toggleShow } from "@/store/reducers/filter";
import AlphaOrder from "./AlphaOrder";
import PriceOrder from "./PriceOrder";
import { Restaurant } from "@/types/Restaurant";

const Filter = ({ restaurant }: { restaurant: Restaurant }) => {
  const filterElement = document.getElementById("filter")!;
  const dispatch = useDispatch();

  return createPortal(
    <motion.div
      initial={{ marginTop: "-700px" }}
      animate={{ marginTop: 0 }}
      exit={{ marginTop: "-700px" }}
      transition={{ duration: 0.2 }}
      style={{ backgroundColor: restaurant.backgroundColor }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-10/12 md:w-5/12 rounded-2xl py-4 px-8 md:py-8 md:px-16"
    >
      <PriceSlider restaurant={restaurant} />
      <AlphaOrder restaurant={restaurant} />
      <PriceOrder restaurant={restaurant} />
      <div className="text-center mt-6" onClick={() => dispatch(toggleShow())}>
        <Button
          color={restaurant.secondaryColor}
          type="outline"
          text="Apply Filter"
        />
      </div>
    </motion.div>,
    filterElement
  );
};

export default Filter;
