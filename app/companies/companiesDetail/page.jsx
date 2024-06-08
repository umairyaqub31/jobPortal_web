"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidStar } from "react-icons/bi";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import Save from "@/public/saveVector.png";
import Bag from "@/public/briefcase.png";
import { useRouter } from "next/router";
import Address from "@/public/file-validation.png";
import ArrowForward from "@/public/Arrow Left Up.png";
import Location from "@/public/location-01.png";
import { useSelector } from "react-redux";
import { getCompanyJobs } from "@/app/services";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { setJobId } from "@/app/redux";
// const jobbs = [
//   {
//     jobTitle: "Abcd",
//     description: "sdnqwdqwb",
//     shift: "night",
//     jobArea: "dqnwipfjqf",
//   },
// ];
export default function CompaniesDetails() {
  const dispatch = useDispatch();
  const { companyName, companyId } = useSelector((state) => state.root.user);
  console.log("COMPANY NAME IS", companyName);
  console.log("COMPANY Id IS", companyId);
  const [selectedTab, setSelectedTab] = useState("Jobs");
  const [jobs, setJobs] = useState([]);

  const handletabs = (v) => {
    setSelectedTab(v);
  };

  const fetchCompanyJOB = () => {
    const pageno = 1;
    getCompanyJobs(pageno, companyId)
      .then((res) => {
        console.log("Company Job API...............", res);
        setJobs(res.data.jobs);
      })
      .catch((err) => {
        console.log("err.....", err?.message);
      });
  };

  useEffect(() => {
    fetchCompanyJOB();
  }, []);

  console.log("JOBSSSSSSSSSSSSSSSSSSSss", jobs);
  return (
    <div>
      <div className="lg:p-[75px] p-[20px]">
        <div className="flex flex-wrap lg:flex-nowrap sm:flex-wrap">
          <div className="bg-gray-300 flex lg:m-0 m-auto rounded-[16px] shadow h-[152px] w-[152px]"></div>
          <div className="p-[21px]">
            <p className="font-semibold text-[30px] text-black">
              {companyName}
            </p>
            <p
              className="font-semibold text-[18px] mt-[5px] lg:text-start text-center "
              style={{ color: "rgba(0, 0, 0, 0.8)" }}
            >
              Transforming the Future, Now
            </p>
            <div
              className="flex flex-wrap lg:flex-nowrap sm:flex-wrap gap-4 lg:m-0 m-auto mt-[16px]"
              style={{ color: "rgba(0, 0, 0, 0.8)" }}
            >
              <div className="rounded-full  border-2 py-[6px] px=[13px] px-3 ">
                <p className="text-[16px]">IT Services & Consulting</p>
              </div>
              <div className="rounded-[40px] py-[6px] px=[13px] border-2 px-3 ">
                <p className="text-[16px]">Private</p>
              </div>
              <div className="rounded-[40px] py-[6px] px=[13px] border-2 px-3">
                <p className="text-[16px]">Foreign MNC</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-start justify-center mt-[28px]">
          <p
            className={`font-semibold lg:text-[18px] text-[16px] mr-[53px] cursor-pointer ${
              selectedTab == "Overview"
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
            onClick={() => handletabs("Overview")}
          >
            Overview
          </p>
          <p
            className={`font-semibold lg:text-[18px] text-[16px] mr-[53px] cursor-pointer ${
              selectedTab == "Join"
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
            onClick={() => handletabs("Join")}
          >
            Why Join Us
          </p>
          <p
            className={`font-semibold lg:text-[18px] text-[16px] cursor-pointer ${
              selectedTab === "Jobs"
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
            onClick={() => handletabs("Jobs")}
          >
            Jobs
          </p>
        </div>
        {selectedTab == "Jobs" && (
          <div>
            <div
              className="bg-D9D9D9   rounded-[16px] py-[31px] px-[24px] mt-[28px] shadow h-auto lg:w-[80%] w-[100%] "
              style={{
                background: "linear-gradient(#FFFFFF, #FFF4E0 )",
              }}
            >
              <p className="font-semibold text-[18px] color-black  ">
                Departments hiring at Accolite Digital
              </p>
              <div className="flex flex-wrap lg:flex-nowrap sm:flex-wrap mt-[21px] gap-4">
                <div className="bg-white   rounded-[16px] p-[16px]   shadow h-[102px] lg:w-[20%] w-[100%] sm:w-[100%]  md:w-[100%] ">
                  <p className="font-semibold text-[18px]  ">
                    Engineering - Software & QA
                  </p>
                  <div
                    className="flex mt-3 lg:mt-0 items-center"
                    style={{ color: "#3F6EEC" }}
                  >
                    <p className="text-[16px] ">93 openings </p>
                    <IoIosArrowForward className="ml-8" />
                  </div>
                </div>
                <div className="bg-white   rounded-[16px] p-[16px] shadow h-[102px] lg:w-[20%] w-[100%] sm:w-[100%]  md:w-[100%]">
                  <p className="font-semibold text-[18px]  ">
                    Engineering - Software & QA
                  </p>
                  <div
                    className="flex mt-3 lg:mt-0 items-center"
                    style={{ color: "#3F6EEC" }}
                  >
                    <p className="text-[16px] ">93 openings </p>
                    <IoIosArrowForward className="ml-8" />
                  </div>
                </div>
                <div className="bg-white   rounded-[16px] p-[16px]   shadow h-[102px] lg:w-[20%] w-[100%] sm:w-[100%]  md:w-[100%]">
                  <p className="font-semibold text-[18px]  ">
                    Engineering - Software & QA
                  </p>
                  <div
                    className="flex mt-3 lg:mt-0 items-center"
                    style={{ color: "#3F6EEC" }}
                  >
                    <p className="text-[16px] ">93 openings </p>
                    <IoIosArrowForward className="ml-8" />
                  </div>
                </div>
                <div className="bg-white   rounded-[16px] p-[16px]   shadow h-[102px] lg:w-[20%] w-[100%] sm:w-[100%]  md:w-[100%]">
                  <p className="font-semibold text-[18px]  ">
                    Engineering - Software & QA
                  </p>
                  <div
                    className="flex mt-3 lg:mt-0 items-center"
                    style={{ color: "#3F6EEC" }}
                  >
                    <p className="text-[16px] ">93 openings </p>
                    <IoIosArrowForward className="ml-8" />
                  </div>
                </div>
                <div className="bg-white   rounded-[16px] p-[16px]  shadow h-[102px] lg:w-[20%] w-[100%] sm:w-[100%]  md:w-[100%]">
                  <p className="font-semibold text-[18px]  ">
                    Engineering - Software & QA
                  </p>
                  <div
                    className="flex mt-3 lg:mt-0 items-center"
                    style={{ color: "#3F6EEC" }}
                  >
                    <p className="text-[16px] ">93 openings </p>
                    <IoIosArrowForward className="ml-8" />
                  </div>
                </div>
              </div>
            </div>
            <p className="font-semibold text-[18px] mt-[28px] ">
              120 Jobs openings at Accolite Digital
            </p>

            <div className="flex flex-wrap lg:flex-nowrap sm:flex-wrap gap-4 items-center mt-[15px]">
              <select
                className="font-medium text-[16px] border-2 px-3 py-1  rounded-full"
                style={{ color: "rgba(0, 0, 0, 0.6)" }}
              >
                <option value="0">Diversity Category</option>
                <option value="1">Audi</option>
              </select>
              <select
                className="font-medium text-[16px] border-2 px-3 py-1  rounded-full"
                style={{ color: "rgba(0, 0, 0, 0.6)" }}
              >
                <option value="0">Department</option>
                <option value="1">Audi</option>
              </select>
              <select
                className="font-medium text-[16px] border-2 px-3 py-1  rounded-full"
                style={{ color: "rgba(0, 0, 0, 0.6)" }}
              >
                <option value="0">Location</option>
                <option value="1">Audi</option>
              </select>

              <select
                className="font-medium text-[16px] border-2 px-3 py-1 rounded-full"
                style={{ color: "rgba(0, 0, 0, 0.6)" }}
              >
                <option value="0">Experiance</option>
                <option value="1">Audi</option>
              </select>
            </div>

            {jobs.map((item, idx) => (
              <div
                key={idx}
                className="bg-D9D9D9 rounded-[16px] lg:p-[30px] p-[16px] mt-[28px] shadow h-auto lg:w-[55%] w-[100%]"
              >
                <div className="flex flex-wrap lg:flex-nowrap justify-between">
                  <p className="font-semibold text-[18px]">{item.jobTitle}</p>
                  <button className="bg-[#3F6EEC] flex justify-center items-center text-center rounded-full font-normal text-[10px] w-auto h-[28px] text-white gap-2 py-1 px-2">
                    <Link
                      href={"/job-details"}
                      onClick={() => dispatch(setJobId(item._id))}
                    >
                      {" "}
                      <span>{`View Detail`}</span>{" "}
                    </Link>
                    <Image
                      src={ArrowForward}
                      alt="arrow"
                      className="object-contain w-4 h-4"
                    />
                  </button>
                </div>
                <div className="flex lg:flex-nowrap flex-wrap mt-[8px]">
                  <p className="font-medium text-[16px]">
                    Accolite Software India Pvt Ltd
                  </p>
                  <BiSolidStar
                    style={{ color: "#EDBD57" }}
                    className="mx-[8px] h-[16px] w-[16px] mt-1"
                  />
                  <p className="font-medium text-[16px]">3.5</p>
                  <div className="lg:border-r-2 lg:mx-[8px] "></div>
                  <p className="font-medium text-[16px]">(678 Reviews)</p>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap lg:gap-10 gap-5 mt-[25px] items-center">
                  <div className="flex items-center   ">
                    <Image
                      src={Bag}
                      alt="Save"
                      className="h-[24px] w-[24px] mr-[5px]"
                    />
                    <p className="text-[16px]">5-9 yrs</p>
                  </div>
                  <div className="flex items-center lg:ml-0 md:ml-0 ml-auto ">
                    <p className="text-[16px]"> {item.shift} Shift</p>
                  </div>
                  <div className="flex items-center  ">
                    <Image
                      src={Location}
                      alt="Location"
                      className="h-[24px] w-[24px] mr-[5px]"
                    />
                    <p className="text-[16px]">{item.jobArea}</p>
                  </div>
                </div>
                <div className="flex items-center mt-[19px] ">
                  <Image
                    src={Address}
                    alt="Address"
                    className="h-[24px] w-[24px] mr-[5px]"
                  />
                  <p className="text-[14px]">{item.description}</p>
                </div>
                <div className="flex items-center mt-[25px] justify-between">
                  <p className="text-[16px] font-regular text-gray-400">
                    30+ Days ago
                  </p>
                  <div className="flex items-center  ">
                    <Image
                      src={Save}
                      alt="Save"
                      className=" w-[16px] h-[20px] mr-[8px]"
                    />
                    <p className="text-[16px]">Save</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* {selectedTab == "Overview" && <p>Overview</p>}
        {selectedTab == "Join" && <p>Join</p>} */}
      </div>
    </div>
  );
}
