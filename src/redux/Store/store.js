import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toggleMenuReducer from "../opens";
import DatosComercioReducer from "../datosComercio";
import filtersSelectedReducer from "../filters";
import productsReducer from "../productsSlice";
import cartReducer from "../cartSlices";
import userReducer from "../userSlices";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedToggleMenues = persistReducer(persistConfig, toggleMenuReducer);
const persistedCart = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    toggleMenues: persistedToggleMenues,
    datosComercio: DatosComercioReducer,
    filtersSelected: filtersSelectedReducer,
    productsState: productsReducer,
    cart: persistedCart,
    user: userReducer,
  },
});

export const persistor = persistStore(store);
