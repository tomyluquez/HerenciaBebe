import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hamburger: false,
  cart: false,
};

export const openMenuSlice = createSlice({
  name: "extras",
  initialState,
  reducers: {
    toggleHamburger: (state) => {
      state.hamburger = !state.hamburger;
    },
    toggleCart: (state) => {
      state.cart = !state.cart;
    },
  },
});

export const { toggleHamburger, toggleCart } = openMenuSlice.actions;
export default openMenuSlice.reducer;
