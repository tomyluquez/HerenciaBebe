import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Herencia",
  rubro: "Ropa de Bebe",
  phone: "3517683067",
  mail: "herencia.bb.cba@gmail.com",
  formasPago: {
    efectivo: "10%OFF",
    transferencia: "10%OFF",
    tarjeta: "3 Cuotas sin interes",
  },
  instagram: "www.instagram.com/herencia.bb",
  envios: "Envios a todo el pais",
};

export const datosComercio = createSlice({
  name: "extras",
  initialState,
  reducers: {
    setDato: (state, action) => {
      state[action.payload.dato] = action.payload.value;
    },
  },
});

export const { setDato } = datosComercio.actions;
export default datosComercio.reducer;
