import React from "react";
import Image from "next/image";
import hero from "@/public/assets/hero.svg";
import logo from "@/public/assets/logo.svg";
import pc from "@/public/assets/pc.svg";

const SideBar = () => {
  return (
    <>
      <div className="md:w-[460px] w-auto duration-300 min-h-[100vh] h-auto bg-[#F8F8F8] rounded-[32px] space-y-8 py-8 px-[54px]">
        <div className="flex">
          <Image src={hero} alt="" className="h-5" />
          <Image src={logo} alt="" className="h-4" />
        </div>
        <div className="flex flex-col gap-5 lg:gap-7 md:gap-2">
          <div className="">
            <Image
              src={pc}
              alt=""
              className="w-full flex items-center justify-center h-[40vh]"
            />
          </div>
          <div className="flex flex-col gap-6 lg:gap-5 md:gap-2 text-[#393A44]">
            <h1 className="font-[700] text-[20px]">
              Complete your profile! 👋
            </h1>
            <h1 className="font-[600] text-[14px]">
              unlock 500+ jobs from top companies and receive direct calls from
              hRs
            </h1>
            <ul className="flex flex-col gap-3 lg:gap-4 md:gap-2 font-[400] text-[14px]">
              <li className="">• Takes only 4 steps</li>
              <li className="">• Stand out among other candidates</li>
              <li className="">• Direct calls from top company HRs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
