import { createSlice } from "@reduxjs/toolkit";
import { products } from "../Data/products";

const initialState = {
  products,
  copyOriginalProducts: [...products],
  productsFiltered: [...products],
  countFilters: 0,
};

export const productsState = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const type = action.payload.type;
      const valor = action.payload.value;

      if (type === "category") {
        const productsFilteredByType = state.copyOriginalProducts.filter(
          (prod) => prod[type] === valor
        );
        state.productsFiltered = productsFilteredByType;
      }

      if (type === "talles") {
        const productsFilteredByTalles = state.productsFiltered.filter(
          (product) =>
            Object.keys(product.talles).some(
              (key) => key === valor && product.talles[key]
            )
        );
        state.productsFiltered = productsFilteredByTalles;
      }

      if (type === "temporada") {
        const productsFilteredByTemp = state.copyOriginalProducts.filter(
          (prod) => prod[type] === valor
        );
        state.productsFiltered = productsFilteredByTemp;
      }
      state.countFilters += 1;
    },
    removeFilters: (state) => {
      state.productsFiltered = state.copyOriginalProducts;
      state.countFilters = 0;
    },
    sortedProducts: (state, action) => {
      const type = action.payload;
      if (type === "menorPrice") {
        state.productsFiltered = state.productsFiltered.sort(
          (a, b) => a.price - b.price
        );
      }
      if (type === "mayorPrice") {
        state.productsFiltered = state.productsFiltered.sort(
          (a, b) => b.price - a.price
        );
      }
      if (type === "reset") {
        state.productsFiltered = initialState.products;
      }
    },
    setStock: (state, action) => {
      const { sku, talle, stock, accion } = action.payload;
      const productToUpdate = state.copyOriginalProducts.find(
        (prod) => prod.sku === sku
      );
      if (productToUpdate) {
        if (accion === "quitar") {
          const currentStock = productToUpdate.talles[talle] || 0;
          productToUpdate.talles[talle] = currentStock - stock;
        } else if (accion === "devolver") {
          const currentStock = productToUpdate.talles[talle] || 0;
          productToUpdate.talles[talle] = currentStock + stock;
        }
      }
      state.products = state.copyOriginalProducts;
      state.productsFiltered = state.copyOriginalProducts;
    },
    searchProducts: (state, action) => {
      const search = action.payload;
      const productsFilteredBySearch = [...state.copyOriginalProducts].filter(
        (product) => {
          return (
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase())
          );
        }
      );
      state.productsFiltered = productsFilteredBySearch;
    },
  },
});

export const {
  filterProducts,
  removeFilters,
  sortedProducts,
  setStock,
  searchProducts,
} = productsState.actions;
export default productsState.reducer;
