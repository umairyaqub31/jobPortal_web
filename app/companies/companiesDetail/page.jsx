import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidStar } from "react-icons/bi";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import Save from "@/public/saveVector.png";
import Bag from "@/public/briefcase.png";
import Address from "@/public/file-validation.png";
import Location from "@/public/location-01.png";
export default function CompaniesDetails() {
  return (
    <div>
      <div className="p-[75px]">
        <div className="flex">
          <div className="bg-D9D9D9  rounded-[16px] shadow h-[152px] w-[152px]"></div>
          <div className="p-[21px]">
            <p className="font-semibold text-[30px] text-black">
              Accolite Digital
            </p>
            <p
              className="font-semibold text-[18px] mt-[5px] "
              style={{ color: "rgba(0, 0, 0, 0.8)" }}
            >
              Transforming the Future, Now
            </p>
            <div
              className="flex mt-[16px]"
              style={{ color: "rgba(0, 0, 0, 0.8)" }}
            >
              <div className="rounded-full  border-2 py-[6px] px=[13px] px-3 mr-[10px]">
                <p className="text-[16px]">IT Services & Consulting</p>
              </div>
              <div className="rounded-[40px] py-[6px] px=[13px] border-2 px-3 mr-[10px]">
                <p className="text-[16px]">Private</p>
              </div>
              <div className="rounded-[40px] py-[6px] px=[13px] border-2 px-3">
                <p className="text-[16px]">Foreign MNC</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[28px]">
          <p className="font-semibold text-[18px] mr-[53px] ">Overview</p>
          <p className="font-semibold text-[18px] mr-[53px] ">Why Join Us</p>
          <p className="font-semibold text-[18px]  ">Jobs</p>
        </div>
        <div className="bg-D9D9D9   rounded-[16px] py-[31px] px-[24px] mt-[28px] shadow h-[207px] w-[1194px]">
          <p className=" text-[18px] color-black  ">
            Departments hiring at Accolite Digital
          </p>
          <div className="flex mt-[21px]">
            <div className="bg-D9D9D9   rounded-[16px] p-[16px] mr-[20px]  shadow h-[102px] w-[213px]">
              <p className="font-semibold text-[18px]  ">
                Engineering - Software & QA
              </p>
              <div className="flex items-center" style={{ color: "#3F6EEC" }}>
                <p className="text-[16px] ">93 openings </p>
                <IoIosArrowForward className="ml-8" />
              </div>
            </div>
            <div className="bg-D9D9D9   rounded-[16px] p-[16px] mr-[20px]  shadow h-[102px] w-[213px]">
              <p className="font-semibold text-[18px]  ">
                Engineering - Software & QA
              </p>
              <div className="flex items-center" style={{ color: "#3F6EEC" }}>
                <p className="text-[16px] ">93 openings </p>
                <IoIosArrowForward className="ml-8" />
              </div>
            </div>
            <div className="bg-D9D9D9   rounded-[16px] p-[16px] mr-[20px]  shadow h-[102px] w-[213px]">
              <p className="font-semibold text-[18px]  ">
                Engineering - Software & QA
              </p>
              <div className="flex items-center" style={{ color: "#3F6EEC" }}>
                <p className="text-[16px] ">93 openings </p>
                <IoIosArrowForward className="ml-8" />
              </div>
            </div>
            <div className="bg-D9D9D9   rounded-[16px] p-[16px] mr-[20px]  shadow h-[102px] w-[213px]">
              <p className="font-semibold text-[18px]  ">
                Engineering - Software & QA
              </p>
              <div className="flex items-center" style={{ color: "#3F6EEC" }}>
                <p className="text-[16px] ">93 openings </p>
                <IoIosArrowForward className="ml-8" />
              </div>
            </div>
            <div className="bg-D9D9D9   rounded-[16px] p-[16px]  shadow h-[102px] w-[213px]">
              <p className="font-semibold text-[18px]  ">
                Engineering - Software & QA
              </p>
              <div className="flex items-center" style={{ color: "#3F6EEC" }}>
                <p className="text-[16px] ">93 openings </p>
                <IoIosArrowForward className="ml-8" />
              </div>
            </div>
          </div>
        </div>
        <p className="font-semibold text-[18px] mt-[28px] ">
          120 Jobs openings at Accolite Digital
        </p>
        <div className="flex items-center mt-[15px]">
          <select
            className=" text-[16px] border-2 px-3 py-1 mr-[11px] rounded-full"
            style={{ color: "rgba(0, 0, 0, 0.6)" }}
          >
            <option value="0">Diversity Category</option>
            <option value="1">Audi</option>
          </select>
          <select
            className=" text-[16px] border-2 px-3 py-1 mr-[11px] rounded-full"
            style={{ color: "rgba(0, 0, 0, 0.6)" }}
          >
            <option value="0">Department</option>
            <option value="1">Audi</option>
          </select>
          <select
            className=" text-[16px] border-2 px-3 py-1 mr-[11px] rounded-full"
            style={{ color: "rgba(0, 0, 0, 0.6)" }}
          >
            <option value="0">Location</option>
            <option value="1">Audi</option>
          </select>

          <select
            className=" text-[16px] border-2 px-3 py-1 rounded-full"
            style={{ color: "rgba(0, 0, 0, 0.6)" }}
          >
            <option value="0">Experiance</option>
            <option value="1">Audi</option>
          </select>
        </div>

        <div className="bg-D9D9D9   rounded-[16px] p-[30px] mt-[28px] shadow h-[246px] w-[715px]">
          <p className="font-semibold text-[18px]">Dot Net</p>
          <div className="flex mt-[8px]">
            <p className="font-medium text-[16px]">
              Accolite Software India Pvt Ltd
            </p>
            <BiSolidStar
              style={{ color: "#EDBD57" }}
              className="mx-[8px] h-[16px] w-[16px] mt-1"
            />
            <p className="font-medium text-[16px]">3.5</p>
            <div className="border-r-2 mx-[8px]"></div>
            <p className="font-medium text-[16px]">(678 Reviews)</p>
          </div>
          <div className="flex mt-[25px] items-center">
            <div className="flex items-center mr-[30px] ">
              <Image
                src={Bag}
                alt="Save"
                className="h-[24px] w-[24px] mr-[5px]"
              />
              <p className="text-[16px]">5-9 yrs</p>
            </div>
            <div className="flex items-center mr-[30px] ">
              <p className="text-[16px]">$ Not disclosed</p>
            </div>
            <div className="flex items-center mr-[30px] ">
              <Image
                src={Location}
                alt="Location"
                className="h-[24px] w-[24px] mr-[5px]"
              />
              <p className="text-[16px]">5-9 yrs</p>
            </div>
          </div>
          <div className="flex items-center mt-[19px] ">
            <Image
              src={Address}
              alt="Address"
              className="h-[24px] w-[24px] mr-[5px]"
            />
            <p className="text-[14px]">
              Experiance with C#/.NET (WPF) 3-tiers application development
              (client / server/db) Bachelor/-
            </p>
          </div>
          <div className="flex items-center mt-[25px] justify-between">
            <p className="text-[16px]" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
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
        <div className="bg-D9D9D9   rounded-[16px] p-[30px] mt-[28px] shadow h-[246px] w-[715px]">
          <p className="font-semibold text-[18px]">Dot Net</p>
          <div className="flex mt-[8px]">
            <p className="font-medium text-[16px]">
              Accolite Software India Pvt Ltd
            </p>
            <BiSolidStar
              style={{ color: "#EDBD57" }}
              className="mx-[8px] h-[16px] w-[16px] mt-1"
            />
            <p className="font-medium text-[16px]">3.5</p>
            <div className="border-r-2 mx-[8px]"></div>
            <p className="font-medium text-[16px]">(678 Reviews)</p>
          </div>
          <div className="flex mt-[25px] items-center">
            <div className="flex items-center mr-[30px] ">
              <Image
                src={Bag}
                alt="Save"
                className="h-[24px] w-[24px] mr-[5px]"
              />
              <p className="text-[16px]">5-9 yrs</p>
            </div>
            <div className="flex items-center mr-[30px] ">
              <p className="text-[16px]">$ Not disclosed</p>
            </div>
            <div className="flex items-center mr-[30px] ">
              <Image
                src={Location}
                alt="Location"
                className="h-[24px] w-[24px] mr-[5px]"
              />
              <p className="text-[16px]">Mumbai</p>
            </div>
          </div>
          <div className="flex items-center mt-[19px] ">
            <Image
              src={Address}
              alt="Address"
              className="h-[24px] w-[24px] mr-[5px]"
            />
            <p className="text-[14px]">
              Experiance with C#/.NET (WPF) 3-tiers application development
              (client / server/db) Bachelor/-
            </p>
          </div>
          <div className="flex items-center mt-[25px] justify-between">
            <p className="text-[16px]" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
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
        <div className="bg-D9D9D9   rounded-[16px] p-[30px] mt-[28px] shadow h-[246px] w-[715px]">
          <p className="font-semibold text-[18px]">Dot Net</p>
          <div className="flex mt-[8px]">
            <p className="font-medium text-[16px]">
              Accolite Software India Pvt Ltd
            </p>
            <BiSolidStar
              style={{ color: "#EDBD57" }}
              className="mx-[8px] h-[16px] w-[16px] mt-1"
            />
            <p className="font-medium text-[16px]">3.5</p>
            <div className="border-r-2 mx-[8px]"></div>
            <p className="font-medium text-[16px]">(678 Reviews)</p>
          </div>
          <div className="flex mt-[25px] items-center">
            <div className="flex items-center mr-[30px] ">
              <Image
                src={Bag}
                alt="Save"
                className="h-[24px] w-[24px] mr-[5px]"
              />
              <p className="text-[16px]">5-9 yrs</p>
            </div>
            <div className="flex items-center mr-[30px] ">
              <p className="text-[16px]">$ Not disclosed</p>
            </div>
            <div className="flex items-center mr-[30px] ">
              <Image
                src={Location}
                alt="Location"
                className="h-[24px] w-[24px] mr-[5px]"
              />
              <p className="text-[16px]">Mumbai</p>
            </div>
          </div>
          <div className="flex items-center mt-[19px] ">
            <Image
              src={Address}
              alt="Address"
              className="h-[24px] w-[24px] mr-[5px]"
            />
            <p className="text-[14px]">
              Experiance with C#/.NET (WPF) 3-tiers application development
              (client / server/db) Bachelor/-
            </p>
          </div>
          <div className="flex items-center mt-[25px] justify-between">
            <p className="text-[16px]" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
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
        <div className="bg-D9D9D9   rounded-[16px] p-[30px] mt-[28px] shadow h-[246px] w-[715px]">
          <p className="font-semibold text-[18px]">Dot Net</p>
          <div className="flex mt-[8px]">
            <p className="font-medium text-[16px]">
              Accolite Software India Pvt Ltd
            </p>
            <BiSolidStar
              style={{ color: "#EDBD57" }}
              className="mx-[8px] h-[16px] w-[16px] mt-1"
            />
            <p className="font-medium text-[16px]">3.5</p>
            <div className="border-r-2 mx-[8px]"></div>
            <p className="font-medium text-[16px]">(678 Reviews)</p>
          </div>
          <div className="flex mt-[25px] items-center">
            <div className="flex items-center mr-[30px] ">
              <Image
                src={Bag}
                alt="Save"
                className="h-[24px] w-[24px] mr-[5px]"
              />
              <p className="text-[16px]">5-9 yrs</p>
            </div>
            <div className="flex items-center mr-[30px] ">
              <p className="text-[16px]">$ Not disclosed</p>
            </div>
            <div className="flex items-center mr-[30px] ">
              <Image
                src={Location}
                alt="Location"
                className="h-[24px] w-[24px] mr-[5px]"
              />
              <p className="text-[16px]">Mumbai</p>
            </div>
          </div>
          <div className="flex items-center mt-[19px] ">
            <Image
              src={Address}
              alt="Address"
              className="h-[24px] w-[24px] mr-[5px]"
            />
            <p className="text-[14px]">
              Experiance with C#/.NET (WPF) 3-tiers application development
              (client / server/db) Bachelor/-
            </p>
          </div>
          <div className="flex items-center mt-[25px] justify-between">
            <p className="text-[16px]" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
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
        <div className="bg-D9D9D9   rounded-[16px] p-[30px] mt-[28px] shadow h-[246px] w-[715px]">
          <p className="font-semibold text-[18px]">Dot Net</p>
          <div className="flex mt-[8px]">
            <p className="font-medium text-[16px]">
              Accolite Software India Pvt Ltd
            </p>
            <BiSolidStar
              style={{ color: "#EDBD57" }}
              className="mx-[8px] h-[16px] w-[16px] mt-1"
            />
            <p className="font-medium text-[16px]">3.5</p>
            <div className="border-r-2 mx-[8px]"></div>
            <p className="font-medium text-[16px]">(678 Reviews)</p>
          </div>
          <div className="flex mt-[25px] items-center">
            <div className="flex items-center mr-[30px] ">
              <Image
                src={Bag}
                alt="Save"
                className="h-[24px] w-[24px] mr-[5px]"
              />
              <p className="text-[16px]">5-9 yrs</p>
            </div>
            <div className="flex items-center mr-[30px] ">
              <p className="text-[16px]">$ Not disclosed</p>
            </div>
            <div className="flex items-center mr-[30px] ">
              <Image
                src={Location}
                alt="Location"
                className="h-[24px] w-[24px] mr-[5px]"
              />
              <p className="text-[16px]">Mumbai</p>
            </div>
          </div>
          <div className="flex items-center mt-[19px] ">
            <Image
              src={Address}
              alt="Address"
              className="h-[24px] w-[24px] mr-[5px]"
            />
            <p className="text-[14px]">
              Experiance with C#/.NET (WPF) 3-tiers application development
              (client / server/db) Bachelor/-
            </p>
          </div>
          <div className="flex items-center mt-[25px] justify-between">
            <p className="text-[16px]" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
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
        <div className="bg-D9D9D9   rounded-[16px] p-[30px] mt-[28px] shadow h-[246px] w-[715px]">
          <p className="font-semibold text-[18px]">Dot Net</p>
          <div className="flex mt-[8px]">
            <p className="font-medium text-[16px]">
              Accolite Software India Pvt Ltd
            </p>
            <BiSolidStar
              style={{ color: "#EDBD57" }}
              className="mx-[8px] h-[16px] w-[16px] mt-1"
            />
            <p className="font-medium text-[16px]">3.5</p>
            <div className="border-r-2 mx-[8px]"></div>
            <p className="font-medium text-[16px]">(678 Reviews)</p>
          </div>
          <div className="flex mt-[25px] items-center">
            <div className="flex items-center mr-[30px] ">
              <Image
                src={Bag}
                alt="Save"
                className="h-[24px] w-[24px] mr-[5px]"
              />
              <p className="text-[16px]">5-9 yrs</p>
            </div>
            <div className="flex items-center mr-[30px] ">
              <p className="text-[16px]">$ Not disclosed</p>
            </div>
            <div className="flex items-center mr-[30px] ">
              <Image
                src={Location}
                alt="Location"
                className="h-[24px] w-[24px] mr-[5px]"
              />
              <p className="text-[16px]">Mumbai</p>
            </div>
          </div>
          <div className="flex items-center mt-[19px] ">
            <Image
              src={Address}
              alt="Address"
              className="h-[24px] w-[24px] mr-[5px]"
            />
            <p className="text-[14px]">
              Experiance with C#/.NET (WPF) 3-tiers application development
              (client / server/db) Bachelor/-
            </p>
          </div>
          <div className="flex items-center mt-[25px] justify-between">
            <p className="text-[16px]" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
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
      </div>
    </div>
  );
}
