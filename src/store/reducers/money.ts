import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  money: "₺",
};

const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    changeMoney: (state, action) => {
      state.money = action.payload.money;
      localStorage.setItem("money", action.payload.money);
    },
  },
});

export const { changeMoney } = moneySlice.actions;

export default moneySlice.reducer;
