import axios from "axios";

const getMealById = async (productId: number) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/product/${productId}`,
    {
      headers: {
        "Accept-Language": "en",
      },
    }
  );

  const productData = res.data.data.product;
  return productData;
};

export default getMealById;
