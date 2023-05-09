import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  talles: [],
  categories: [],
  temporada: [],
};

export const filtersSelected = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state[action.payload.type] = [action.payload.value];
    },
    removeFilters: (state, action) => {
      state[action.payload.type] = state[action.payload.type].filter(
        (ex) => ex !== action.payload.value
      );
    },
  },
});

export const { setFilters, removeFilters } = filtersSelected.actions;
export default filtersSelected.reducer;
