import RestaurantPage from "@/components/Restaurant/RestaurantPage";
import { getStore } from "@/services/getStore";
import getStoreCategories from "@/services/getStoreCategories";
import getStoreMeals from "@/services/getStoreMeals";
import { Category } from "@/types/CategorySwiper";
import { Meal } from "@/types/Meal";
import { Restaurant } from "@/types/Restaurant";
import React from "react";

export async function generateMetadata({ params }: { params: any }) {
  const restaurant = await getStore(params.resName);

  return {
    icons: {
      icon: `https://res.cloudinary.com/dc779no05/image/upload/v1704906980/${restaurant.logoURL}`,
    },
    title: `${restaurant.name.fallback} Menu`,
    description: restaurant.description.fallback,
    alternates: {
      canonical: `/${params.resName}`,
    },
    openGraph: {
      images: [
        `https://res.cloudinary.com/dc779no05/image/upload/v1704906980/${restaurant.logoURL}`,
      ],
    },
  };
}

const page = async ({ params }: { params: any }) => {
  let restaurant: Restaurant = await getStore(params.resName);
  let categoriesData: Category[] = await getStoreCategories(restaurant.id);
  let MealsData: Meal[] = await getStoreMeals(restaurant.id);

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

  categoriesData = categoriesData.map((e: Category) => ({
    id: e.id,
    icon: e.icon,
    name: e.name,
  }));

  MealsData = MealsData.map((e) => ({
    id: e.id,
    slug: e.slug,
    images: e.images,
    name: e.name,
    description: e.description,
    prices: e.prices,
    details: e.details,
    category: e.category,
  }));

  return (
    <RestaurantPage
      restaurant={restaurant}
      categoriesData={categoriesData}
      MealsData={MealsData}
    />
  );
};

export default page;
