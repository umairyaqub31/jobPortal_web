"use client";

import AllJobsComp from "@/app/components/AllJobsComp";
import CompanyProfileComp from "@/app/components/Company-Profile";
import DatabaseComp from "@/app/components/DatabaseComp";
import EmployeeProfileComp from "@/app/components/Employee-Profile";
import HeadBarComp from "@/app/components/Headbar";
import ReferralComp from "@/app/components/ReferralComp";
import { EmployeeNavData } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
const EMployeeProfilePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(currentIndex);
  return (
    <>
      <HeadBarComp
        visible={true}
        isLoggedIn={true}
        help={true}
        jobs={true}
        noBlog={true}
      />
      {/* main container */}
      <div className="w-full h-full min-h-screen bg-[#f8f8f8] flex justify-start items-start flex-nowrap md:space-x-8 space-x-3">
        {/* left div */}
        <div className="bg-white lg:min-w-[18vw] min-w-[70px] min-h-[100vh] h-full flex flex-col justify-start items-center pt-[7%] md:gap-6 gap-3 md:p-6 p-3 text-[#909198] text-sm duration-300 font-normal">
          {EmployeeNavData?.map((item, idx) => (
            <button
              key={idx}
              className={`w-full h-[44px] hover:bg-[#2381E30D] duration-200 rounded-lg flex justify-start items-center hover:text-[#1F6CDD] text-center gap-3 py-[10px] px-[12px] cursor-pointer ${
                currentIndex === idx + 1 && "bg-[#2381E30D] text-[#1F6CDD]"
              }`}
              onClick={() => setCurrentIndex(idx + 1)}
            >
              <Image
                src={item.icons}
                alt="icons"
                width={500}
                height={500}
                className="object-contain w-6 h-6"
              />
              <span className="max-lg:hidden">{item.title}</span>
            </button>
          ))}
        </div>
        {/* right div */}
        <div className="w-auto h-full pr-[7%] min-h-screen duration-300 grow">
          {currentIndex == 1 ? (
            <>
              <AllJobsComp />
            </>
          ) : currentIndex == 2 ? (
            <>
              <DatabaseComp />
            </>
          ) : currentIndex == 3 ? (
            <>third Page</>
          ) : currentIndex == 4 ? (
            <>
              <ReferralComp />
            </>
          ) : (
            <>
              <CompanyProfileComp />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EMployeeProfilePage;
