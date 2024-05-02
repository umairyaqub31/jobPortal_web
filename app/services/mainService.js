import { HTTP_CLIENT } from "./config";
import { ENDPOINTS } from "./endpoints";

export const getAllJobs = () => {
  let page = 1;
  return HTTP_CLIENT.get(`${ENDPOINTS.GET_ALL_JOBS}?page=${page}`);
};

export const postJob = (params) => {
  return HTTP_CLIENT.post(ENDPOINTS.POST_JOB, params);
};
