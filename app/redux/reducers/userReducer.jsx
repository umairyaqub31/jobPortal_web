import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginusername: "",
  user: null,
  authToken: null,
  fcmToken: null,
  isLoggedIn: false,
  phoneNumber: "",
  companyName: "",
  companyId: "",
  jobId: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setloginusername: (state, action) => {
      state.loginusername = action.payload;
    },
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
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setCompanyId: (state, action) => {
      state.companyId = action.payload;
    },
    setJobId: (state, action) => {
      state.jobId = action.payload;
    },
  },
});

export const {
  setloginusername,
  setUser,
  signOut,
  setPhoneNumber,
  setAuthToken,
  setIsLoggedIn,
  setFcmToken,
  setCompanyName,
  setCompanyId,
  setJobId,
} = userReducer.actions;

export default userReducer.reducer;
