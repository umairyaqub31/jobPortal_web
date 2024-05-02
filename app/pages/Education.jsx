"use client";

import Image from "next/image";
import React, { useState } from "react";
import add from "@/public/assets/add.svg";
import SideBar from "@/app/components/SideBar";
import ActiveBar from "@/app/components/ActiveBar";
import Link from "next/link";

const Education = () => {
  const [activePage, setActivePage] = useState(2);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };
  return (
    <>
      <div className="bgImage p-4 min-h-screen">
        <div className=" p-4 rounded-3xl bg-white">
          <div className="grid grid-cols-2 md:grid-cols-12  md:gap-14 lg:gap-24 rounded-2xl">
            <div className="col-span-12 md:col-span-5 lg:col-span-4 bg-[#F8F8F8] rounded-3xl ">
              <SideBar />
            </div>
            <div className="col-span-12 lg:col-span-8 md:col-span-7  bg-white rounded-xl ">
              <div className="flex-col min-h-screen flex  justify-between">
                <div className="md:block hidden">
                  <ActiveBar activePage={activePage} />
                </div>
                <div className="">
                  <div className="py-4">
                    <h1 className="font-bold ">Total Years Of Experience</h1>
                  </div>
                  <form className="">
                    <div className="bg-[#F8F8F8] grid grid-cols-6 gap-1 py-3 px-5 rounded-2xl">
                      <div className="col-span-6">
                        <label
                          htmlFor="PasswordConfirmation"
                          className="block text-sm font-medium py-1 "
                        >
                          School
                        </label>
                        <input
                          type="text"
                          id="enter city name"
                          placeholder="Enter City Name"
                          className="w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                        />
                        <button className="text-[#0076FC] text-sm flex items-center py-1 gap-1">
                          <Image src={add} alt="" /> Add Scholl
                        </button>
                      </div>
                      <div className="col-span-6">
                        <label
                          htmlFor="PasswordConfirmation"
                          className="block text-sm font-medium py-1"
                        >
                          Degree
                        </label>
                        <input
                          type="text"
                          id="enter degree"
                          placeholder="Enter Degree"
                          className="w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                        />
                        <button className="text-[#0076FC] text-sm flex items-center py-1 gap-1">
                          <Image src={add} alt="" /> Add degree
                        </button>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="FirstName"
                          className="block text-sm font-medium py-1 "
                        >
                          Grade
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Grade"
                          id="grade"
                          className=" w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="gender"
                          className="block text-sm font-medium py-1 "
                        >
                          Field Of Study
                        </label>
                        <select
                          id="gender"
                          className=" w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                        >
                          <option value="male">CS</option>
                          <option value="female">SE</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-[#F8F8F8] grid  grid-cols-6 gap-2 py-3 my-3 px-5 rounded-2xl">
                      <div className="col-span-6">
                        <label
                          htmlFor="start-date"
                          className="block text-sm font-medium py-1"
                        >
                          Start Date
                        </label>
                        <div className="flex gap-4">
                          <select
                            id="month"
                            placeholder="Select month"
                            className="w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                          >
                            <option value="month">Select Month</option>
                            <option value="month">january</option>
                            <option value="month">Other</option>
                          </select>
                          <select
                            id="year"
                            placeholder="Select Year"
                            className="w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                          >
                            <option value="year">Select year</option>
                            <option value="year">2024</option>
                            <option value="year">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-span-6">
                        <label
                          htmlFor="end-date"
                          className="block text-sm font-medium py-1"
                        >
                          End Date
                        </label>
                        <div className="flex gap-4">
                          <select
                            id="month"
                            placeholder="Select month"
                            className="w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                          >
                            <option value="month">Select Month</option>
                            <option value="month">january</option>
                            <option value="month">Other</option>
                          </select>
                          <select
                            id="year"
                            placeholder="Select Year"
                            className="w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                          >
                            <option value="year">Select year</option>
                            <option value="year">2024</option>
                            <option value="year">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <Link href="/experience">
                        <button
                          onClick={handlePageClick}
                          className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white"
                        >
                          Next
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
