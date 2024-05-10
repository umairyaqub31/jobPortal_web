"use client";

import arrowleft from "@/public/assets/arrowleft.svg";
import Tick from "@/public/tick.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import EmployeeCompanyDetailsComp from "./EmployeeCompanyDetails";
import EmployeeOtpInput from "./EmployeeOtpInput";
import ProvideDataComp from "./ProvideData";
import { register } from "../services";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken, setIsLoggedIn, setUser } from "../redux";
import Loader from "./loader";

// const totalTabs = [1, 2, 3, 4, 5];
const totalTabs = [
  {
    index: 1,
    name: "Recruiter Profile",
  },
  {
    index: 2,
    name: "Company Details",
  },
];

const EmployeeActiveBar = ({ activePage, setActivePage, children }) => {
  const [showOTPModal, setShowOTPModal] = useState(true);
  const { phoneNumber } = useSelector((state) => state.root.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    companyRole: "",
    consultancyName: "",
    workingAs: "",
  });
  const [companyInfo, setCompanyInfo] = useState({
    consultancyEmail: "",
    consultancyWeb: "",
    aboutConsultancy: "",
    consultancySize: "",
    city: "",
    locality: "",
  });
  const router = useRouter();

  const handlePageNext = () => {
    if (activePage >= 1 && activePage < totalTabs.length) {
      setActivePage(activePage + 1);
    } else {
      handleRegister();
    }
  };

  const handleRegister = () => {
    setLoading(true);

    let params = {
      email: personalInfo.email,
      phone: phoneNumber,
      fullName: personalInfo.fullName,
      company: {
        companyType: personalInfo.companyRole,
        name: personalInfo.consultancyName,
        workingAs: personalInfo.workingAs,
        email: companyInfo.consultancyEmail,
        webUrl: companyInfo.consultancyWeb,
        about: companyInfo.aboutConsultancy,
        size: companyInfo.consultancySize,
        city: companyInfo.city,
        locality: companyInfo.locality,
        // logo: "String",
      },
    };

    register(params)
      .then((res) => {
        console.log("res.....", res);
        dispatch(setAuthToken(res.data.token));
        dispatch(setUser(res?.data?.user));
        dispatch(setIsLoggedIn(true));
        router.push("/employee-login/employee-jobs");
      })
      .catch((err) => {
        console.log("errorr.....", err?.response?.data);
        alert(err?.response?.data?.message);
      })
      .finally(() => setLoading(false));
  };
  const handlePageBack = () => {
    if (activePage > 1 && activePage <= totalTabs.length) {
      setActivePage(activePage - 1);
    }
  };

  const handleCloseOTPModal = () => {
    setShowOTPModal(false);
  };

  // const handleClickNext = () => {
  //   if (screenName == "Recruiter Profile") {
  //     setScreenName("Company Details");
  //   }
  // };
  return (
    <div className="flex flex-col items-center justify-start max-w-[841px] w-auto min-h-[80vh] h-auto gap-6">
      <div className="flex items-center justify-start w-full gap-4 flex-nowrap lg:gap-8">
        <button
          className="bg-[#F7F8F8] h-8 w-8 flex justify-center items-center rounded "
          onClick={handlePageBack}
        >
          <Image src={arrowleft} alt="" className="h-8" />
        </button>
        <div className="flex items-center justify-center w-full gap-8">
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
              {pageNumber.index < 2 && (
                <div className="w-[110px] duration-300 lg:h-[3px] h-[2px] bg-[#D2D4DA] rounded-3xl">
                  {/* <Image src={line} alt="line" /> */}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      {activePage === 1 ? (
        <>
          <ProvideDataComp
            handlePageNext={handlePageNext}
            formData={personalInfo}
            setFormData={setPersonalInfo}
          />
        </>
      ) : activePage === 2 ? (
        <>
          <EmployeeCompanyDetailsComp
            formData={companyInfo}
            setFormData={setCompanyInfo}
          />
        </>
      ) : (
        <>
          {showOTPModal && (
            <div className="fixed top-0 left-0 min-w-full min-h-full bg-[#e3e3e3] md:px-0 px-8 bg-opacity-50 flex justify-center items-center duration-300">
              <EmployeeOtpInput
                onClick={handleCloseOTPModal}
                onClose={handleCloseOTPModal}
              />
            </div>
          )}
        </>
        // router.push("/employee-login/employee-jobs")
      )}

      <button
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
      </button>
    </div>
  );
};

export default EmployeeActiveBar;
