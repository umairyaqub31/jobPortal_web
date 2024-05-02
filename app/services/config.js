// import { store } from "../redux/store";
import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./endpoints";
import { store } from "../redux";

export const HTTP_CLIENT = axios.create({
  baseURL: BASE_URL,
});

export const interceptorConfig = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config) => {
      const { isLoggedIn, authToken } = store.getState().root.user;

      // config.headers = {
      //   "x-access-token": "PLASTK",
      // };

      if (isLoggedIn) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    (err) => {
      Promise.reject(err);
    }
  );
};
