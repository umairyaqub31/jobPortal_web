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

  candidateProfile: {
    firstName: "",
    gender: "",
    email: "",
    DOB: "",
    city: "",
    locality: "",

    school: "",
    degree: "",
    grade: "",
    fieldofStudy: "",
    startDateMonth: "",
    startDateYear: "",
    endDateMonth: "",
    endDateYear: "",

    ExperienceLevel: "",

    yearsofExperience: "",
    jobPreferences: "",

    CVLink: "",

    aboutUs: "",
    age: "",
    language: "",
  },
  employeeProfile: {
    fullName: "",
    email: "",
    companyRole: "",
    consultancyName: "",
    workingAs: "",
  },

  allJobs: [],
  companyid: "",
  jobrole: "",
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
    setCandidateProfile: (state, action) => {
      state.candidateProfile = action.payload;
    },
    setEmployeeProfile: (state, action) => {
      state.employeeProfile = action.payload;
    },
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setCompanyid: (state, action) => {
      state.companyid = action.payload;
    },
    setJobRole: (state, action) => {
      state.jobrole = action.payload;
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
  setCandidateProfile,
  setEmployeeProfile,
  setAllJobs,
  setCompanyid,
  setJobRole,
} = userReducer.actions;

export default userReducer.reducer;
