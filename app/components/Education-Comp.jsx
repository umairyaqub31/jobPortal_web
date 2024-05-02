"use client";

import { GetEducationData } from "@/app/actions/index.js";
import React, { useState, useEffect } from "react";
import { generateYearsData } from "../services/constants";
// import add from "@/public/assets/add.svg";
// import Image from "next/image";

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
const EducationComp = (props) => {
  const { formData, setFormData } = props;

  useEffect(() => {
    GetEducationData(formData);
  }, [formData]);

  return (
    <>
      {/* main container */}
      <div className="flex flex-col items-start w-full h-auto gap-4">
        <h1 className="text-[#000000] font-bold text-xl">{`Education`}</h1>

        {/* inner container  */}
        <div className="flex flex-col w-full h-auto gap-4">
          {/* container 1 */}
          <div className="w-full h-auto gap-2 p-4 bg-[#F8F8F8] rounded-3xl flex flex-col justify-center items-start">
            {/* school input */}
            <div className="w-full space-y-2">
              <label
                htmlFor="school"
                className="block py-1 text-sm font-semibold"
              >
                School
              </label>
              <input
                type="text"
                placeholder="Enter school name"
                id="school"
                className=" w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                onChange={(e) =>
                  setFormData({ ...formData, school: e.target.value })
                }
              />
              <button className="text-[#0076FC] text-sm flex items-center py-1 gap-1">
                Add School
              </button>
            </div>

            {/* degree input */}
            <div className="w-full space-y-2">
              <label
                htmlFor="school"
                className="block py-1 text-sm font-semibold"
              >
                Degree
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, degree: e.target.value })
                }
                type="text"
                placeholder="Enter degree title"
                id="school"
                className=" w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              />
              <button className="text-[#0076FC] text-sm flex items-center py-1 gap-1">
                Add School
              </button>
            </div>

            {/* grade & field of study  */}
            <div className="flex flex-col w-full gap-6 flex-nowrap lg:flex-row">
              <div className="w-full space-y-2 lg:w-1/2">
                <label
                  htmlFor="grade"
                  className="block py-1 text-sm font-semibold"
                >
                  Grade
                </label>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, grade: e.target.value })
                  }
                  type="text"
                  placeholder="Enter Grdae"
                  id="grade"
                  className=" w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                />
              </div>

              <div className="w-full space-y-2 lg:w-1/2">
                <label
                  htmlFor="gender"
                  className="block py-1 text-sm font-semibold"
                >
                  Field Of Study
                </label>
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, fieldOfStudy: e.target.value })
                  }
                  id="gender"
                  className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                >
                  <option value="Field Of Study">Field Of Study</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* container 2 */}
          <div className="w-full h-auto gap-2 p-4 bg-[#F8F8F8] rounded-3xl flex flex-col justify-center items-start">
            {/* start date  & end date  */}
            <div className="w-full h-auto space-y-2">
              <label
                htmlFor="Start Date"
                className="block py-1 text-sm font-semibold"
              >
                Start Date
              </label>
              <div className="flex w-full h-auto gap-6 flex-nowrap">
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, startDataMonth: e.target.value })
                  }
                  id="gender"
                  className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                >
                  {!formData.startDataMonth && (
                    <option value="">Select month</option>
                  )}

                  {months.map((d) => (
                    <option value={d.value}>{d.title}</option>
                  ))}
                </select>{" "}
                <select
                  id="gender"
                  onChange={(e) =>
                    setFormData({ ...formData, startDataYear: e.target.value })
                  }
                  className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                >
                  {!formData.startDataYear && (
                    <option value="">Select year</option>
                  )}
                  {generateYearsData(2000, 2023).map((d) => (
                    <option value={d.value}>{d.title}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* start date  & end date  */}
            <div className="w-full h-auto space-y-2">
              <label
                htmlFor="Start Date"
                className="block py-1 text-sm font-semibold"
              >
                End Date
              </label>
              <div className="flex w-full h-auto gap-6 flex-nowrap">
                <select
                  id="gender"
                  onChange={(e) =>
                    setFormData({ ...formData, endDataMonth: e.target.value })
                  }
                  className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                >
                  {!formData.endDataMonth && (
                    <option value="">Select month</option>
                  )}

                  {months.map((d) => (
                    <option value={d.value}>{d.title}</option>
                  ))}
                </select>{" "}
                <select
                  id="gender"
                  onChange={(e) =>
                    setFormData({ ...formData, endDataYear: e.target.value })
                  }
                  className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                >
                  {!formData.endDataYear && (
                    <option value="">Select year</option>
                  )}
                  {generateYearsData(2000, 2023).map((d) => (
                    <option value={d.value}>{d.title}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationComp;
