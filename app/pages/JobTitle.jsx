"use client";

import ActiveBar from "@/app/components/ActiveBar";
import SideBar from "@/app/components/SideBar";
import Link from "next/link";
import React, { useState } from "react";

const JobTitle = () => {
  const [activePage, setActivePage] = useState(4);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <div className="bgImage p-4 min-h-screen">
        <div className=" p-4 rounded-3xl bg-white">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-5  lg:gap-24 rounded-2xl">
            <div className="col-span-12 md:col-span-5 lg:col-span-4 bg-[#F8F8F8] rounded-3xl ">
              <SideBar />
            </div>
            <div className="col-span-12 lg:col-span-8 md:col-span-7  bg-white rounded-xl">
              <div className="">
                <div className="md:block hidden">
                  <ActiveBar activePage={activePage} />
                </div>
                <div className="">
                  <form className="">
                    <div className="flex flex-col md:min-h-screen md:justify-between">
                      <div className="grid grid-cols-6 gap-1 py-3 px-5 rounded-2xl">
                        <div className="col-span-6">
                          <label
                            htmlFor="prefrence"
                            className="block text-sm font-medium py-1 "
                          >
                            Preferred job title/role
                          </label>
                          <select
                            id="experiencelevel"
                            className=" w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                          >
                            <option value="experience">
                              write how many year of experience you have
                            </option>
                            <option value="experience">1</option>
                            <option value="experience">2</option>
                          </select>
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="prefrence"
                            className="block text-sm font-medium py-1 "
                          >
                            Job Prefrence
                          </label>
                          <select
                            id="experiencelevel"
                            className=" w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                          >
                            <option value="experience">
                              write how many year of experience you have
                            </option>
                            <option value="experience">Web</option>
                            <option value="experience">flutter</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-span-6">
                        <Link href="/upload">
                          <button
                            onClick={handlePageClick}
                            className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white"
                          >
                            Next
                          </button>
                        </Link>
                      </div>
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

export default JobTitle;
