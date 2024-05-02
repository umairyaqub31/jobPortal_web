"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import add from "@/public/assets/add.svg";
import { GetExperienceData } from "@/app/actions";
import { IoMdClose } from "react-icons/io";
import { generateYearsData } from "../services/constants";
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const expLevelData = [
  {
    title: "Fresher",
    value: "fresher",
  },
  {
    title: "Intermediate",
    value: "intermediate",
  },
  {
    title: "Expert",
    value: "expert",
  },
];

const roleData = [
  {
    title: "Fresher",
    value: "fresher",
  },
  {
    title: "Intermediate",
    value: "intermediate",
  },
  {
    title: "Manager",
    value: "manager",
  },
];
const months = [
  {
    title: "January",
    value: "January",
  },
  {
    title: "February",
    value: "February",
  },
  {
    title: "March",
    value: "March",
  },
  {
    title: "April",
    value: "April",
  },
  {
    title: "May",
    value: "May",
  },
  {
    title: "June",
    value: "June",
  },
  {
    title: "July",
    value: "July",
  },
  {
    title: "August",
    value: "August",
  },
  {
    title: "September",
    value: "September",
  },
  {
    title: "October",
    value: "October",
  },
  {
    title: "November",
    value: "November",
  },
  {
    title: "December",
    value: "December",
  },
];
const employeeTypeData = [
  {
    title: "Fresher",
    value: "fresher",
  },
  {
    title: "Intermediate",
    value: "intermediate",
  },
  {
    title: "Manager",
    value: "manager",
  },
];

const JobExpComp = (props) => {
  const [allowExperience, setAllowExperience] = useState(false);
  const { formData, setFormData } = props;
  const [showExpDialog, setShowExpDialog] = useState(false);

  const [jobData, setJobData] = useState({
    jobRole: "",
    jobStartingMonth: "",
    jobStartingYear: "",
    jobEndingYear: "",
    jobEndingMonth: "",
    employeeType: "",
    currentlyWorking: false,
  });
  console.log("jjjj.....", jobData);

  useEffect(() => {
    if (formData.experienceLevel === "fresher") {
      setAllowExperience(true);
    } else {
      setAllowExperience(false);
    }

    GetExperienceData(formData);
  }, [formData]);
  const handleCloseDialog = () => {
    setShowExpDialog(false);
  };

  const handleSave = () => {
    let tempArr = [...formData.jobDetails];
    // const tempArr = JSON.parse(JSON.stringify(formData));
    tempArr.push(jobData);
    setJobData({
      jobRole: "",
      jobStartingMonth: "",
      jobStartingYear: "",
      jobEndingYear: "",
      jobEndingMonth: "",
      employeeType: "",
      currentlyWorking: false,
    });
    console.log("temp ddd.....", tempArr);
    setFormData({ ...formData, jobDetails: tempArr });
    handleCloseDialog();
  };
  return (
    <>
      {showExpDialog && (
        <>
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full min-h-screen p-0 duration-300 bg-slate-400/30">
            {/* dialog */}
            <div className="flex flex-col items-start justify-center w-[626px] h-auto lg:gap-8 gap-2 lg:p-8 p-4 bg-white flex-nowrap rounded-3xl text-[#434343]">
              <div className="w-full h-auto space-y-1 lg:space-y-2">
                {/* close button */}
                <div className="flex items-center justify-between w-full h-auto gap-2 mt-6 lg:gap-4">
                  <h1 className="text-base font-bold lg:text-xl">
                    {`Kindly Provide The Following Details`}
                  </h1>
                  <button
                    onClick={handleCloseDialog}
                    className="bg-[#F8F8F8] w-8 h-8 rounded-lg flex justify-center items-center"
                  >
                    <IoMdClose className="w-6 h-6" />
                  </button>
                </div>
                <div className="w-full h-auto ">
                  <span className="text-[#8E8E8E] text-xs font-normal">{`If You Have Changed Job, Please Update The End Date And Continue`}</span>
                </div>
              </div>

              {/*product container */}
              <div className="w-full h-auto lg:gap-4 gap-2 flex flex-col justify-start items-center text-[#434343]">
                {/*product organization */}
                <div className="w-full h-[76px] rounded-xl border flex flex-col justify-center items-start px-4 py-3 lg:space-y-2 space-y-1">
                  <h1 className="text-sm font-semibold">{`Product Organization`}</h1>
                  <span className="text-sm font-normal">{`V4 Jobs`}</span>
                </div>

                {/* role input */}
                <div className="flex flex-col items-start justify-center w-full h-auto space-y-2 lg:lg:space-y-4">
                  <label
                    htmlFor="Role"
                    className="block py-1 text-sm font-semibold"
                  >
                    Role
                  </label>
                  <select
                    id="gender"
                    onChange={(e) =>
                      setJobData({ ...jobData, jobRole: e.target.value })
                    }
                    className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                  >
                    {!jobData.jobRole && <option value="">Select Role</option>}
                    {roleData.map((d) => (
                      <option value={d.value}>{d.title}</option>
                    ))}
                  </select>
                </div>

                {/* start date  & end date  */}
                <div className="w-full h-auto space-y-2 lg:space-y-4">
                  <label
                    htmlFor="Start Date"
                    className="block text-sm font-semibold"
                  >
                    Start Date
                  </label>
                  <div className="flex w-full h-auto gap-2 lg:gap-4 flex-nowrap">
                    <select
                      onChange={(e) =>
                        setJobData({
                          ...jobData,
                          jobStartingMonth: e.target.value,
                        })
                      }
                      id="smonth"
                      className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                    >
                      {!jobData.jobStartingMonth && (
                        <option value="">Select month</option>
                      )}

                      {months.map((d) => (
                        <option value={d.value}>{d.title}</option>
                      ))}
                    </select>{" "}
                    <select
                      id="syear"
                      onChange={(e) =>
                        setJobData({
                          ...jobData,
                          jobStartingYear: e.target.value,
                        })
                      }
                      className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                    >
                      {!jobData.jobStartingYear && (
                        <option value="">Select year</option>
                      )}
                      {generateYearsData(2000, 2023).map((d) => (
                        <option value={d.value}>{d.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* currently work here */}
                <div className="w-full h-auto lg:space-y-4 space-y-2 bg-[#F8F8F8] rounded-3xl p-4">
                  <div className="flex items-center justify-start w-full gap-2 ">
                    <input
                      type="checkbox"
                      className="outline-none cursor-pointer"
                      value={jobData.currentlyWorking}
                      onChange={(e) =>
                        setJobData({
                          ...jobData,
                          currentlyWorking: e.target.checked,
                        })
                      }
                    />
                    <p className="text-[#393A44] font-semibold text-sm">
                      Currently Working Here
                    </p>
                  </div>

                  {/* start date  & end date  */}
                  <div className="w-full h-auto space-y-2">
                    <label
                      htmlFor="Start Date"
                      className="block text-sm font-semibold"
                    >
                      End Date
                    </label>
                    <div className="flex w-full h-auto gap-2 lg:gap-4 flex-nowrap">
                      <select
                        id="emonth"
                        onChange={(e) =>
                          setJobData({
                            ...jobData,
                            jobEndingMonth: e.target.value,
                          })
                        }
                        className="h-14 w-full rounded-lg border outline-none px-4 text-sm text-[#949494] shadow-sm bg-transparent"
                      >
                        {!jobData.jobEndingMonth && (
                          <option value="">Select month</option>
                        )}

                        {months.map((d) => (
                          <option value={d.value}>{d.title}</option>
                        ))}
                      </select>{" "}
                      <select
                        id="eyear"
                        className="h-14 w-full rounded-lg border outline-none px-4 text-sm text-[#949494] shadow-sm bg-transparent"
                        onChange={(e) =>
                          setJobData({
                            ...jobData,
                            jobEndingYear: e.target.value,
                          })
                        }
                      >
                        {!jobData.jobEndingYear && (
                          <option value="">Select year</option>
                        )}
                        {generateYearsData(2000, 2023).map((d) => (
                          <option value={d.value}>{d.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* employee type input */}
                <div className="flex flex-col items-start justify-center w-full h-auto space-y-2 lg:space-y-4">
                  <label
                    htmlFor="Employee Type"
                    className="block py-1 text-sm font-semibold"
                  >
                    Employ Type
                  </label>
                  <select
                    id="gender"
                    className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                    onChange={(e) =>
                      setJobData({
                        ...jobData,
                        employeeType: e.target.value,
                      })
                    }
                  >
                    {!jobData.employeeType && (
                      <option value="">Select Employee Type</option>
                    )}
                    {employeeTypeData.map((d) => (
                      <option value={d.value}>{d.title}</option>
                    ))}
                  </select>
                </div>

                {/* button */}
                <button
                  className="bg-[#3F6EEC] w-full h-14 rounded-full flex justify-center items-center text-center text-[#F8F8F8] text-sm font-semibold lg:mt-0 mt-2"
                  onClick={handleSave}
                >
                  {`Save And Add New Experience`}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* main container */}
      <div className="flex flex-col items-center justify-start w-full h-auto gap-8 text-[#434343] pb-[10vh]">
        {/* experience input */}
        <div className="w-full h-auto space-y-2">
          <label
            htmlFor="experiencelevel"
            className="block py-1 text-sm font-semibold "
          >
            Experience Level
          </label>
          <select
            id="experiencelevel"
            onChange={(e) =>
              setFormData({ ...formData, experienceLevel: e.target.value })
            }
            className=" w-full rounded-lg border outline-none px-4 h-14 bg-white text-sm text-[#949494] shadow-sm"
          >
            {expLevelData.map((d) => (
              <option value={d.value}>{d.title}</option>
            ))}
          </select>
        </div>

        {/* add skills */}
        {/* <div
          className={`w-full h-auto space-y-2 ${
            allowExperience && "cursor-not-allowed"
          }`}
        >
          <label
            htmlFor="skill"
            className={`block py-1 text-sm font-semibold ${
              allowExperience && "cursor-not-allowed"
            }`}
          >
            Skills
          </label>

          <button
            className={`text-[#0076FC] text-sm font-medium gap-2 h-11  flex flex-nowrap justify-center items-center w-auto p-4 border-[#0076FC] border-2 rounded-full ${
              allowExperience && "cursor-not-allowed"
            }`}
          >
            <Image src={add} alt="" /> New Skills
          </button>
        </div> */}

        {!allowExperience && (
          <>
            {/*experience input  */}
            <div className="w-full h-auto space-y-2">
              <label
                htmlFor="experience"
                className="block py-1 text-sm font-semibold "
              >
                Experience
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                type="text"
                placeholder="write how many year of experience you have"
                id="experience"
                disabled={allowExperience}
                className={` w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm ${
                  allowExperience && "cursor-not-allowed"
                }`}
              />
            </div>
            {/* job details */}
            <div className="w-full h-auto space-y-2">
              <label
                htmlFor="jobDetails"
                className="block py-1 text-sm font-semibold"
              >
                Job Details
              </label>

              <button
                className={`text-[#0076FC] text-sm font-medium gap-2 h-11  flex flex-nowrap justify-center items-center w-auto p-4 border-[#0076FC] border-2 rounded-full ${
                  allowExperience && "cursor-not-allowed"
                }`}
                onClick={() => setShowExpDialog(true)}
              >
                <Image src={add} alt="" /> Add Job
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default JobExpComp;
