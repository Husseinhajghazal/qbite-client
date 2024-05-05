"use client";

import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

const MatchedList = () => {
  const foodItems = useSelector((state: RootState) => state.filter.foods);

  return (
    <Fragment>
      {foodItems.length > 0 && (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 px-8 md:px-20 gap-5 mb-[40px]"></div>
      )}
      {foodItems.length == 0 && (
        <div className="px-10  text-center py-10 text-lg">
          The selected filters do not yield any available dishes!
        </div>
      )}
    </Fragment>
  );
};

export default MatchedList;
