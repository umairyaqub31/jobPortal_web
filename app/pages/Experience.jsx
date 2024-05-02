"use client";

import ActiveBar from "@/app/components/ActiveBar";
import SideBar from "@/app/components/SideBar";
import React, { useState } from "react";
import Image from "next/image";
import add from "@/public/assets/add.svg";
import DetailsPopup from "@/app/components/DetailsPopup";

const Experience = () => {
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [activePage, setActivePage] = useState(3);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    setShowOTPModal(true);
  };

  const handleCloseOTPModal = () => {
    setShowOTPModal(false);
  };
  return (
    <>
      <div className="bgImage p-4 min-h-screen">
        <div className=" p-4 rounded-3xl bg-white">
          <div className="grid grid-cols-2 md:grid-cols-12  gap-5 lg:gap-24 rounded-2xl">
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
                            htmlFor="experiencelevel"
                            className="block text-sm font-medium py-1 "
                          >
                            Experience Level
                          </label>
                          <select
                            id="experiencelevel"
                            className=" w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                          >
                            <option value="fresher">Fresher</option>
                            <option value="intermediate">Imtermediate</option>
                            <option value="expert">Expert</option>
                          </select>
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="skill"
                            className="block text-sm font-medium py-1"
                          >
                            Skills
                          </label>
                          <button className="text-[#0076FC] text-sm flex font-medium  items-center py-1 gap-2 border-[#0076FC] border-2 rounded-full px-2">
                            <Image src={add} alt="" /> New Skills
                          </button>
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="experience"
                            className="block text-sm font-medium py-1 "
                          >
                            Experience
                          </label>
                          <input
                            type="text"
                            placeholder="write how many year of experience you have"
                            id="experience"
                            className=" w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="jobdetails"
                            className="block text-sm font-medium py-1 "
                          >
                            Job Details
                          </label>
                          <button className="text-[#0076FC] text-sm flex font-medium  items-center py-1 gap-2 border-[#0076FC] border-2 rounded-full px-2">
                            <Image src={add} alt="" />
                            Add Job
                          </button>
                        </div>
                      </div>

                      <div className="col-span-6">
                        <button
                          onClick={handleNextButtonClick}
                          className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showOTPModal && (
        <div className="fixed top-0 left-0 min-w-full min-h-full bg-[#e3e3e3] md:px-0 px-8 bg-opacity-50 flex justify-center items-center">
          <DetailsPopup
            onClick={handleCloseOTPModal}
            onClose={handleCloseOTPModal}
          />
        </div>
      )}
    </>
  );
};

export default Experience;
