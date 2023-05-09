import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  uid: "",
  isLogin: false,
  hiddenMenu: true,
};

export const userSlices = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.displayName;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.isLogin = true;
    },
    notLoginUser: (state) => {
      return initialState;
    },
    userMenu: (state) => {
      state.hiddenMenu = !state.hiddenMenu;
    },
  },
});

export const { setUser, notLoginUser, userMenu } = userSlices.actions;
export default userSlices.reducer;
