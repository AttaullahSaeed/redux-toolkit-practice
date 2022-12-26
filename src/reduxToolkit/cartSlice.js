import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart(state, action) {
      state.push(action.payload);
    },
    removeToCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addtoCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
