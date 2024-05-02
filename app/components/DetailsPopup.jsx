import Image from "next/image";
import React from "react";
import cross from "@/public/assets/cross.svg";
import Link from "next/link";

const DetailsPopup = ({ onClose }) => {
  return (
    <>
      <div className="shadow-sm md:w-[550px] bg-white rounded-3xl">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">
              Kindly Provide The Following Details
            </h2>
            <button className="bg-[#F8F8F8] p-1" onClick={onClose}>
              <Image src={cross} alt="" className="h-3" />
            </button>
          </div>
          <div className="">
            <p className="text-[#8E8E8E] text-[10px]">
              if you have changed job, please update the end date and continue
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <form className="pt-5">
              <div className="grid grid-cols-6 gap-3  rounded-2xl">
                <div className="flex flex-col col-span-6 gap-2 px-3 py-1 border rounded-md">
                  <p className="text-sm font-medium">Product Organization</p>
                  <p className="text-[#949494]">v4 jobs</p>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="role"
                    className="block py-1 text-sm font-medium"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    className=" w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                  >
                    <option value="selectrole">select rolee</option>
                    <option value="web">Web developer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="start-date"
                    className="block py-1 text-sm font-medium"
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
                <div className="col-span-6 bg-[#F8F8F8] flex flex-col gap-1 px-2 py-3 rounded-xl">
                  <div className="flex gap-1">
                    <input type="checkbox" name="" id="" />
                    <p className="text-sm font-medium">
                      Currently Working Here
                    </p>
                  </div>
                  <label
                    htmlFor="end-date"
                    className="block py-1 text-sm font-medium"
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
                <div className="col-span-6">
                  <label
                    htmlFor="employee"
                    className="block py-1 text-sm font-medium"
                  >
                    Employee Type
                  </label>
                  <select
                    id="role"
                    className=" w-full rounded-lg border outline-none px-2 bg-white text-sm text-[#949494] shadow-sm py-2"
                  >
                    <option value="employee">Employee Type</option>
                    <option value="web">Web developer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-span-6">
                  <Link href="/jobtitle">
                    <button className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white">
                      Next
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPopup;
