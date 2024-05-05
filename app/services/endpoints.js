// const BASE_URL = "https://metrimonial-backend-2c3a23b121fc.herokuapp.com/";
const BASE_URL = "http://localhost:3001/";

const ENDPOINTS = {
  UPLOAD_FILE: "lab/uploadFile",

  //........................Employee...........................
  LOGIN: "employee/login",
  SIGN_UP: "employee/register",
  GET_ALL_JOBS: "employee/getAllJobs",
  POST_JOB: "employee/postJob",

  //.....................Candidate...............................
  CAND_LOGIN: "candidate/login",
  CAND_SIGN_UP: "candidate/register",
  CAND_TOPCOMPANIES: "candidate/getTopCompanies",
  CAND_GETJOB: "candidate/getJobs",
  CAND_SEARCHJOB: "candidate/searchJobs",
  CAND_GETJOBROLES: "candidate/getJobRoles",
  CAND_GETCOMPANYJOB: "candidate/getCompanyJobs",
  CAND_GETJOBDETAILS: "candidate/getJob",
  UPLOAD_FILE: "candidate/uploadFile",
  CAND_APPLYJOB: "candidate/applyJob",
};

export { BASE_URL, ENDPOINTS };
