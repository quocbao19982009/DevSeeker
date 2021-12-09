import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  isLogin: null,
  loading: true,
  userInfo: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoaded: (state, action) => {
      return {
        ...state,
        isLogin: true,
        loading: false,
        userInfo: action.payload,
      };
    },
    loginSuccess: (state, action) => {
      return { ...state, ...action.payload, isLogin: true, loading: false };
    },
    userLogout: (state) => {
      return {
        ...state,
        token: null,
        isLogin: false,
        userInfo: {},
        loading: false,
      };
    },
  },
});

export const { userLoaded, loginSuccess, userLogout } = userSlice.actions;

export default userSlice.reducer;
