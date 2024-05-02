"use client";

//! imports
import React, { useState } from "react";
import Image from "next/image";

// ! local imports
import close from "@/public/close.png";
import closeBlue from "@/public/close-blue.png";
import { MobileFilterOptions } from "@/lib/data";

const FilterComp = ({ setFilterOpen }) => {
  const [setIndex, setSetIndex] = useState(0);

  console.log(setIndex);

  return (
    <>
      {/* main container */}
      <div
        className="md:hidden fixed z-[9] top-0 left-0 w-full h-auto min-h-screen bg-slate-500/30 flex flex-col justify-end items-center"
        // onClick={() => setFilterOpen(false)}
      >
        {/* /inner container */}
        <div className=" duration-300 w-full py-2 px-4 min-h-[65vh] h-auto bg-white text-[#434343]">
          {/* top div */}
          <div className="flex flex-col items-center justify-center w-full h-auto gap-4">
            <span className="w-[50px] h-[5px] rounded-full bg-[#949494]/60"></span>

            <div className="flex items-center justify-between w-full h-auto">
              <button
                className="w-8 h-8 flex justify-center items-center rounded-lg bg-[#F8F8F8] "
                onClick={() => setFilterOpen(false)}
              >
                <Image
                  src={close}
                  alt="close"
                  className="object-contain w-4 h-4"
                />
              </button>

              <h1 className="text-xl font-bold">{`Filters`}</h1>

              <button className="text-xs font-normal">{`Clear All`}</button>
            </div>

            {/* tags div */}
            <div className="flex items-center justify-start w-full h-auto gap-2">
              {/* tag1 */}
              <div className="border border-[#3F6EEC] bg-[#3F6EEC1A] text-[#3F6EEC] h-[23px] w-auto py-1 px-2 rounded-full flex justify-center items-center gap-2 font-normal text-[10px] text-center">
                <span>{`View Detail`}</span>
                <button>
                  <Image
                    src={closeBlue}
                    alt="closeBlue"
                    className="object-contain w-[5.5px] h-[5.5px]"
                  />
                </button>
              </div>

              {/* tag2 */}
              <div className="border border-[#3F6EEC] bg-[#3F6EEC1A] text-[#3F6EEC] h-[23px] w-auto py-1 px-2 rounded-full flex justify-center items-center gap-2 font-normal text-[10px] text-center">
                <span>{`PRIVATE EQALITY`}</span>
                <button>
                  <Image
                    src={closeBlue}
                    alt="closeBlue"
                    className="object-contain w-[5.5px] h-[5.5px]"
                  />
                </button>
              </div>

              {/* tag3 */}
              <div className="border border-[#3F6EEC] bg-[#3F6EEC1A] text-[#3F6EEC] h-[23px] w-auto py-1 px-2 rounded-full flex justify-center items-center gap-2 font-normal text-[10px] text-center">
                <span>{`NBFC`}</span>
                <button>
                  <Image
                    src={closeBlue}
                    alt="closeBlue"
                    className="object-contain w-[5.5px] h-[5.5px]"
                  />
                </button>
              </div>
            </div>

            {/* divider */}
            <div className="w-full h-[1px] bg-[#0000001A]"></div>

            {/* filter menu  */}
            <div className="flex items-start justify-start w-full h-full gap-8 ">
              {/* left div */}
              <div className="w-[142px] h-full border-r flex flex-col justify-start items-center gap-4">
                {MobileFilterOptions?.map((option, idx) => (
                  <button
                    key={idx}
                    className={`text-[14px] font-normal w-[82px] h-auto text-start ${
                      idx === setIndex ? "text-[#3F6EEC]" : "text-[#434343]"
                    }`}
                    onClick={() => setSetIndex(idx)}
                  >
                    {option.name}
                  </button>
                ))}
              </div>

              {/* right div */}
              <div className="flex flex-col items-center justify-start w-auto h-full gap-2 text-center">
                {MobileFilterOptions?.map((item, idx) => {
                  return (
                    <div
                      className={`${idx === setIndex ? "block" : "hidden"}`}
                      key={idx}
                    >
                      {idx === setIndex && (
                        <>
                          {item.options.map((menu, index) => {
                            return (
                              <div
                                key={index}
                                className="flex items-center justify-start w-full h-auto gap-2 text-start text-[#949494] font-normal"
                              >
                                <input type="checkbox" name={menu} id="" />
                                <label htmlFor={menu}>{menu}</label>
                              </div>
                            );
                          })}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterComp;
