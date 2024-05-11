"use client";

// * imports

import React, { useState } from "react";
import Image from "next/image";

// * local imports
import Avatar from "@/public/avatar1.png";
import Dollar from "@/public/Dollar.png";
import Book from "@/public/Book Bookmark.png";
import arrowDown from "@/public/arroeDown.png";
import blueTick from "@/public/blueTick.png";
import { RemarkOptionData } from "@/lib/data";
const ProfileCardComp = (props) => {
  const { applicants } = props;
  console.log("applicants............PROPS..", applicants);
  const [enableRemark, setEnableRemark] = useState(false);
  const [isCheckedArray, setIsCheckedArray] = useState(
    new Array(RemarkOptionData.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const updatedCheckedArray = [...isCheckedArray];
    updatedCheckedArray[index] = !updatedCheckedArray[index];
    setIsCheckedArray(updatedCheckedArray);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full h-auto gap-4 md:px-4 px-2 pt-6 pb-4 bg-white border rounded-2xl">
        {/* top container */}
        <div className="flex md:flex-row flex-col gap-4 items-center justify-between w-full h-auto">
          {/* profile info  */}
          <div className="flex items-start justify-start w-auto h-auto gap-4">
            <Image
              src={Avatar}
              alt="avatar"
              width={500}
              height={500}
              className="object-contain md:w-[80px] w-[50px] md:h-[80px] h-[50px] rounded-full"
            />

            {/* info div */}
            <div className="text-[#393A44] w-auto h-auto flex flex-col justify-start items-start gap-2">
              <h1 className="md:text-base text-sm font-semibold">
                {applicants?.fullName}
              </h1>
              <button className="min-w-[106px] min-h-[23px] w-auto h-auto py-1 px-4 gap-2 rounded-full flex justify-center items-center text-center bg-[#A37E7A1A] text-[#916D61] text-[10px] font-semibold">
                Applied Today
              </button>

              {/* div */}
              <div className="w-auto h-auto flex justify-start items-start gap-2 text-xs font-normal text-[#909198]">
                <div className="flex items-center justify-center w-auto h-auto gap-2 text-center ">
                  <Image
                    src={Dollar}
                    alt="dollar"
                    width={500}
                    height={500}
                    className="object-contain w-4 h-4"
                  />
                  <span className="">1455/month</span>
                </div>

                <div className="bg-[#0000001A] w-[1px] min-h-[15px] h-full"></div>

                <div className="flex items-center justify-center w-auto h-auto gap-2 text-center ">
                  <Image
                    src={Book}
                    alt="book"
                    width={500}
                    height={500}
                    className="object-contain w-4 h-4"
                  />
                  <span className="">{applicants?.degree}</span>
                </div>
              </div>

              <div className="text-[#909198] text-xs font-normal flex items-center justify-center w-auto h-auto gap-2 text-center ">
                <Image
                  src={Dollar}
                  alt="dollar"
                  width={500}
                  height={500}
                  className="object-contain w-4 h-4"
                />
                <span className="">speaks hindi</span>
              </div>
            </div>
          </div>

          {/* button container */}
          <div className="flex flex-col items-center justify-center w-auto h-auto gap-2 ">
            <button className="py-1 px-2 bg-[#3F6EEC] text-white font-normal text-[10px] rounded-full">
              View Number
            </button>

            <div className="relative w-auto h-auto">
              <button
                className="py-1 px-2 bg-transparent h-[23px] min-w-[70px] w-auto flex justify-between items-center text-center gap-1 text-[#3F6EEC] border border-[#3F6EEC] outline-none font-normal text-[10px] rounded-full"
                onClick={() => setEnableRemark(!enableRemark)}
              >
                <span>Remarks</span>
                <Image
                  src={arrowDown}
                  alt="arrowDown"
                  width={500}
                  height={500}
                  className="object-contain w-2 h-2"
                />
              </button>
              {enableRemark && (
                <div className="absolute w-[105px] h-[112px] border rounded-lg top-6 bg-white z-20 duration-300 right-0 p-2 space-y-2">
                  {RemarkOptionData?.map((item, idx) => (
                    <div
                      key={idx}
                      className="w-full cursor-pointer h-auto flex justify-start items-center gap-2 text-[#393A44] text-xs font-normal"
                    >
                      <input
                        type="checkbox"
                        name="selected"
                        id={`checkbox-${idx}`} // Assign a unique id to each checkbox
                        className="hidden"
                        onChange={() => handleCheckboxChange(idx)}
                      />
                      <label
                        htmlFor={`checkbox-${idx}`} // Use the same id as the input
                        className="flex items-center cursor-pointer justify-start w-full h-auto text-center text-[#393A44] font-normal text-xs"
                      >
                        <div className="flex items-center justify-center w-[18px] h-[18px] border border-gray-400 rounded-full">
                          <div
                            className={`w-full h-full bg-[#3F6EEC1A] rounded-full flex justify-center items-center ${
                              isCheckedArray[idx]
                                ? "bg-[#3F6EEC1A]"
                                : "bg-transparent"
                            }`}
                          >
                            {isCheckedArray[idx] && (
                              <Image
                                src={blueTick}
                                alt="blueTick"
                                width={500}
                                height={500}
                                className="object-contain w-2 h-2"
                              />
                            )}
                          </div>
                        </div>
                        <span className="ml-2">{item.title}</span>
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="py-1 px-2 bg-transparent text-[#E13434] font-normal text-[10px] rounded-full">
              Remove
            </button>
          </div>
        </div>

        {/* divider div */}
        <div className="w-full h-[1px] bg-[#0000001A]"></div>

        {/* bottom container */}
        <div className="flex md:flex-row flex-col items-center justify-center w-full h-auto lg:gap-3 gap-2">
          <div className="text-xs font-normal text-[#909198] min-w-[221px] w-auto md:h-[62px] h-auto flex flex-col justify-start items-center text-center gap-2">
            <span className="font-semibold text-black">Asset</span>
            <span>Fresher In Field Sales</span>
          </div>

          <div className="md:w-[1px] w-[80%] md:min-h-[47px] h-[1px] md:h-full bg-[#0000001A]"></div>

          <div className="text-xs font-normal text-[#909198] min-w-[221px] w-auto md:h-[62px] h-auto flex flex-col justify-start items-center text-center gap-2">
            <span className="font-semibold text-black">Skills</span>
            <span className="w-[165px] h-auto">
              Product Demo Convincing Skills
            </span>
          </div>

          <div className="md:w-[1px] w-[80%] md:min-h-[47px] h-[1px] md:h-full bg-[#0000001A]"></div>

          <div className="text-xs font-normal text-[#909198] min-w-[221px] w-auto md:h-[62px] h-auto flex flex-col justify-start items-center text-center gap-2">
            <span className="font-semibold text-black">Work Experience</span>
            <span className="w-[165px] h-auto">Fresher In Field Sales</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCardComp;
