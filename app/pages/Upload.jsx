"use client";

import ActiveBar from "@/app/components/ActiveBar";
import SideBar from "@/app/components/SideBar";
import Image from "next/image";
import React, { useState } from "react";
import upload from "@/public/assets/upload.svg";
import Link from "next/link";

const Upload = () => {
  const [activePage, setActivePage] = useState(5);

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
              <div className="flex-col  justify-between">
                <div className="md:block hidden">
                  <ActiveBar activePage={activePage} />
                </div>
                <div className="flex flex-col md:min-h-screen md:justify-between md:gap-0 gap-5">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-base font-bold">Upload CV</h1>
                    <label
                      htmlFor="upload"
                      className="w-[200px] gap-1 relative cursor-pointer   rounded-full border border-[#3F6EEC]  text-[#3F6EEC] px-4 py-2 flex items-center"
                    >
                      <input
                        type="file"
                        id="upload"
                        className="hidden text-[#e7f2fa]"
                      />
                      <Image
                        src={upload}
                        alt="Upload Icon"
                        className="h-5 w-5 "
                      />
                      <p className="text-sm font-medium">upload your CV here</p>
                    </label>
                  </div>

                  <div className="col-span-6">
                    <Link href="/details">
                      <button
                        onClick={handlePageClick}
                        className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white"
                      >
                        Next
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
