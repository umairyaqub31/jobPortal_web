"use client";

import { JobsButtonData, JobsItemData } from "@/lib/data";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// * local imports
import addBtn from "@/public/addBtn.png";
import MapPoint from "@/public/location.png";

const AllJobsComp = (props) => {
  const { data } = props;
  const [activeBtn, setActiveBtn] = useState(false);
  // useEffect(() => {
  //   console.log("useEffect chala ha ");
  // }, []);
  return (
    <>
      {/* man container */}
      <div className="w-full h-auto min-h-screen py-[4%] lg:space-y-4 space-y-2 duration-300 ">
        <div className="flex items-center md:flex-row flex-col justify-between w-full h-auto gap-6 min-h-[105px] ">
          {/* left div */}
          <div className="flex flex-col items-start justify-between gap-6">
            <h1 className="text-[#000000] text-[20px] font-bold">{`All Jobs`}</h1>
            <div className="flex items-center justify-start w-auto h-auto gap-3 text-[#949494] ">
              {JobsButtonData?.map((item, idx) => (
                <button
                  key={idx}
                  className={`bg-white text-sm font-normal rounded-xl flex justify-center items-center gap-2 min-w-[82px] py-2 px-[13px] h-[37px] ${
                    item.activeBtn &&
                    "border border-[#1F6CDD] text-[#1F6CDD] font-semibold bg-[#ecf1fe]"
                  }`}
                >
                  {`${item.title} (${item.quantity})`}
                </button>
              ))}
            </div>
          </div>
          {/* right div */}
          <div className="flex flex-col items-start justify-between w-auto h-auto gap-6">
            <Link href={"/post-new-job"}>
              <button className="bg-[#1F6CDD] py-[10px] px-4 flex justify-center items-center gap-2 rounded-xl text-white text-sm font-semibold">
                <Image
                  src={addBtn}
                  alt="addBtn"
                  width={500}
                  height={500}
                  className="object-contain w-[20px] h-[20px] "
                />
                <span>{"Post A New Job"}</span>
              </button>
            </Link>

            <select
              name="filterByLocation"
              id=""
              className="w-[165px] h-[37px] py-[8px] px-[13px] bg-transparent rounded-2xl text-[#949494] font-normal text-sm border outline-none"
            >
              <option value="filter by location" selected>
                Filter By Location
              </option>
            </select>
          </div>
        </div>

        {/* main body */}
        <div className="flex flex-col items-start justify-start w-full h-auto gap-4 bg-transparent">
          {/* jobs item */}

          {data?.map((item, idx) => (
            <div
              key={idx}
              className="w-full lg:max-h-[106px] h-auto bg-white rounded-2xl p-6 flex md:flex-row flex-col justify-between items-center gap-4"
            >
              {/* left div */}
              <div className="w-auto h-auto flex flex-col justify-center md:items-start items-center gap-4 text-[#909198] text-xs font-normal">
                <h1 className="text-[#393A44] text-base font-semibold">
                  {item.jobTitle}
                </h1>
                <div className="flex items-center max-sm:hidden justify-start w-auto h-auto gap-4 text-center">
                  <span className="flex items-center justify-start w-auto h-auto gap-2 text-center">
                    <Image
                      src={MapPoint}
                      alt="Map Point"
                      width={500}
                      height={500}
                      className="object-contain w-4 h-4"
                    />
                    {item.jobArea}
                  </span>
                  <div className="w-[2px] min-h-[15px] h-full border border-[#0000001A]"></div>
                  <span>posted on:{item.createdAt}</span>
                  <div className="w-[2px] min-h-[15px] h-full border border-[#0000001A]"></div>
                  <span>{item.industry}</span>
                </div>
              </div>

              {/* right div div */}
              <div className="flex items-center justify-center w-auto h-auto gap-4">
                {/* item */}
                <div className="min-w-[70px] w-auto h-[48px] flex flex-col justify-between items-center text-[#909198] text-[10px] font-semibold">
                  <span className="text-sm text-[#3F6EEC]">0</span>
                  <span>All Candidate</span>
                </div>

                {/* divider */}
                <div className="w-[2px] min-h-[39px] h-full border border-[#0000001A]"></div>

                {/* item */}
                <div className="min-w-[70px] w-auto h-[48px] flex flex-col justify-between items-center text-[#909198] text-[10px] font-semibold">
                  <span className="text-sm text-[#3F6EEC]">0</span>
                  <span>Action Pending</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllJobsComp;
