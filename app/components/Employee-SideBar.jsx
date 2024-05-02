// * imports
import React from "react";
import Image from "next/image";

// * local imports
import Logo from "@/public/footer-logo.png";
import rafiki from "@/public/rafiki.png";
const EmployeeSideBarComp = () => {
  return (
    <>
      {/* main div */}
      <div className="md:w-[460px] w-auto duration-300 min-h-[100vh] h-auto bg-[#F8F8F8] rounded-[32px] space-y-8 py-8 px-[54px]">
        <Image
          src={Logo}
          alt="logo"
          width={500}
          height={500}
          className="object-contain w-[120px] h-[24px]"
        />
        <Image
          src={rafiki}
          alt="logo"
          width={500}
          height={500}
          className="object-contain w-[352px] h-[262px]"
        />

        <h1 className="text-[#393A44] font-semibold text-2xl w-full h-auto flex flex-wrap">
          {`Unlock Exceptional Potential: Hire Talent with Ease`}
        </h1>

        <p className="text-[#909198] font-normal text-sm w-full h-auto flex flex-wrap">
          {`Sign in now to access a pool of skilled professionals, elevate your recruitment strategy, and bring exceptional talent on board effortlessly. Your next great hire is just a click away!
`}
        </p>
      </div>
    </>
  );
};

export default EmployeeSideBarComp;
