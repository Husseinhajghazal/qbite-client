"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAlphabeticalOrder } from "@/store/reducers/filter";
import type { RootState } from "@/store/store";

const AlphaOrder = ({ restaurant }: { restaurant: any }) => {
  const alphaOrder = useSelector(
    (state: RootState) => state.filter.alphabeticalOrder
  );
  const dispatch = useDispatch();

  return (
    <>
      <h4
        style={{ color: restaurant.primaryColor }}
        className="font-bold mb-3 mt-3"
      >
        Alphabetical Order:
      </h4>
      <div className="bg-white flex w-fit rounded-2xl">
        <div
          className={`px-4 py-2 md:px-6 md:py-4 rounded-2xl cursor-pointer text-sm md:text-md md:font-semibold`}
          style={{
            transition: "background-color 0.2s ease-in-out",
            backgroundColor: alphaOrder == "A-Z" && restaurant.secondaryColor,
            color: alphaOrder == "A-Z" ? "white" : "black",
          }}
          onClick={() => dispatch(changeAlphabeticalOrder("A-Z"))}
        >
          A-Z
        </div>
        <div
          className={`px-4 py-2 md:px-6 md:py-4 rounded-2xl cursor-pointer text-sm md:text-md md:font-semibold`}
          style={{
            transition: "background-color 0.2s ease-in-out",
            backgroundColor: alphaOrder == "Z-A" && restaurant.secondaryColor,
            color: alphaOrder == "Z-A" ? "white" : "black",
          }}
          onClick={() => dispatch(changeAlphabeticalOrder("Z-A"))}
        >
          Z-A
        </div>
      </div>
    </>
  );
};

export default AlphaOrder;
