"use client";

import HomeWrapper from "@/app/components/Home-Wrapper";
import OtpPopup from "@/app/components/OtpPopup";
import arrowleft from "@/public/assets/arrowleft.svg";
import Image from "next/image";
import { useState } from "react";

const Mobilepage = () => {
  const [showOTPModal, setShowOTPModal] = useState(false);

  const handleNextButtonClick = () => {
    setShowOTPModal(true);
  };

  const handleCloseOTPModal = () => {
    setShowOTPModal(false);
  };

  return (
    <>
      <HomeWrapper>
        <div className="col-span-12 px-4 py-4 duration-300 lg:py-8 w-flex-1 lg:px-14 md:col-span-6 rounded-xl sm:h-[95vh] h-[100vh]">
          <div className="flex flex-col items-start justify-between min-h-full">
            <div className="w-full space-y-8">
              <div className="flex items-center w-full h-auto gap-1">
                <button className="bg-[#F7F8F8] p-2 rounded ">
                  <Image
                    src={arrowleft}
                    alt="arrowleft"
                    className="rounded-md"
                  />
                </button>
                <h1 className="text-[#909198]">Go Back</h1>
              </div>
              <div className="">
                <h1 className="font-bold lg:text-xl text-lg text-[#393A44]">
                  Enter Your Mobile Number
                </h1>
              </div>
              <div className="">
                <input
                  type="text"
                  className="w-full px-4 py-2 space-x-8 border outline-none rounded-xl lg:text-sm text-xs font-normal placeholder:text-[#909198]"
                  placeholder="+91 - enter your 10 digit mobile number |"
                />
                <p className="text-xs text-[#909198] font-normal py-2 px-3">
                  You will receive an OTP on this number
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex items-center gap-2 lg:px-12">
                <input type="checkbox" />
                <p className="text-[#8E8E8E] font-normal text-sm">
                  I would like to get latest job updates on Whatsapp
                </p>
              </div>
              <div className="w-full py-4">
                <button
                  onClick={handleNextButtonClick}
                  className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full text-sm font-semibold w-full py-2 text-[#F8F8F8]"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </HomeWrapper>

      {/* OTP Modal */}
      {showOTPModal && (
        <div className="fixed top-0 left-0 min-w-full min-h-full bg-[#e3e3e3] md:px-0 px-8 bg-opacity-50 flex justify-center items-center duration-300">
          <OtpPopup
            onClick={handleCloseOTPModal}
            onClose={handleCloseOTPModal}
          />
        </div>
      )}
    </>
  );
};

export default Mobilepage;
