"use client";

// * imports
import React, { useState } from "react";
import Image from "next/image";

// * local imports
import Avatar from "@/public/avatar1.png";
import Bag from "@/public/Bag.png";
import MapPoint from "@/public/Map Point.png";
import Share from "@/public/Share.png";
import ArrowCard from "@/public/ArrowCard.png";
import ProfileCardComp from "@/app/components/Profile-Card";
import HeadBarComp from "@/app/components/Headbar";
import { useSelector } from "react-redux";

const ProfileInfoPage = () => {
  const { isLoggedIn, user } = useSelector((state) => state.root.user);
  console.log("USER INFO", user);
  const [homeTown, setHomeTown] = useState("Add Hometown");
  return (
    <>
      <HeadBarComp visible={true} isLoggedIn={true} help={true} />
      {/* main container */}
      <div className="w-full min-h-screen h-auto bg-[#f8f8f8] flex flex-wrap justify-center items-start">
        {/* <ProfileCardComp /> */}
        {/* left container */}
        <div className="flex flex-col w-auto h-full gap-8 p-8">
          <div className="md:w-[424px] min-h-[166px] w-auto h-auto text-[#393A44] bg-white rounded-lg p-8 flex justify-start items-start gap-4">
            <Image
              src={Avatar}
              alt="avatar"
              width={500}
              height={500}
              className="object-contain w-[79px] h-[79px] rounded-full"
            />

            <div className="flex flex-col items-start justify-start w-auto gap-2">
              <h1 className="text-base font-semibold">{user?.fullName}</h1>
              <div className="w-auto flex justify-start items-center text-[#909198] font-normal gap-1 text-xs">
                <Image
                  src={Bag}
                  alt="icons"
                  width={500}
                  height={500}
                  className="object-contain w-[18px] h-[18px]"
                />

                <span>{`total solution fintech `}</span>
              </div>
              <div className="w-auto flex justify-start items-center text-[#909198] font-normal gap-1 text-xs">
                <Image
                  src={MapPoint}
                  alt="icons"
                  width={500}
                  height={500}
                  className="object-contain w-[18px] h-[18px]"
                />

                <span>{`tul. Chodkiewicza Karola 111, `}</span>
              </div>
              <div className="w-auto text-[#4FAD2E] flex justify-start items-center font-normal gap-1 text-xs">
                <Image
                  src={Share}
                  alt="icons"
                  width={500}
                  height={500}
                  className="object-contain w-[18px] h-[18px]"
                />

                <span>{`share profile`}</span>
              </div>
            </div>
          </div>

          <div className="md:w-[422px] w-auto min-h-[270xp] h-auto bg-white rounded-lg p-8 flex md:flex-row flex-col justify-center items-center text-[#909198] text-sm font-semibold">
            {/* left div */}
            <div className="flex flex-col items-start justify-start w-1/2 h-full gap-4">
              <span>{`Email ID`}</span>

              <span className="text-black">{user?.email}</span>

              <span>{`Date Of Birth`}</span>

              <span className="text-black">{user?.DOB}</span>

              <span>{`Current Location`}</span>

              <span className="text-black">{user?.locality}</span>
            </div>

            {/* right div */}
            <div className="flex flex-col items-start justify-start w-1/2 h-full gap-4">
              <span>{`Mobile Number`}</span>

              <span className="text-black">{user?.phone}</span>

              <span>{`Gender`}</span>

              <span className="text-black">{user?.gender}</span>

              <span>{`Hometown`}</span>

              <input
                type="text"
                className="bg-transparent outline-none text-[#4FAD2E] placeholder:text-[#4FAD2E] text-[14px] font-semibold"
                placeholder="Add Hometown"
                onChange={(e) => setHomeTown(e.target.value)}
                value={homeTown}
              />
            </div>
          </div>
        </div>

        {/* right container */}
        <div className="flex flex-col w-auto gap-4 p-8 f-full">
          <h1 className="w-auto h-auto text-black text-[20px] font-bold ">
            {`Work Experience`}
          </h1>

          {/* experience div */}
          <div className="md:w-[494px] w-auto min-h-[69px] bg-white h-auto py-6 px-4 text-[#909198] flex justify-between items-center text-center">
            <span>{`Total Experience`}</span>
            <div className="flex items-center justify-center w-auto h-auto gap-2 ">
              <span className="text-[#393A44] font-semibold text-sm">
                {user?.experience}
              </span>
              <Image
                src={ArrowCard}
                alt="avatar"
                width={500}
                height={500}
                className="object-contain w-5 h-5"
              />
            </div>
          </div>

          {/* Current Monthly Salary div */}
          <div className="md:w-[494px] w-auto min-h-[69px] bg-white h-auto py-6 px-4 text-[#909198] flex justify-between items-center text-center">
            <span>{`Current Monthly Salary`}</span>
            <button className="flex items-center text-center justify-center w-auto h-auto gap-2 text-[#3F6EEC]">
              <span className="text-sm font-normal ">{"Add "}</span>
              <span className="text-sm font-semibold ">{"+"}</span>
            </button>
          </div>

          {/* notice period div */}
          <div className="md:w-[494px] w-auto min-h-[69px] bg-white h-auto py-6 px-4 text-[#909198] flex justify-between items-center text-center">
            <span>{`Notice Period`}</span>
            <div className="flex items-center justify-center w-auto h-auto gap-2 ">
              <span className="text-[#393A44] font-semibold text-sm">
                {"10 years"}
              </span>
              <Image
                src={ArrowCard}
                alt="avatar"
                width={500}
                height={500}
                className="object-contain w-5 h-5"
              />
            </div>
          </div>

          {/* job history div */}
          <div className="md:w-[494px] w-auto min-h-[69px] bg-white h-auto py-6 px-4 text-[#909198] flex flex-col justify-start items-center gap-4">
            <div className="flex items-center justify-between w-full h-auto text-center">
              <span>{`Job History`}</span>
              <button className="flex items-center text-center justify-center w-auto h-auto gap-2 text-[#3F6EEC]">
                <span className="text-sm font-normal ">{"Add "}</span>
                <span className="text-sm font-semibold ">{"+"}</span>
              </button>
            </div>

            <div className="text-sm font-normal text-[#949494] w-full h-auto min-h-[66px] border py-2 px-[18px] rounded-xl flex flex-col justify-between items-start gap-1 ">
              <span className="text-[#434343] font-semibold">
                {`Department`}
              </span>

              <span>{`Admin / Back Office / Computer Operator`}</span>
            </div>

            <div className="text-sm font-normal text-[#949494] w-full h-auto min-h-[66px] border py-2 px-[18px] rounded-xl flex flex-col justify-between items-start gap-1 ">
              <span className="text-[#434343] font-semibold">{`Industry`}</span>

              <span>{`Agriculture / Forestry`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfoPage;
