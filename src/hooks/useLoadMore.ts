"use client";

import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useLoadMore() {
  const [numberOfProducts, setNumberOfProducts] = useState(8);
  const foodItems = useSelector((state: RootState) => state.filter.foods);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkIfCloseToEnd = () => {
      const scrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (
        documentHeight - scrollY - windowHeight <= 100 &&
        !loading &&
        foodItems.length >= numberOfProducts
      ) {
        setLoading(true);
        setTimeout(() => {
          setNumberOfProducts(numberOfProducts + 8);
          setLoading(false);
        }, 1000);
      }
    };

    window.addEventListener("scroll", checkIfCloseToEnd);

    return () => {
      window.removeEventListener("scroll", checkIfCloseToEnd);
    };
  }, [foodItems.length, loading, numberOfProducts]);

  return { loading, numberOfProducts };
}

export default useLoadMore;
