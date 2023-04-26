import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toggleMenuReducer from "../opens";
import DatosComercioReducer from "../datosComercio";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedToggleMenues = persistReducer(persistConfig, toggleMenuReducer);

export const store = configureStore({
  reducer: {
    toggleMenues: persistedToggleMenues,
    datosComerio: DatosComercioReducer,
  },
});

export const persistor = persistStore(store);
