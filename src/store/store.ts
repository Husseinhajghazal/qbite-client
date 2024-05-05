import { configureStore } from "@reduxjs/toolkit";
import filter from "./reducers/filter";
import sidebar from "./reducers/sidebar";
import language from "./reducers/language";
import money from "./reducers/money";

const Store = configureStore({
  reducer: {
    filter: filter,
    sideBar: sidebar,
    language: language,
    money: money,
  },
});

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;

export default Store;
