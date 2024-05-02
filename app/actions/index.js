// "use server";

let storedValues = {
  phone: null,
  firstName: null,
  email: null,
  gender: null,
  dob: null,
  city: null,
  locality: null,
  school: null,
  degree: null,
  fieldOfStudy: null,
  startDataMonth: null,
  endDataMonth: null,
  endDataYear: null,
  startDataYear: null,
  experienceLevel: null,
  experience: null,
  allowExperience: false,
  jobRole: null,
  jobStartingMonth: null,
  jobStartingYear: null,
  currentJobStartingYear: null,
  currentJobStartingMonth: null,
  employeeType: null,
  jobTitle: null,
  jobPreferences: null,
  cvPath: null,
  userPic: null,
  userAbout: null,
  userAge: null,
  userLanguage: null,
};

export const GetPhoneNumber = (phone) => {
  console.log("phone ::");
  console.log(phone);
  storedValues.phone = phone;
};

export const GetAboutData = (data) => {
  console.log("data ::");
  console.log(data);
  storedValues.firstName = data.firstName;
  storedValues.email = data.email;
  storedValues.gender = data.gender;
  storedValues.dob = data.dob;
  storedValues.city = data.city;
  storedValues.locality = data.locality;
};

export const GetEducationData = (data) => {
  console.log("education ::");
  console.log(data);
  storedValues.school = data.school;
  storedValues.degree = data.degree;
  storedValues.fieldOfStudy = data.fieldOfStudy;
  storedValues.startDataMonth = data.startDataMonth;
  storedValues.startDataYear = data.startDataYear;
  storedValues.endDataMonth = data.endDataMonth;
  storedValues.endDataYear = data.endDataYear;
};

export const GetExperienceData = (data) => {
  console.log("experience ::");
  console.log(data);
  storedValues.experienceLevel = data.experienceLevel;
  storedValues.experience = data.experience;
  storedValues.allowExperience = data.allowExperience;
};

export const GetJobExperienceData = (data) => {
  console.log("job experience ::");
  console.log(data);
  storedValues.jobRole = data.jobRole;
  storedValues.jobStartingMonth = data.jobStartingMonth;
  storedValues.jobStartingYear = data.jobStartingYear;
  storedValues.currentJobStartingMonth = data.currentJobStartingMonth;
  storedValues.currentJobStartingYear = data.currentJobStartingYear;
  storedValues.employeeType = data.employeeType;
  storedValues.jobTitle = data.jobTitle;
  storedValues.jobPreferences = data.jobPreferences;
};

export const GetUserCV = (data) => {
  console.log("job experience ::");
  console.log(data);
  storedValues.cvPath = data.cvPath;
};

export const GetUserInfo = (data) => {
  console.log("user info ::");
  console.log(data);
  storedValues.userPic = data.userPic;
  storedValues.userAge = data.userAge;
  storedValues.userLanguage = data.userLanguage;
  storedValues.userAbout = data.userAbout;
};

export const GetAllValues = () => {
  return storedValues;
};
