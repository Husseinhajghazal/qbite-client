import axios from "axios";

const getStoreCategories = async (storeId: number) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/category/by-store/${storeId}`,
    {
      headers: {
        "Accept-Language": "en",
      },
    }
  );

  const categoriesData = res.data.data.categories;
  return categoriesData;
};

export default getStoreCategories;
