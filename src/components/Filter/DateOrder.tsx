"use client";

import React from "react";
import type { RootState } from "@/store/store";
import { changeDateOrder } from "@/store/reducers/filter";
import { useDispatch, useSelector } from "react-redux";

const DateOrder = () => {
  const dateOrder = useSelector((state: RootState) => state.filter.dateOrder);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h4 className="font-bold mb-3 mt-3 text-gray-500">Date Order:</h4>
      <div className="bg-[#f4f4f4] flex w-fit rounded-2xl">
        <div
          className={`px-4 py-2 md:px-6 md:py-4 rounded-2xl cursor-pointer text-sm md:text-md md:font-semibold ${
            dateOrder == "n" && "text-white bg-orange-500"
          }`}
          style={{
            transition: "background-color 0.2s ease-in-out",
          }}
          onClick={() => dispatch(changeDateOrder("n"))}
        >
          Newest
        </div>
        <div
          className={`px-4 py-2 md:px-6 md:py-4 rounded-2xl cursor-pointer text-sm md:text-md md:font-semibold ${
            dateOrder == "o" && "text-white bg-orange-500"
          }`}
          style={{
            transition: "background-color 0.2s ease-in-out",
          }}
          onClick={() => dispatch(changeDateOrder("o"))}
        >
          Oldest
        </div>
      </div>
    </React.Fragment>
  );
};

export default DateOrder;
