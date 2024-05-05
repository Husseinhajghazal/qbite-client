import MealPage from "@/components/Restaurant/MealPage";
import getMealById from "@/services/getMealById";
import { getStore } from "@/services/getStore";
import { Meal } from "@/types/Meal";
import { Restaurant } from "@/types/Restaurant";
import React from "react";

const page = async ({ params }: { params: any }) => {
  let restaurant: Restaurant = await getStore(params.resName);
  const id: number = +params.productName.charAt(params.productName.length - 1);
  let Meal: Meal = await getMealById(id);

  restaurant = {
    id: restaurant.id,
    username: restaurant.username,
    backgroundColor: restaurant.backgroundColor,
    primaryColor: restaurant.primaryColor,
    secondaryColor: restaurant.secondaryColor,
    backgroundURL: restaurant.backgroundURL,
    logoURL: restaurant.logoURL,
    name: restaurant.name,
  };

  Meal = {
    id: Meal.id,
    slug: Meal.slug,
    images: Meal.images,
    description: Meal.description,
    prices: Meal.prices,
    name: Meal.name,
    category: Meal.category,
    details: Meal.details,
  };

  return <MealPage Meal={Meal} restaurant={restaurant} />;
};

export default page;
