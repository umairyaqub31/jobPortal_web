// !imports
import React from "react";
import Link from "next/link";
import Image from "next/image";

// !imports
import ArrowBlue from "@/public/ArrowBlue.png";

// ! lib imports
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const SearchBarComp = () => {
  return (
    <>
      {/* main container */}
      <div className="md:bg-[#FFFFFF] bg-transparent drop-shadow-sm h-auto w-auto py-2 px-4 flex md:flex-row flex-col md:justify-between justify-center items-center rounded-full md:gap-14 gap-0 duration-300">
        {/* search by jobs */}
        <label
          htmlFor="search"
          className="md:bg-transparent bg-white md:h-10 h-14 min-w-[239px] md:w-auto w-[325px] flex justify-start items-center space-x-2 rounded-tl-[16px] rounded-tr-[16px] max-md:px-4 max-md:py-2"
        >
          <button>
            <CiSearch className="w-6 h-6 text-[#3F6EEC]" />
          </button>
          <input
            type="search"
            placeholder={`Search Jobs By company`}
            className="text-sm font-normal text-[#909198] outline-none bg-transparent w-full"
          />
        </label>

        {/* divider */}
        <div className="md:block hidden w-auto h-[29px] border-l-[1px] border-[#000000]" />

        {/* search jobs by location */}
        <label
          htmlFor="search"
          className="md:bg-transparent bg-white md:h-10 h-14 min-w-[239px] md:w-auto w-[325px] flex justify-start items-center space-x-2 rounded-bl-[16px] rounded-br-[16px] max-md:px-4 max-md:py-2"
        >
          <button>
            <CiLocationOn className="w-6 h-6 text-[#3F6EEC]" />
          </button>
          <input
            type="search"
            placeholder={`Search Jobs By role`}
            className="text-sm font-normal text-[#909198] outline-none bg-transparent w-full"
          />
        </label>

        {/* search button  */}
        <button className="bg-[#3F6EEC] text-white py-4 px-6 rounded-full md:w-24 w-full md:h-auto h-[40px] flex justify-center items-center shadow-lg max-md:mt-4">
          {`Search`}
        </button>

        {/* view all */}
        <Link href="/jobs">
          <button className="border border-[#0000001A] gap-2 py-2 px-[17px] min-w-[112px] min-h-[37px] text-[#3F6EEC] text-sm font-normal flex justify-center items-center rounded-full">
            <span>View All</span>
            <Image
              src={ArrowBlue}
              alt="ArrowBlue"
              width={500}
              height={500}
              className="object-contain w-6 h-6"
            />
          </button>
        </Link>
      </div>
    </>
  );
};

export default SearchBarComp;
