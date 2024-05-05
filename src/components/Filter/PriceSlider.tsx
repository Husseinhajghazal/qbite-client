"use client";

import React from "react";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { changePriceRange } from "@/store/reducers/filter";
import type { RootState } from "@/store/store";

function valuetext(value: number) {
  return `${value} $`;
}

const PriceSlider = ({ restaurant }: { restaurant: any }) => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.filter.priceRange);
  const handleChange = (event: Event, newValue: number | number[]) => {
    dispatch(changePriceRange(newValue as number[]));
  };

  return (
    <React.Fragment>
      <h4
        style={{ color: restaurant.primaryColor }}
        className="font-bold mb-3 text-white"
      >
        Price Range:
      </h4>
      <Slider
        getAriaLabel={() => "Price Range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={1000}
        step={100}
        style={{ color: restaurant.secondaryColor }}
      />
    </React.Fragment>
  );
};

export default PriceSlider;
