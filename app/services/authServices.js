import { HTTP_CLIENT } from "./config";
import { ENDPOINTS } from "./endpoints";

//..................Employee..........................................................

export const login = (params) => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
};

export const register = (params) => {
  return HTTP_CLIENT.post(ENDPOINTS.SIGN_UP, params);
};

//...................Candidate.......................................................

export const candidateLogin = (params) => {
  return HTTP_CLIENT.post(ENDPOINTS.CAND_LOGIN, params);
};

export const candidateRegister = (params) => {
  return HTTP_CLIENT.post(ENDPOINTS.CAND_SIGN_UP, params);
};
