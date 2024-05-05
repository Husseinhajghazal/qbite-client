import React, { Fragment } from "react";
import FoodItem from "./FoodItem";
import useLoadMore from "@/hooks/useLoadMore";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { Restaurant } from "@/types/Restaurant";

const FoodList = ({ restaurant }: { restaurant: Restaurant }) => {
  const { loading, numberOfProducts } = useLoadMore();
  const foodItems = useSelector((state: RootState) => state.filter.foods);

  return (
    <Fragment>
      {foodItems.length > 0 && (
        <div
          className={`grid md:grid-cols-3 lg:grid-cols-4 min-h-[300px] px-8 md:px-20 gap-5 pb-[40px] bg-[${restaurant.backgroundColor}]`}
        >
          {foodItems.slice(0, numberOfProducts).map((food, index) => (
            <FoodItem key={index} food={food} restaurant={restaurant} />
          ))}
        </div>
      )}
      {foodItems.length == 0 && (
        <div
          className={`px-10 h-[300px]  text-center py-10 text-lg bg-[${restaurant.backgroundColor}]`}
        >
          The selected filters do not yield any available dishes!
        </div>
      )}
      {loading && (
        <div
          style={{ backgroundColor: restaurant.backgroundColor }}
          className="text-center pb-3"
        >
          <div
            style={{
              borderColor: restaurant.primaryColor,
              borderRightColor: "transparent",
            }}
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          />
        </div>
      )}
    </Fragment>
  );
};

export default FoodList;
