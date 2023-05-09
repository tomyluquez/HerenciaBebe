import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalProducts: 0,
  totalPrice: 0,
};

export const cartProducts = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
      state.totalProducts += action.payload.cantidad;
      state.totalPrice += action.payload.price;
    },
    removeProduct: (state, action) => {
      state.products = [...state.products].filter(
        (prod) => prod.uid !== action.payload.uid
      );
      state.totalProducts -= action.payload.cantidad;
      state.totalPrice -= action.payload.price;
    },
    resetCart: () => {
      return initialState;
    },
  },
});

export const { addProduct, removeProduct, resetCart } = cartProducts.actions;
export default cartProducts.reducer;
