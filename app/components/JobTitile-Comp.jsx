"use client";

import { GetAllValues, GetJobExperienceData } from "@/app/actions";
// !imports
import { useState, useEffect } from "react";

// ! icons imports

const JobTitileComp = (props) => {
  const { formData, setFormData } = props;
  const [dialog, setDialog] = useState(true);
  // const [formData, setFormData] = useState({
  //   jobRole: "",
  //   jobStartingMonth: "",
  //   jobStartingYear: "",
  //   currentJobStartingYear: "",
  //   currentJobStartingMonth: "",
  //   employeeType: "",
  //   jobTitle: "",
  //   jobPreferences: "",
  // });

  useEffect(() => {
    const getData = async () => {
      const data = await GetAllValues();
      console.log(data);
      if (data) {
        if (data.experienceLevel === "fresher") {
          setDialog(false);
        } else {
          setDialog(true);
        }
      }
    };

    getData();
  }, []);

  useEffect(() => {
    GetJobExperienceData(formData);
  }, [formData]);

  return (
    <>
      <div className="w-full min-h-[70vh] h-auto flex flex-col justify-start items-center text-[#434343] gap-6 lg:py-8 py-4 lg:px-14 px-4 duration-300">
        {/* Preferred job title/role input */}
        <div className="flex flex-col items-start justify-center w-full h-auto space-y-2 lg:lg:space-y-4">
          <label htmlFor="Role" className="block py-1 text-sm font-semibold">
            Preferred Job Title/Role
          </label>
          <select
            onChange={(e) =>
              setFormData({ ...formData, jobTitle: e.target.value })
            }
            id="gender"
            className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
          >
            <option value="male">
              write how many year of experience you have
            </option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* job preferences input */}
        <div className="flex flex-col items-start justify-center w-full h-auto space-y-2 lg:lg:space-y-4">
          <label htmlFor="Role" className="block py-1 text-sm font-semibold">
            Job Preferences
          </label>
          <select
            onChange={(e) =>
              setFormData({ ...formData, jobPreferences: e.target.value })
            }
            id="gender"
            className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
          >
            <option value="male">
              write how many year of experience you have
            </option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default JobTitileComp;
