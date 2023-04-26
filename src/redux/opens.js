import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hamburger: false,
  cart: false,
  search: false,
  filters: false,
  sort: false,
};

export const openMenuSlice = createSlice({
  name: "extras",
  initialState,
  reducers: {
    toggleMenues: (state, action) => {
      if (action.payload === "hamburger") {
        state.hamburger = !state.hamburger;
        state.cart = false;
        state.search = false;
        state.filters = false;
        state.sort = false;
      } else if (action.payload === "cart") {
        state.hamburger = false;
        state.search = false;
        state.cart = !state.cart;
        state.filters = false;
        state.sort = false;
      } else if (action.payload === "search") {
        state.hamburger = false;
        state.search = !state.search;
        state.cart = false;
        state.filters = false;
        state.sort = false;
      } else if (action.payload === "filter") {
        state.hamburger = false;
        state.search = false;
        state.cart = false;
        state.filters = !state.filters;
        state.sort = false;
      } else if (action.payload === "sort") {
        state.hamburger = false;
        state.search = false;
        state.cart = false;
        state.filters = false;
        state.sort = !state.sort;
      }
    },
    closeMenues: () => {
      return initialState;
    },
  },
});

export const { toggleMenues, closeMenues } = openMenuSlice.actions;
export default openMenuSlice.reducer;
