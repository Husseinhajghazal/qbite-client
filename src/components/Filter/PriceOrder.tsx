"use client";

import React from "react";
import type { RootState } from "@/store/store";
import { changePriceOrder } from "@/store/reducers/filter";
import { useDispatch, useSelector } from "react-redux";

const PriceOrder = ({ restaurant }: { restaurant: any }) => {
  const priceOrder = useSelector((state: RootState) => state.filter.priceOrder);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h4
        style={{ color: restaurant.primaryColor }}
        className="font-bold mb-3 mt-3"
      >
        Price Order:
      </h4>
      <div className="bg-white flex w-fit rounded-2xl">
        <div
          className={`px-4 py-2 md:px-6 md:py-4 rounded-2xl cursor-pointer text-sm md:text-md md:font-semibold`}
          style={{
            transition: "background-color 0.2s ease-in-out",
            backgroundColor: priceOrder == "h" && restaurant.secondaryColor,
            color: priceOrder == "h" ? "white" : "black",
          }}
          onClick={() => dispatch(changePriceOrder("h"))}
        >
          Heighest Price
        </div>
        <div
          className={`px-4 py-2 md:px-6 md:py-4 rounded-2xl cursor-pointer text-sm md:text-md md:font-semibold`}
          style={{
            transition: "background-color 0.2s ease-in-out",
            backgroundColor: priceOrder == "l" && restaurant.secondaryColor,
            color: priceOrder == "l" ? "white" : "black",
          }}
          onClick={() => dispatch(changePriceOrder("l"))}
        >
          Lowest Price
        </div>
      </div>
    </React.Fragment>
  );
};

export default PriceOrder;
