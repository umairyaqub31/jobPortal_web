"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import FooterImg from "@/public/footer-logo.png";
import Social from "@/public/Social.png";
import { interceptorConfig } from "../services/config";

const FooterComp = () => {
  useEffect(() => {
    interceptorConfig();
  }, []);
  return (
    <div className="w-full min-h-[214px] gap-8 h-auto bg-[#303155] flex flex-col justify-center items-center py-[64px]">
      <div className="flex flex-col items-center justify-center w-full h-auto gap-10 md:flex-row">
        <Image
          src={FooterImg}
          alt="footer"
          className="object-contain w-[188px] h-[38px]"
        />

        <div className="w-[2px] h-[83px] bg-[#626381] md:block hidden"></div>

        <div className="flex flex-col items-center justify-center w-auto h-auto gap-4 md:items-start md:justify-start">
          <h1 className="text-[#FFFFFF] font-bold text-[20px]">
            {`Follow Us On Social Media`}
          </h1>
          <Image
            src={Social}
            alt="Social"
            className="object-contain w-[148px] h-[28px]"
          />
        </div>
      </div>

      <div className="text-[#FFFFFF] text-sm font-normal flex flex-nowrap gap-[20px] justify-center items-center w-full h-auto text-center">
        <p className="">{`Privacy Policy`}</p>
        <p className="">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
};

export default FooterComp;
