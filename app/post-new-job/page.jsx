"use client";

// *imports
import React, { useState } from "react";
import Image from "next/image";

// * local imports
import Logo from "@/public/footer-logo.png";
import { postJob } from "../services";
import Loader from "../components/loader";
import { useRouter } from "next/navigation";

const JobOpenings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const JobTypes = [
  "Computer forensic analyst",
  "Data Analyst",
  "Computer Programmer",
];
const genderData = ["Male", "Female"];
const qualificationData = ["Bsc", "Msc"];
const benefitsData = ["Medical coverage", "Fuel Allownce"];
const languageData = ["English", "Hindi"];
const workingDaysData = ["1", "2", "3", "4", "5", "6"];
const jobShiftData = ["Morning", "Evening"];
const jobAreaData = ["Mumbai", "Delhi"];
const jobIndustryData = ["IT", "Construction", "Agriculture"];

const PostNewJobPage = () => {
  const [formData, setFormData] = useState({
    openingNumber: "1",
    jobType: "Computer forensic analyst",
    gender: "Male",
    qualification: "Bsc",
    jobBenefits: "Medical coverage",
    language: "English",
    workingDays: "1",
    jobShift: "Morning",
    // jobCategory: "Software developer",
    jobArea: "Mumbai",
    jobIndustry: "IT",
    jobTitle: "",
    jobDescription: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let isEmpty = false;
    for (var key in formData) {
      if (formData[key] === "") {
        isEmpty = true;
      }
    }
    if (isEmpty) {
      setError(true);
    } else {
      setError(false);
      setLoading(true);
      let params = {
        jobOpenings: formData.openingNumber,
        jobType: formData.jobType,
        jobTitle: formData.jobTitle,
        gender: formData.gender,
        qualification: formData.qualification,
        jobBenifit: formData.jobBenefits,
        language: formData.language,
        workingDays: formData.workingDays,
        shift: formData.jobShift,
        industry: formData.jobIndustry,
        jobArea: formData.jobArea,
        description: formData.jobDescription,
      };
      postJob(params)
        .then((res) => {
          console.log("posted Job...", res?.data);
          router.push("/employee-login/employee-jobs");
        })
        .catch((err) => {
          alert(err?.response?.data?.message);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <>
      {/* main container */}
      <div className="w-full h-auto min-h-screen bgImage py-[3%] px-[2%]">
        {/* inner body */}
        <div className="w-full h-full bg-white rounded-[32px] md:p-8 p-3 flex flex-col justify-start items-center space-y-6">
          <Image
            src={Logo}
            alt="logo"
            width={500}
            height={500}
            className="object-contain w-auto h-6"
          />

          {/* inner body */}
          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col items-center justify-start w-full h-full space-y-6 max-md:pb-8"
          >
            <div className="w-full h-full bg-[#F8F8F8] md:p-6 p-2 duration-300 space-y-6 rounded-2xl flex flex-col justify-around items-center">
              <h1 className="text-black text-[20px] font-bold">{`Post A Job`}</h1>
              <div className="w-full h-[1px] bg-[#0000001A]"></div>

              {/* from data starts here */}
              <div className="w-full h-full space-y-6 text-sm text-[#949494] font-normal">
                {/* line 1 */}
                <div className="flex flex-col items-center justify-between w-full h-auto gap-6 md:flex-row">
                  <div className="md:w-[28vw] w-full h-auto space-y-2">
                    <label
                      htmlFor="opening"
                      className="text-[#434343] text-sm font-semibold"
                    >
                      Number Of Opening
                    </label>
                    <select
                      name="opening"
                      id="opening"
                      className="w-full h-[55px] px-4 bg-white outline-none rounded-2xl"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          openingNumber: e.target.value,
                        })
                      }
                    >
                      {JobOpenings.map((v) => (
                        <option value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:w-[28vw] w-full h-auto space-y-2">
                    <label
                      htmlFor="job type"
                      className="text-[#434343] text-sm font-semibold"
                    >
                      Job Type
                    </label>
                    <select
                      onChange={(e) =>
                        setFormData({ ...formData, jobType: e.target.value })
                      }
                      name="job type"
                      id="job type"
                      className="w-full h-[55px] px-4 bg-white outline-none rounded-2xl"
                    >
                      {JobTypes.map((v) => (
                        <option value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:w-[28vw] w-full h-auto space-y-2">
                    <label
                      htmlFor="gender"
                      className="text-[#434343] text-sm font-semibold"
                    >
                      Gender
                    </label>
                    <select
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      name="gender"
                      id="gender"
                      className="w-full h-[55px] px-4 bg-white outline-none rounded-2xl"
                    >
                      {genderData.map((v) => (
                        <option value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* line 2 */}
                <div className="flex flex-col items-center justify-between w-full h-auto gap-6 md:flex-row">
                  <div className="md:w-[28vw] w-full h-auto space-y-2">
                    <label
                      htmlFor="Qualification"
                      className="text-[#434343] text-sm font-semibold"
                    >
                      Qualification
                    </label>
                    <select
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          qualification: e.target.value,
                        })
                      }
                      name="Qualification"
                      id="Qualification"
                      className="w-full h-[55px] px-4 bg-white outline-none rounded-2xl"
                    >
                      {qualificationData.map((v) => (
                        <option value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:w-[28vw] w-full h-auto space-y-2">
                    <label
                      htmlFor="Job Benefit"
                      className="text-[#434343] text-sm font-semibold"
                    >
                      Job Benefit
                    </label>
                    <select
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jobBenefits: e.target.value,
                        })
                      }
                      name="Job Benefit"
                      id="Job Benefit"
                      className="w-full h-[55px] px-4 bg-white outline-none rounded-2xl"
                    >
                      {benefitsData.map((v) => (
                        <option value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:w-[28vw] w-full h-auto space-y-2">
                    <label
                      htmlFor="Language"
                      className="text-[#434343] text-sm font-semibold"
                    >
                      Language
                    </label>
                    <select
                      onChange={(e) =>
                        setFormData({ ...formData, language: e.target.value })
                      }
                      name="Language"
                      id="Language"
                      className="w-full h-[55px] px-4 bg-white outline-none rounded-2xl"
                    >
                      {languageData.map((v) => (
                        <option value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* line 3 */}
                <div className="flex flex-col items-center justify-between w-full h-auto gap-6 md:flex-row">
                  <div className="md:w-[42vw] w-full h-auto space-y-2">
                    <label
                      htmlFor="Working Days"
                      className="text-[#434343] text-sm font-semibold"
                    >
                      Working Days
                    </label>
                    <select
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          workingDays: e.target.value,
                        })
                      }
                      name="Working Days"
                      id="Working Days"
                      className="w-full h-[55px] px-4 bg-white outline-none rounded-2xl"
                    >
                      {workingDaysData.map((v) => (
                        <option value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:w-[42vw] w-full h-auto space-y-2">
                    <label
                      htmlFor="Job Shift"
                      className="text-[#434343] text-sm font-semibold"
                    >
                      Job Shift
                    </label>
                    <select
                      name="Job Shift"
                      id="Job Shift"
                      onChange={(e) =>
                        setFormData({ ...formData, jobShift: e.target.value })
                      }
                      className="w-full h-[55px] px-4 bg-white outline-none rounded-2xl"
                    >
                      {jobShiftData.map((v) => (
                        <option value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* line 4 */}
                {/* <div className="flex flex-col items-center justify-between w-full h-auto gap-6 md:flex-row">
                  <div className="w-full h-auto space-y-2">
                    <label
                      htmlFor="Job Category"
                      className="text-[#434343] text-sm font-semibold"
                    >
                      Job Category
                    </label>
                    <input
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jobCategory: e.target.value,
                        })
                      }
                      name="Job Category"
                      id="Job Category"
                      type="text"
                      placeholder="Select Jo Category"
                      className="w-full h-[55px] px-4 bg-white outline-none rounded-2xl"
                    />
                  </div>
                </div> */}

                {/* line 5 */}
                <div className="flex flex-col items-center justify-between w-full h-auto gap-6 md:flex-row">
                  <div className="md:w-[42vw] w-full h-auto space-y-2">
                    <label
                      htmlFor="Job Title Area"
                      className="text-[#434343] text-sm font-semibold"
                    >
                      Job Area
                    </label>
                    <select
                      onChange={(e) =>
                        setFormData({ ...formData, jobArea: e.target.value })
                      }
                      name="Job Area"
                      id="Job Area"
                      className="w-full h-[55px] px-4 bg-white outline-none rounded-2xl"
                    >
                      {jobAreaData.map((v) => (
                        <option value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:w-[42vw] w-full h-auto space-y-2">
                    <label
                      htmlFor="Job Industries"
                      className="text-[#434343] text-sm font-semibold"
                    >
                      Job Industries
                    </label>
                    <select
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jobIndustry: e.target.value,
                        })
                      }
                      name="Job Industries"
                      id="Job Industries"
                      className="w-full h-[55px] px-4 bg-white outline-none rounded-2xl"
                    >
                      {jobIndustryData.map((v) => (
                        <option value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/*line 6*/}

                <div className="w-full space-y-2">
                  <label
                    htmlFor="Job Title"
                    className="text-[#434343] text-sm font-semibold"
                  >
                    Job Title
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        jobTitle: e.target.value,
                      })
                    }
                    name="Job Title"
                    id="Job Title"
                    type="text"
                    placeholder="Enter job title"
                    className="w-full h-[89px] px-[15px] py-[13px] bg-white outline-none rounded-2xl"
                  />
                </div>
                {/* line 7 */}
                <div className="flex flex-col items-center justify-between w-full h-auto gap-6 md:flex-row">
                  <div className="w-full h-auto space-y-2">
                    <label
                      htmlFor="Job Description"
                      className="text-[#434343] text-sm font-semibold"
                    >
                      Job Description
                    </label>
                    <textarea
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jobDescription: e.target.value,
                        })
                      }
                      name="Job Description"
                      id="Job Description"
                      type="text"
                      placeholder="Enter job description"
                      className="w-full h-[89px] px-[15px] py-[13px] bg-white outline-none rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p
              className={`text-xs text-[#909198] ${
                error && "text-red-600"
              } font-normal py-2 px-3`}
            >
              {error && "Please fill all fields"}
            </p>
            <div className="w-full h-auto">
              <button
                type="submit"
                className="bg-[#3F6EEC] text-white flex justify-center items-center text-center w-full min-h-[57px] rounded-full text-sm font-semibold"
              >
                {loading ? (
                  <div className="flex items-center justify-center ">
                    <Loader color={"#fff"} size="50" />
                  </div>
                ) : (
                  "Post Job"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostNewJobPage;
