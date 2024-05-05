import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const sideBarSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleShow: (state) => {
      state.show = !state.show;
    },
  },
});

export const { toggleShow } = sideBarSlice.actions;

export default sideBarSlice.reducer;
