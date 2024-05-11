"use client";

import React, { useState } from "react";
import Experience from "@/app/components/Experience-Comp";
import arrowleft from "@/public/assets/arrowleft.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EducationComp from "./Education-Comp";
import JobExpComp from "./Job-Exp";
import JobTitileComp from "./JobTitile-Comp";
import UploadCVComp from "./Upload-CV1";
import Tick from "@/public/tick.png";
import { candidateRegister } from "../services";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken, setIsLoggedIn, setUser } from "../redux";
import Loader from "./loader";
import FInalPageComp from "../candidate-login/final/page";

// const totalTabs = [1, 2, 3, 4, 5];
const totalTabs = [
  {
    index: 1,
    name: "About Me",
  },
  {
    index: 2,
    name: "Education",
  },
  {
    index: 3,
    name: "Experience",
  },
  {
    index: 4,
    name: "Job Title",
  },
  {
    index: 5,
    name: "last Step",
  },
  {
    index: 6,
    name: "Image Upload",
  },
];

const ActiveBar = ({ activePage, setActivePage, children }) => {
  const { phoneNumber } = useSelector((state) => state.root.user);
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    gender: "",
    dob: "",
    city: "",
    locality: "",
    school: "",
    degree: "",
    grade: "",
    fieldOfStudy: "",
    startDataMonth: "",
    startDataYear: "",
    endDataMonth: "",
    endDataYear: "",
    experienceLevel: "fresher",
    experience: "",
    allowExperience: false,
    jobDetails: [],
    jobTitle: "",
    jobPreferences: "",
    cv: "",
  });
  const dispatch = useDispatch();

  console.log("dddd...", formData);
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);

    let params = {
      phone: phoneNumber,
      fullName: formData.firstName,
      gender: formData.gender,
      email: formData.email,
      DOB: formData.dob,
      city: formData.city,
      locality: formData.locality,
      school: formData.school,
      degree: formData.degree,
      grade: formData.grade,
      fieldOfStudy: formData.fieldOfStudy,
      startDate: formData.startDataMonth + "," + formData.startDataYear,
      endDate: formData.endDataMonth + "," + formData.endDataYear,
      experienceLevel: formData.experienceLevel,
      skills: ["JavaScript", "Node.js", "React"],
      experience: formData.experience,
      jobDetails: formData.jobDetails,
      prefferedRole: formData.jobTitle,
      jobPreferences: formData.jobPreferences,
      CV: formData.cv,
      // profilePicture: "https://example.com/john_doe_profile.jpg",
      // about:
      //   "Experienced software engineer passionate about creating scalable web applications.",
      // age: "32",
    };

    candidateRegister(params)
      .then((res) => {
        console.log("res.....", res);
        dispatch(setAuthToken(res.data.token));
        dispatch(setUser(res?.data?.user));
        dispatch(setIsLoggedIn(true));
        router.push("/");
      })
      .catch((err) => {
        console.log("errorr.....", err?.response?.data);
        alert(err?.response?.data?.message);
      })
      .finally(() => setLoading(false));
  };
  const handlePageNext = () => {
    if (activePage >= 1 && activePage < totalTabs.length) {
      setActivePage(activePage + 1);
    }
  };
  const handlePageBack = () => {
    if (activePage > 1 && activePage <= totalTabs.length) {
      setActivePage(activePage - 1);
    }
  };
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-[80vh] h-auto gap-6">
      <div className="flex items-center justify-start w-full gap-4 flex-nowrap lg:gap-8 w-flex-1">
        <button
          className="bg-[#F7F8F8] h-8 w-8 flex justify-center items-center rounded "
          onClick={handlePageBack}
        >
          <Image src={arrowleft} alt="" className="h-8" />
        </button>
        <div className="flex items-center justify-between w-full gap-1 xl:gap-6">
          {totalTabs.map((pageNumber, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center">
                <h1
                  className={`rounded-full md:w-6 md:h-6 w-4 h-4 md:text-xs text-[8px] text-center flex justify-center items-center ${
                    activePage > pageNumber.index
                      ? "bg-[#4FAD2E] text-white"
                      : activePage === pageNumber.index
                      ? "bg-[#3F6EEC] text-white"
                      : "bg-[#949494] text-white"
                  }`}
                >
                  {/* {activePage === pageNumber.index ? `✔️` : pageNumber.index} */}
                  {pageNumber.index >= activePage ? (
                    pageNumber.index
                  ) : (
                    <Image
                      src={Tick}
                      alt="tick"
                      width={300}
                      height={300}
                      className="object-contain w-2 h-2 "
                    />
                  )}
                </h1>
                <h1
                  className={`xl:text-sm text-xs font-normal text-center ${
                    activePage !== pageNumber.index && "md:block hidden"
                  } ${
                    activePage > pageNumber.index
                      ? "text-[#4FAD2E]"
                      : activePage === pageNumber.index
                      ? "text-[#3F6EEC]"
                      : "text-black"
                  }`}
                >
                  {pageNumber.name}
                </h1>
              </div>
              {pageNumber.index < 5 && (
                <div className="xl:w-14 lg:w-10 md:w-14 w-6 duration-300 lg:h-[3px] h-[2px] bg-[#D2D4DA] rounded-3xl">
                  {/* <Image src={line} alt="line" /> */}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      {
        activePage === 1 ? (
          <>
            <Experience
              formData={formData}
              setFormData={setFormData}
              handlePageNext={handlePageNext}
            />
          </>
        ) : activePage === 2 ? (
          <>
            <EducationComp
              formData={formData}
              setFormData={setFormData}
              handlePageNext={handlePageNext}
            />
          </>
        ) : activePage === 3 ? (
          <>
            <JobExpComp
              formData={formData}
              setFormData={setFormData}
              handlePageNext={handlePageNext}
            />
          </>
        ) : activePage === 4 ? (
          <>
            <JobTitileComp
              formData={formData}
              setFormData={setFormData}
              handlePageNext={handlePageNext}
            />
          </>
        ) : activePage === 5 ? (
          <>
            <UploadCVComp
              formData={formData}
              setFormData={setFormData}
              handlePageNext={handlePageNext}
            />
          </>
        ) : activePage === 6 ? (
          <>
            <FInalPageComp />
          </>
        ) : null
        // (
        //   router.push("/candidate-login/final")
        // )
      }

      {/* <button
        onClick={handlePageNext}
        className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white"
      >
        {loading ? (
          <div className="flex items-center justify-center ">
            <Loader color={"#fff"} size="50" />
          </div>
        ) : (
          "Next"
        )}
      </button> */}
    </div>
  );
};

export default ActiveBar;
