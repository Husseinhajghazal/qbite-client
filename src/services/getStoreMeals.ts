import axios from "axios";

const getStoreMeals = async (storeId: number) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/product/by-store/${storeId}`,
    {
      headers: {
        "Accept-Language": "en",
      },
    }
  );
  const MealsData = res.data.data.products;
  return MealsData;
};

export default getStoreMeals;
