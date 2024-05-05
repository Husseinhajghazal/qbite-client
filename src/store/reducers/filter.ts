import { FilterState } from "@/types/SearchBar";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Meal } from "@/types/Meal";
import { changeTextLanguage, getCurrencyValue } from "@/util/helpers";

const initialState: FilterState = {
  show: false,
  priceRange: [0, 1000],
  minRate: 1,
  alphabeticalOrder: "A-Z",
  priceOrder: "h",
  dateOrder: "n",
  category: "",
  initialFoods: [],
  foods: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleShow: (state) => {
      state.show = !state.show;
    },
    changePriceRange: (state, action: PayloadAction<number[]>) => {
      state.priceRange = action.payload;
      state.foods = state.initialFoods.filter((food) => {
        const [minPrice, maxPrice] = state.priceRange;
        const price = getCurrencyValue(food.prices);
        console.log(maxPrice);

        return price >= minPrice && price <= maxPrice;
      });
    },
    changeAlphabeticalOrder: (state, action: PayloadAction<"A-Z" | "Z-A">) => {
      state.alphabeticalOrder = action.payload;
      const languageState = localStorage.getItem("language")! as "en" | "ar";
      if (state.alphabeticalOrder === "A-Z") {
        state.foods.sort((a, b) =>
          changeTextLanguage(
            a.name,
            languageState,
            a.name.fallback
          ).localeCompare(b.name.fallback)
        );
      } else if (state.alphabeticalOrder === "Z-A") {
        state.foods.sort((a, b) =>
          b.name.fallback.localeCompare(a.name.fallback)
        );
      }
    },
    changePriceOrder: (state, action: PayloadAction<"h" | "l">) => {
      state.priceOrder = action.payload;
      if (state.priceOrder === "h") {
        state.foods.sort(
          (a, b) => getCurrencyValue(b.prices) - getCurrencyValue(a.prices)
        );
      } else if (state.priceOrder === "l") {
        state.foods.sort(
          (a, b) => getCurrencyValue(a.prices) - getCurrencyValue(b.prices)
        );
      }
    },
    changeDateOrder: (state, action: PayloadAction<"n" | "o">) => {
      state.dateOrder = action.payload;
      // if (state.dateOrder === "n") {
      //   state.foods.sort((a, b) => b.date.getTime() - a.date.getTime());
      // } else if (state.dateOrder === "o") {
      //   state.foods.sort((a, b) => a.date.getTime() - b.date.getTime());
      // }
    },
    setFoodList: (state, action: PayloadAction<Meal[]>) => {
      state.foods = action.payload;
      state.initialFoods = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      if (state.category === action.payload) {
        state.category = "";
      } else {
        state.category = action.payload;
      }
      if (state.category === "") {
        state.foods = state.initialFoods;
      } else {
        state.foods = state.initialFoods.filter(
          (food) => food.category.name.fallback === state.category
        );
      }
    },
  },
});

export const {
  toggleShow,
  changePriceRange,
  changeAlphabeticalOrder,
  changePriceOrder,
  changeDateOrder,
  setFoodList,
  setCategory,
} = filterSlice.actions;

export default filterSlice.reducer;
