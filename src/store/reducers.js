import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";

const reducers = combineReducers({
  cart: cartSlice,
});

export default reducers;
