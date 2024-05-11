"use client";

// *imports
import Image from "next/image";
import { useState } from "react";

// * local imports
import { DatabaseButtonData } from "@/lib/data";
import arroeDown from "@/public/arroeDown.png";
import Download from "@/public/Download.png";
import ProfileCardComp from "./Profile-Card";
const DatabaseComp = () => {
  const [enableFilter, setEnableFilter] = useState(true);
  const [enableCandidate, setEnableCandidate] = useState(true);
  return (
    <>
      {/* main container */}
      <div className="flex items-start py-[4%] justify-start w-full h-auto  min-h-screen duration-300 gap-4">
        {/* left div */}
        <div className="max-lg:hidden w-[276px] max-h-[369px] h-auto p-4 rounded-xl bg-white space-y-4 duration-300 text-[#434343] text-sm font-medium">
          {/* filter */}
          <div className="flex flex-col items-center justify-start w-full h-auto space-y-4 text-sm duration-300">
            <button
              className="flex items-center justify-between w-full h-auto text-center bg-transparent outline-none"
              onClick={() => setEnableFilter(!enableFilter)}
            >
              <span className="font-semibold">Filters</span>
              <Image
                src={arroeDown}
                alt="arroeDown"
                width={500}
                height={500}
                className="object-contain w-3 h-3"
              />
            </button>
            {enableFilter && (
              <div className="flex flex-col items-center justify-start w-full h-auto gap-2 duration-300">
                <div className="flex justify-start items-center w-full p-2 gap-[10px] font-normal">
                  <input
                    type="checkbox"
                    name="days1"
                    id=""
                    className="border border-[#949494] rounded"
                  />
                  <label htmlFor="days1">Last 1 day</label>
                </div>
                <div className="flex justify-start items-center w-full p-2 gap-[10px] font-normal">
                  <input
                    type="checkbox"
                    name="days1"
                    id=""
                    className="border border-[#949494] rounded"
                  />
                  <label htmlFor="days1">Last 1 day</label>
                </div>
                <div className="flex justify-start items-center w-full p-2 gap-[10px] font-normal">
                  <input
                    type="checkbox"
                    name="days1"
                    id=""
                    className="border border-[#949494] rounded"
                  />
                  <label htmlFor="days1">Last 1 day</label>
                </div>
              </div>
            )}
          </div>

          {/* candidate */}
          <div className="flex flex-col items-center justify-start w-full h-auto space-y-4 text-sm duration-300">
            <button
              className="flex items-center justify-between w-full h-auto text-center bg-transparent outline-none"
              onClick={() => setEnableCandidate(!enableCandidate)}
            >
              <span className="font-semibold">Show Only Candidates Who</span>
              <Image
                src={arroeDown}
                alt="arroeDown"
                width={500}
                height={500}
                className="object-contain w-3 h-3"
              />
            </button>
            {enableCandidate && (
              <div className="flex flex-col items-center justify-start w-full h-auto gap-2 duration-300">
                <div className="flex justify-start items-center w-full p-2 gap-[10px] font-normal">
                  <input
                    type="checkbox"
                    name="days1"
                    id=""
                    className="border border-[#949494] rounded"
                  />
                  <label htmlFor="days1">Have Cv Attached</label>
                </div>

                <div className="flex justify-start items-center w-full p-2 gap-[10px] font-normal">
                  <input
                    type="checkbox"
                    name="days1"
                    id=""
                    className="border border-[#949494] rounded"
                  />
                  <label htmlFor="days1">Loran Apsum</label>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* right div */}

        <div className="w-auto max-lg:w-[60vw] h-auto space-y-4 bg-transparent grow">
          <div className="w-full min-h-[82px] h-auto md:p-4 p-2 flex flex-wrap justify-start items-center text-center md:gap-4 gap-2 bg-white rounded-xl">
            {DatabaseButtonData?.map((item, idx) => (
              <button
                key={idx}
                className={`bg-white border md:text-sm text-xs font-normal text-[#000000] rounded-[22px] text-center flex justify-center items-center gap-2 md:min-w-[82px] w-auto py-2 px-[13px] h-[37px] ${
                  item.activeBtn &&
                  " border-[#1F6CDD] bg-[#ecf1fe] text-[#1F6CDD] font-semibold "
                }`}
              >
                {`${item.title}`}
              </button>
            ))}
            <div className="flex justify-end ml-80">
              <select
                name="gender"
                className="h-8 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              >
                <option value="">Select</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
                <option value="Shortlist">Shortlist</option>
              </select>
            </div>
          </div>

          {/* main content body */}
          <div className="flex flex-col items-center justify-start w-full h-auto gap-4 lg:px-4 px-2 pt-4 pb-12 bg-white rounded-xl">
            <div className="flex items-center justify-between w-full h-auto">
              <div className="flex items-center justify-start w-auto gap-4 text-sm font-normal">
                <input
                  type="checkbox"
                  name="days1"
                  id=""
                  className="border border-[#949494] rounded"
                />
                <label htmlFor="days1">See All</label>
              </div>

              <button className="w-auto h-auto flex justify-start items-center gap-2 outline-none bg-transparent text-[#F69B26] text-sm font-normal text-center">
                <Image
                  src={Download}
                  alt="Download"
                  width={500}
                  height={500}
                  className="object-contain w-6 h-4"
                />
                {`See All`}
              </button>
            </div>

            <ProfileCardComp />
            <ProfileCardComp />
          </div>
        </div>
      </div>
    </>
  );
};

export default DatabaseComp;
