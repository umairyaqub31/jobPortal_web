import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  authToken: null,
  fcmToken: null,
  isLoggedIn: false,
  phoneNumber: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setFcmToken: (state, action) => {
      state.fcmToken = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },

    signOut: (state) => {
      state.user = null;
      state.authToken = null;
      state.isLoggedIn = false;
    },
  },
});

export const {
  setUser,
  signOut,
  setPhoneNumber,
  setAuthToken,
  setIsLoggedIn,
  setFcmToken,
} = userReducer.actions;

export default userReducer.reducer;
