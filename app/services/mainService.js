import { HTTP_CLIENT } from "./config";
import { ENDPOINTS } from "./endpoints";

export const getAllJobs = () => {
  let page = 1;
  return HTTP_CLIENT.get(`${ENDPOINTS.GET_ALL_JOBS}?page=${page}`);
};

export const postJob = (params) => {
  return HTTP_CLIENT.post(ENDPOINTS.POST_JOB, params);
};

export const topCompanies = (pageno) => {
  return HTTP_CLIENT.get(`${ENDPOINTS.CAND_TOPCOMPANIES}?page=${pageno}`);
};

export const getJobs = () => {
  return HTTP_CLIENT.get(ENDPOINTS.CAND_GETJOB);
};

export const searchJobs = (jobtitle, companyname) => {
  return HTTP_CLIENT.get(
    `${ENDPOINTS.CAND_SEARCHJOB}?jobTitle=${jobtitle}&companyName=${companyname}`
  );
};

export const getJobRoles = () => {
  return HTTP_CLIENT.get(ENDPOINTS.CAND_GETJOBROLES);
};

export const getCompanyJobs = (pageno, companyId) => {
  return HTTP_CLIENT.get(
    `${ENDPOINTS.CAND_GETCOMPANYJOB}?page=${pageno}&companyId=${companyId}`
  );
};

export const getjobDetails = (jobId) => {
  return HTTP_CLIENT.get(`${ENDPOINTS.CAND_GETJOBDETAILS}?jobId=${jobId}`);
};

export const uploadFile = (params) => {
  return HTTP_CLIENT.post(ENDPOINTS.UPLOAD_FILE, params);
};
