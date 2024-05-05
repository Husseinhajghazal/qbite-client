import axios from "axios";
import { redirect } from "next/navigation";

export async function getStore(username: string) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/stores/by-username/${username}`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    const restaurant = res.data.data.store;
    return restaurant;
  } catch (error) {
    redirect("/no/restaurant/found");
  }
}
