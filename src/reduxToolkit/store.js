import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cocktailSlice from "./cocktailSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    cocktails: cocktailSlice,
  },
});
export default store;
