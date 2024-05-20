import { HTTP_CLIENT } from "./config";
import { ENDPOINTS } from "./endpoints";

export const getAllJobs = () => {
  let page = 1;
  return HTTP_CLIENT.get(`${ENDPOINTS.GET_ALL_JOBS}?page=${page}`);
};

export const postJob = (params) => {
  return HTTP_CLIENT.post(ENDPOINTS.POST_JOB, params);
};
export const getApplicants = (jobid) => {
  console.log("..................", jobid);
  let page = 1;
  return HTTP_CLIENT.get(
    `${ENDPOINTS.GET_APPLICANT}?jobId=${jobid}&page=${page}`
  );
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
  console.log("page no and ID", pageno, companyId);
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

export const applyJob = (params) => {
  return HTTP_CLIENT.post(ENDPOINTS.CAND_APPLYJOB, params);
};

export const getSearchCompanyorRole = (company, role) => {
  return HTTP_CLIENT.get(
    `${ENDPOINTS.searchCompanyorRole}?company=${company}&role=${role}`
  );
};

export const getCandiadteJob = (id) => {
  return HTTP_CLIENT.get(`${ENDPOINTS.CAN_GET_JOB}?jobId=${id}`);
};

export const getCAN_SEARCHJOBSBYROLES = (role) => {
  return HTTP_CLIENT.get(`${ENDPOINTS.CAN_SEARCHJOBSBYROLES}?role=${role}`);
};
