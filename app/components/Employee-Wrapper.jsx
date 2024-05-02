"use client";

import EmployeeSideBarComp from "@/app/components/Employee-SideBar";
import { useState } from "react";
const EmployeeWrapperComp = ({ children }) => {
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState("");
  const [showOTPModal, setShowOTPModal] = useState(false);

  const handleNextButtonClick = () => {
    if (!phone || phone === "") {
      setError(true);
    } else {
      setError(false);
      // console.log("Phone number before GetPhoneNumber:", phone);
      GetPhoneNumber(phone);
      setShowOTPModal(true);
    }
  };
  return (
    <>
      {/* main container */}
      <div className="w-full h-auto min-h-screen p-0 duration-300 sm:p-5 bgImage">
        {/* main body  */}
        <div className="w-full h-auto bg-white rounded-[32px] md:p-8 p-4 flex justify-start items-start xl:gap-[64px] gap-4 duration-300">
          {/* left div */}
          <div className="block duration-300 max-lg:hidden">
            <EmployeeSideBarComp />
          </div>
          {/* right div */}
          <div className="lg:w-[649px] w-full min-h-screen h-auto py-8 lg:px-[51px] md:px-4 px-0 space-y-8 flex flex-col justify-between duration-300 items-start">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeWrapperComp;
