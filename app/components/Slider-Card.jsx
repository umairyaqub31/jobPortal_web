"use client";

// ! imports
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ! lib imports
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const SliderCardComp = ({ data }) => {
  const [start, setStart] = useState(0);

  const handleForward = () => {
    if (start + 1 + 4 <= data.length) {
      setStart(start + 1);
    }
  };

  const handleBackward = () => {
    if (start - 1 >= 0) {
      setStart(start - 1);
    }
  };

  console.log(start);
  return (
    <>
      {/* main container */}
      <div className="flex items-center justify-start w-full h-auto gap-4 px-8 overflow-x-hidden duration-300 md:justify-center flex-nowrap">
        <button onClick={handleBackward} className="hidden md:block">
          <IoIosArrowBack className="w-6 h-6" />
        </button>

        {data.slice(start, start + 4).map((item, idx) => {
          return (
            <div
              key={idx}
              className="bg-[#FFFFFF] md:w-[297px] w-[211px] md:min-h-[321px] min-h-[303px] h-auto p-8 gap-4 rounded-2xl drop-shadow-sm flex flex-col justify-start items-start duration-300 text-start"
            >
              {/* logo  */}
              <Image
                src={item.logo_src}
                alt="logo"
                className="object-contain w-[72px] h-[67px]"
              />

              {/* title */}
              <h1 className="text-[#000000] w-full h-auto flex flex-wrap justify-center items-center md:font-bold font-semibold md:text-xl text-[16px]">
                {item.title}
              </h1>

              {/* description */}
              <p className="w-full h-auto flex flex-wrap justify-center items-center text-[#909198] font-normal md:text-sm text-xs ">
                {item.description}
              </p>

              {/* job button */}
              <Link href={"/jobs"} passHref>
                <button className="hover:bg-[#3F6EEC] bg-transparent drop-shadow-sm hover:text-white text-black duration-300 border hover:border-none text-center h-10 w-[130px] font-normal text-xs flex justify-center rounded-[28px] items-center gap-2">
                  <span>{`View Job`}</span>
                  <span>{`>`}</span>
                </button>
              </Link>
            </div>
          );
        })}

        <button onClick={handleForward} className="hidden md:block">
          <IoIosArrowForward className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default SliderCardComp;
