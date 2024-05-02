import React from "react";
import Image from "next/image";

import ReviewImg from "@/public/Frame.png";
import QRCode from "@/public/QR-Code.png";
import Mockup from "@/public/Phone Mockup 2.png";
import ScreenShot from "@/public/Phone Mockup 1.png";
const DownloadAppComp = () => {
  return (
    <>
      {/* main comp */}
      <div className="w-full min-h-[552px] h-auto bg-gradient-to-r from-[#3F6EEC] to-[#3FCDEC] flex items-center justify-center gap-8">
        {/* left div  */}
        <div className="flex flex-col items-start justify-center w-full h-full gap-8 text-white md:w-1/2 pl-[10%]">
          <h1 className="font-extrabold md:text-[48px] text-[32px] flex flex-nowrap md:w-[540px] w-[351px] h-auto">
            {`Download Apna app!`}
          </h1>

          <p className="flex flex-wrap md:text-base text-[14px] md:font-semibold font-normal md:w-[540px] w-[310px] h-auto">
            {`Unlimited job applications | HRs contact you directly | Track your Applications`}
          </p>

          <Image
            src={ReviewImg}
            alt="frame"
            className="w-[283px] h-[64px] object-contain"
          />
          <Image
            src={QRCode}
            alt="frame"
            className="w-[324px] h-[182px] rounded-[22px] object-contain"
          />
        </div>

        {/* right div */}
        <div className="items-start justify-center hidden w-full h-full gap-8 text-white md:flex md:w-1/2">
          <Image
            src={ScreenShot}
            alt="frame"
            className="w-[271px] h-[543px] object-contain relative -mt-[75px]"
          />{" "}
          <Image
            src={Mockup}
            alt="frame"
            className="w-[271px] mt-[190px] object-contain h-full "
          />
        </div>
      </div>
    </>
  );
};

export default DownloadAppComp;
