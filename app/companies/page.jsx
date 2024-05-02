"use client";

// ! imports
import React, { useState } from "react";
import Image from "next/image";

// ! local imports
import { FilterButtonData, SliderCardData } from "@/lib/data";
import ArrowCard from "@/public/ArrowCard.png";
import Bag from "@/public/Book Bookmark.png";
import Dollar from "@/public/Dollar.png";
import Magnifer from "@/public/Magnifer.png";
import filter from "@/public/filter.png";
import FilterComp from "@/app/components/Filter";
import HeadBarComp from "@/app/components/Headbar";

const CompaniesPage = () => {
  const [filerOpen, setFilterOpen] = useState(false);
  console.log(filerOpen);
  return (
    <>
      <HeadBarComp
        visible={true}
        isLoggedIn={true}
        searchBar={true}
        jobs={true}
      />

      {filerOpen && <FilterComp setFilterOpen={setFilterOpen} />}

      {/* top comp */}
      <div className="flex items-center justify-between w-full h-auto gap-2 px-2 my-4 lg:hidden">
        <div className="rounded-full w-[295px] h-[40px] flex justify-start items-center gap-2 py-2 px-4 border">
          <Image
            src={Magnifer}
            alt="Magnifer"
            className="object-contain w-6 h-6"
          />
          <input
            type="search"
            className="text-sm font-normal bg-transparent outline-none text-[#909198]"
            placeholder="search jobs by ‘cmpany’"
          />
        </div>

        <button
          className="flex items-center justify-center w-10 h-10 border rounded-full"
          onClick={() => setFilterOpen(!filerOpen)}
        >
          <Image
            src={filter}
            alt="filter"
            className="object-contain w-[17px] h-[17px]"
          />
        </button>
      </div>
      {/* main container */}
      <div className="w-full min-h-screen h-auto bg-[#f8f8f8] gap-8 py-8 duration-300 px-2 lg:px-[8%]">
        {/* filter bar  */}

        <div className="flex-wrap items-center justify-center hidden w-full h-auto gap-4 lg:flex">
          <button className="w-[37px] h-[37px] rounded-lg bg-white drop-shadow-sm flex justify-center items-center">
            <Image
              src={filter}
              alt="filter"
              className="object-contain w-4 h-4"
            />
          </button>

          {/* filter button  */}
          {FilterButtonData?.map((item, idx) => (
            <select
              key={idx}
              name="filter"
              id=""
              className="gap-2 px-4 py-2 bg-white rounded-lg text-[#909198] text-sm font-normal w-[143px] h-[37px] outline-none drop-shadow-sm"
            >
              {item.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ))}
        </div>

        {/* main body  */}
        <div className="flex flex-wrap items-center justify-center w-full h-auto gap-8 my-0 md:my-8">
          {/* job detail card */}
          {SliderCardData?.map((item, idx) => (
            <div
              key={idx}
              className="w-[563px] min-h-[169px] h-auto bg-white rounded-2xl p-8 flex justify-between items-start gap-4"
            >
              <Image
                src={item.logo_src}
                alt="reactlogo"
                className="object-contain w-[72px] h-[67px]"
              />

              <div className="w-auto h-full flex flex-col justify-normal items-start gap-4 text-[#909198]">
                <h1 className="text-[#000000] text-base font-semibold ">
                  {item.title}
                </h1>

                <span className="text-[14px] font-normal">
                  {item.description}
                </span>

                <div className="w-full h-auto flex justify-start items-center gap-4 text-[#909198] text-xs">
                  <div className="flex items-center justify-center w-auto h-auto space-x-2 text-center flex-nowrap">
                    <Image
                      src={Dollar}
                      alt="bag"
                      className="object-contain w-4 h-4"
                    />
                    <span>{`1455/month`}</span>
                  </div>

                  {/* divider */}
                  <div className="w-[1px] h-[15px] bg-[#0000001A]"></div>

                  <div className="flex items-center justify-center w-auto h-auto space-x-1 text-center flex-nowrap">
                    <Image
                      src={Bag}
                      alt="bag"
                      className="object-contain w-4 h-4"
                    />
                    <span>{`graduate`}</span>
                  </div>
                </div>
              </div>

              <Image
                src={ArrowCard}
                alt="ArrowCard"
                className="object-contain w-[24px] h-[24px]"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompaniesPage;
