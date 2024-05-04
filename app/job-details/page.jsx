"use client";

// ! imports
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// ! local imports
import { JobDescriptionData } from "@/lib/data";
import Arrow from "@/public/Arrow Left Up.png";
import ArrowBlue from "@/public/ArrowBlue.png";
import Bag from "@/public/Bag 2.png";
import Book from "@/public/Book Bookmark.png";
import Currency from "@/public/Currency Inr.png";
import Layer1 from "@/public/Layer1.png";
import Layer2 from "@/public/Layer2.png";
import Layer3 from "@/public/Layer3.png";
import Magnifer from "@/public/Magnifer.png";
import MapPoint from "@/public/Map Point.png";
import servion from "@/public/servion.png";
import HeadBarComp from "@/app/components/Headbar";
import { getjobDetails } from "../services";
import { useSelector } from "react-redux";

const JobDetailsPage = () => {
  const { jobId } = useSelector((state) => state.root.user);
  console.log("setJobId", jobId);
  const [seeMore, setSeeMore] = useState(false);
  const [jobDetails, setJobDetails] = useState({});

  const fetchJobDetails = () => {
    getjobDetails(jobId)
      .then((res) => {
        console.log("Company Job API...............", res);
        setJobDetails(res.data.job);
      })
      .catch((err) => {
        console.log("err.....", err?.message);
      });
  };

  useEffect(() => {
    fetchJobDetails(jobId);
  }, [jobId]);

  console.log("jobDetails..............", jobDetails);
  return (
    <>
      <HeadBarComp
        visible={true}
        isLoggedIn={true}
        searchBar={true}
        jobs={true}
      />

      {/* top comp */}
      <div className="flex items-center justify-between w-full h-auto gap-2 px-2 my-4 lg:hidden">
        <div className="rounded-full w-full h-[40px] flex justify-start items-center gap-2 py-2 px-4 border">
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
      </div>
      {/* main container */}
      <div className="w-full min-h-screen h-auto bg-[#f8f8f8] flex md:flex-row flex-col justify-start gap-8 items-start py-8 duration-300 px-2 lg:px-[8%]">
        {/* left container */}

        <div className="flex flex-col items-start justify-start w-full h-full gap-4 mb-8 duration-300 text-start">
          {/* job opening container */}
          <div className="flex flex-col items-center justify-start w-full h-auto gap-4 px-4 py-6 bg-white rounded-2xl">
            {/* top body  */}
            <div className="flex items-start justify-between w-full h-auto gap-6">
              {/* left div */}
              <div className="w-auto h-auto flex flex-col justify-start items-center gap-2 text-[#393A44]">
                {/* title */}
                <h1 className="text-base font-semibold">
                  Job Open for the {jobDetails.jobTitle}
                </h1>

                {/* graduate */}
                <div className="text-[#909198] text-xs font-normal w-full h-auto flex justify-start items-center text-center gap-2">
                  <Image
                    src={Book}
                    alt="Book Bookmark"
                    className="object-contain w-4 h-4"
                  />
                  <span>{`graduate`}</span>
                </div>

                {/* reviews */}
                <div className="w-full h-auto flex justify-start items-center gap-1 text-[#909198] text-xs">
                  <span>{`Servion`}</span>
                  <span>{`⭐`}</span>
                  <span>
                    <span className="text-[#121F3E] ">{`4.9 `}</span>
                    {`(677 Reviews)`}
                  </span>
                </div>

                {/* months price */}
                <div className="w-full h-auto flex justify-start items-center gap-4 text-[#909198] text-xs">
                  <div className="flex items-center justify-center w-auto h-auto space-x-2 text-center flex-nowrap">
                    <Image
                      src={Bag}
                      alt="bag"
                      className="object-contain w-4 h-4"
                    />
                    <span>{`1455/month`}</span>
                  </div>

                  {/* divider */}
                  <div className="w-[1px] h-[15px] bg-[#0000001A]"></div>

                  <div className="flex items-center justify-center w-auto h-auto space-x-1 text-center flex-nowrap">
                    <Image
                      src={Currency}
                      alt="bag"
                      className="object-contain w-4 h-4"
                    />
                    <span>{`125k`}</span>
                  </div>
                </div>

                {/* location */}
                <div className="text-[#909198] text-xs font-normal w-full h-auto flex justify-start items-center text-center gap-2">
                  <Image
                    src={MapPoint}
                    alt="MapPoint"
                    className="object-contain w-4 h-4"
                  />
                  <span>{`Punjab`}</span>
                </div>
              </div>

              {/* right div */}
              <div className="w-auto h-full ">
                <Image
                  src={servion}
                  alt="servion"
                  className="w-[80px] h-[80px] rounded-[16px] object-contain"
                />
              </div>
            </div>

            {/* divider */}
            <div className="w-full h-[1px] bg-[#0000001A]"></div>

            {/* bottom div */}
            <div className="flex flex-col items-center justify-between w-full gap-3 md:flex-row">
              <div className="text-[#909198] text-xs font-normal md:w-full w-auto h-auto flex justify-start items-center gap-2">
                <span className="flex items-center justify-start w-auto h-auto gap-2 flex-nowrap">
                  Posted:
                  <p className="text-[#000000] font-semibold">{`1 Day Ago`}</p>
                </span>

                {/* divider */}
                <div className="w-[1px] h-[15px] bg-[#0000001A]"></div>

                <span className="flex items-center justify-start w-auto h-auto gap-2 flex-nowrap">
                  Openings:
                  <p className="text-[#000000] font-semibold">
                    {jobDetails.jobOpenings}
                  </p>
                </span>

                {/* divider */}
                <div className="w-[1px] h-[15px] bg-[#0000001A]"></div>

                <span className="flex items-center justify-start w-auto h-auto gap-2 flex-nowrap">
                  Applicants
                  <p className="text-[#000000] font-semibold">{`10`}</p>
                </span>
              </div>

              <button className="bg-[#3F6EEC] py-2 px-4 rounded-full min-w-[132px] md:w-auto w-full h-[37px] flex flex-nowrap justify-center items-center text-center gap-1 text-white text-sm font-normal">
                {`Apply Now`}

                <Image
                  src={Arrow}
                  alt="servion"
                  className="object-contain w-6 h-6"
                />
              </button>
            </div>
          </div>

          {/* ---------------------------------------- */}
          {/* job description */}
          <div
            className={`flex flex-col items-center justify-start w-full px-4 py-6 text-[12px] bg-white text-start rounded-2xl text-[#393A44] overflow-y-hidden `}
          >
            {/* heading */}
            <h1 className="w-full h-auto my-4 text-base font-semibold">{`Job Description `}</h1>

            {/* job information */}
            <div
              className={`w-full text-[#434343] text-sm font-normal md:px-4 px-2 gap-2 ${
                seeMore ? "h-auto" : "md:h-auto h-[160px] overflow-y-hidden"
              }`}
            >
              {JobDescriptionData?.description?.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    className="flex flex-row items-center justify-start w-full h-auto gap-2 text-start md:flex-row md:items-center"
                  >
                    <div className="bg-[#434343] rounded-full min-w-1 min-h-1"></div>
                    {item}
                  </span>
                );
              })}
            </div>

            {/* heading */}
            <h1
              className={`w-full h-auto text-base font-normal ${
                seeMore ? "block" : "md:block hidden"
              }`}
            >{`Key Responsibilities:`}</h1>

            {/* job information */}
            <div
              className={`w-full h-auto text-[#434343] text-sm font-normal px-4 gap-2 ${
                seeMore ? "block" : "md:block hidden"
              }`}
            >
              {JobDescriptionData?.responsibilities?.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    className="flex flex-row items-center justify-start w-full h-auto gap-2 text-start md:flex-row md:items-center"
                  >
                    <span>{idx + 1} .</span>
                    {/* <div className="w-1 h-1 bg-[#434343] rounded-full"></div> */}
                    {item}
                  </span>
                );
              })}
            </div>

            {/* heading */}
            <h1
              className={`w-full h-auto text-base font-normal ${
                seeMore ? "block" : "md:block hidden"
              }`}
            >{`Qualifications:`}</h1>

            {/* job information */}
            <div
              className={`w-full h-auto text-[#434343] text-sm font-normal px-4 gap-2 ${
                seeMore ? "block" : "md:block hidden"
              }`}
            >
              {JobDescriptionData?.qualifications?.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    className="flex flex-row items-center justify-start w-full h-auto gap-2 text-start md:flex-row md:items-center"
                  >
                    <div className="min-w-1 min-h-1 bg-[#434343] rounded-full"></div>
                    {item}
                  </span>
                );
              })}
            </div>

            {/* heading */}
            <h1
              className={`w-full h-auto text-base font-normal ${
                seeMore ? "block" : "md:block hidden"
              }`}
            >{`Skills and Abilities:`}</h1>

            {/* job information */}
            <div
              className={`w-full h-auto text-[#434343] text-sm font-normal px-4 gap-2 ${
                seeMore ? "block" : "md:block hidden"
              }`}
            >
              {JobDescriptionData?.skills?.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    className="flex flex-row items-center justify-start w-full h-auto gap-2 text-start md:flex-row md:items-center"
                  >
                    <div className="min-w-1 min-h-1 bg-[#434343] rounded-full"></div>
                    {item}
                  </span>
                );
              })}
            </div>

            {/* heading */}
            <h1
              className={`w-full h-auto text-base font-normal ${
                seeMore ? "block" : "md:block hidden"
              }`}
            >{`Competencies:`}</h1>

            {/* job information */}
            <div
              className={`w-full h-auto text-[#434343] text-sm font-normal px-4 gap-2 ${
                seeMore ? "block" : "md:block hidden"
              }`}
            >
              {JobDescriptionData?.competencies?.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    className="flex flex-row items-center justify-start w-full h-auto gap-2 text-start md:flex-row md:items-center"
                  >
                    <div className="min-w-1 min-h-1 bg-[#434343] rounded-full"></div>
                    {item}
                  </span>
                );
              })}
            </div>

            {/* heading */}
            <h1
              className={`w-full h-auto text-base font-normal ${
                seeMore ? "block" : "md:block hidden"
              }`}
            >{`Additional Information:`}</h1>

            {/* job information */}
            <div
              className={`w-full h-auto text-[#434343] text-sm font-normal px-4 gap-2 ${
                seeMore ? "block" : "md:block hidden"
              }`}
            >
              {JobDescriptionData?.additional?.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    className="flex flex-row items-center justify-start w-full h-auto gap-2 text-start md:flex-row md:items-center"
                  >
                    <div className="min-w-1 min-h-1 bg-[#434343] rounded-full"></div>
                    {item}
                  </span>
                );
              })}
            </div>

            {/* how to apply */}
            <h1
              className={`flex flex-wrap items-center justify-start w-full h-auto text-base font-normal text-start ${
                seeMore ? "block" : "md:block hidden"
              }`}
            >
              {`How to Apply:`}

              {JobDescriptionData?.apply}
            </h1>

            {/* deadline*/}
            <h1
              className={`flex flex-wrap items-center justify-start w-full h-auto text-base font-normal text-start ${
                seeMore ? "block" : "md:block hidden"
              }`}
            >
              {`Deadline for Application:`}

              {JobDescriptionData?.deadline}
            </h1>

            {/* ---------------------------------------- */}
            <div
              className={`w-full h-[1px] bg-[#0000001A] mt-4 mb-2 ${
                seeMore ? "block" : "md:block hidden"
              }`}
            ></div>

            {/* button */}
            {/* {!seeMore && ( */}
            <button
              className="my-2 text-[#3F6EEC] text-xs font-normal md:hidden block"
              onClick={() => setSeeMore(!seeMore)}
            >
              {seeMore ? "See Less ..." : "See More ..."}
            </button>
            {/* )} */}
          </div>
        </div>

        {/* right container */}
        <div className="md:min-w-[407px] md:w-auto w-full h-full bg-transparent rounded-2xl md:space-y-8 space-y-4  duration-300">
          {/* top div */}
          <div className="flex flex-col items-start justify-between w-full h-auto gap-4 px-4 py-6 bg-white rounded-2xl text-start">
            {/* item */}
            <div className="flex flex-col items-start justify-between w-full h-auto gap-4">
              <Image
                src={servion}
                alt="servion"
                className="object-contain w-11 h-11 rounded-[9px]"
              />

              <div className="w-full h-auto space-y-2">
                {/* title */}
                <h1 className="text-base font-semibold">
                  {`Job Opening For Java Developer`}
                </h1>

                {/* graduate */}
                <div className="text-[#909198] text-xs font-normal w-full h-auto flex justify-start items-center text-center gap-2">
                  <Image
                    src={Book}
                    alt="Book Bookmark"
                    className="object-contain w-4 h-4"
                  />
                  <span>{`graduate`}</span>
                </div>

                {/* reviews */}
                <div className="w-full h-auto flex justify-start items-center gap-1 text-[#909198] text-xs">
                  <span>{`Servion`}</span>
                  <span>{`⭐`}</span>
                  <span>
                    <span className="text-[#121F3E] ">{`4.9 `}</span>
                    {`(677 Reviews)`}
                  </span>
                </div>

                {/* months price */}
                <div className="w-full h-auto flex justify-start items-center gap-4 text-[#909198] text-xs">
                  <div className="flex items-center justify-center w-auto h-auto space-x-2 text-center flex-nowrap">
                    <Image
                      src={Bag}
                      alt="bag"
                      className="object-contain w-4 h-4"
                    />
                    <span>{`1455/month`}</span>
                  </div>

                  {/* divider */}
                  <div className="w-[1px] h-[15px] bg-[#0000001A]"></div>

                  <div className="flex items-center justify-center w-auto h-auto space-x-1 text-center flex-nowrap">
                    <Image
                      src={Currency}
                      alt="bag"
                      className="object-contain w-4 h-4"
                    />
                    <span>{`125k`}</span>
                  </div>
                </div>

                {/* location  */}

                <div className="flex items-center justify-between w-full h-auto gap-2 flex-nowrap">
                  <div className="text-[#909198] text-xs font-normal w-auto h-auto flex justify-start items-center text-center gap-2">
                    <Image
                      src={MapPoint}
                      alt="MapPoint"
                      className="object-contain w-4 h-4"
                    />
                    <span>{`Punjab`}</span>
                  </div>

                  <span className="text-[12px] font-normal flex items-center justify-start w-auto h-auto gap-2 flex-nowrap">
                    Posted:
                    <p className="text-[#000000] font-semibold">{`1 Day Ago`}</p>
                  </span>
                </div>
              </div>
            </div>

            {/* divider */}
            <div className="w-full h-[1px] bg-[#0000001A]"></div>

            {/* item */}
            <div className="flex flex-col items-start justify-between w-full h-auto gap-4">
              <Image
                src={servion}
                alt="servion"
                className="object-contain w-11 h-11 rounded-[9px]"
              />

              <div className="w-full h-auto space-y-2">
                {/* title */}
                <h1 className="text-base font-semibold">
                  {`Job Opening For Java Developer`}
                </h1>

                {/* graduate */}
                <div className="text-[#909198] text-xs font-normal w-full h-auto flex justify-start items-center text-center gap-2">
                  <Image
                    src={Book}
                    alt="Book Bookmark"
                    className="object-contain w-4 h-4"
                  />
                  <span>{`graduate`}</span>
                </div>

                {/* reviews */}
                <div className="w-full h-auto flex justify-start items-center gap-1 text-[#909198] text-xs">
                  <span>{`Servion`}</span>
                  <span>{`⭐`}</span>
                  <span>
                    <span className="text-[#121F3E] ">{`4.9 `}</span>
                    {`(677 Reviews)`}
                  </span>
                </div>

                {/* months price */}
                <div className="w-full h-auto flex justify-start items-center gap-4 text-[#909198] text-xs">
                  <div className="flex items-center justify-center w-auto h-auto space-x-2 text-center flex-nowrap">
                    <Image
                      src={Bag}
                      alt="bag"
                      className="object-contain w-4 h-4"
                    />
                    <span>{`1455/month`}</span>
                  </div>

                  {/* divider */}
                  <div className="w-[1px] h-[15px] bg-[#0000001A]"></div>

                  <div className="flex items-center justify-center w-auto h-auto space-x-1 text-center flex-nowrap">
                    <Image
                      src={Currency}
                      alt="bag"
                      className="object-contain w-4 h-4"
                    />
                    <span>{`125k`}</span>
                  </div>
                </div>

                {/* location  */}

                <div className="flex items-center justify-between w-full h-auto gap-2 flex-nowrap">
                  <div className="text-[#909198] text-xs font-normal w-auto h-auto flex justify-start items-center text-center gap-2">
                    <Image
                      src={MapPoint}
                      alt="MapPoint"
                      className="object-contain w-4 h-4"
                    />
                    <span>{`Punjab`}</span>
                  </div>

                  <span className="text-[12px] font-normal flex items-center justify-start w-auto h-auto gap-2 flex-nowrap">
                    Posted:
                    <p className="text-[#000000] font-semibold">{`1 Day Ago`}</p>
                  </span>
                </div>
              </div>
            </div>

            {/* divider */}
            <div className="w-full h-[1px] bg-[#0000001A]"></div>

            {/* view all button */}
            <div className="flex items-center justify-center w-full h-auto">
              <Link href={"/companies"}>
                <button className="w-auto h-[37px] py-2 px-4 gap-1 flex justify-center text-center items-center border border-[#0000001A] text-[#3F6EEC] text-[14px] font-normal rounded-full">
                  <span>{`View All`}</span>
                  <Image
                    src={ArrowBlue}
                    alt="ArrowBlue"
                    className="object-contain w-[14px] h-[14px]"
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* --------------------------------------------- */}
          {/* review div */}

          <div className="flex flex-col items-center justify-start w-full h-auto gap-4 px-4 py-6 bg-white rounded-2xl">
            <div className="w-full h-auto space-y-2">
              <div className="flex items-center justify-between w-full h-auto">
                {/* title */}
                <h1 className="text-base font-semibold">{`Reviews`}</h1>

                <button className="text-[#3F6EEC] text-xs font-normal">
                  view all reviews
                </button>
              </div>

              {/* body content */}
              <div className="w-full h-auto ">
                {/* title */}
                <h1 className="text-sm font-semibold">{`Full Stack Developer in Chennais`}</h1>
              </div>

              <div className="w-full h-auto flex justify-start items-center gap-2 text-center text-[#909198] text-xs font-normal">
                <span>{`Anonymous`}</span>
                {/* divider */}
                <div className="w-[1px] h-[15px] bg-[#0000001A]"></div>
                <span className="text-[#434343] ">{`28 sep 2018`}</span>
              </div>

              <div className="w-full h-auto text-[#909198] text-xs font-normal">
                {`Content For Social Media, Blog Posts, And Other Digital Channels.`}
              </div>
            </div>

            {/* divider */}
            <div className="w-full h-[1px] bg-[#0000001A]"></div>

            {/* view all button */}
            <div className="flex items-center justify-center w-full h-auto">
              <Link href={"/companies"}>
                <button className="w-auto h-[37px] py-2 px-4 gap-1 flex justify-center text-center items-center border border-[#0000001A] text-[#3F6EEC] text-[14px] font-normal rounded-full">
                  <span>{`View All`}</span>
                  <Image
                    src={ArrowBlue}
                    alt="ArrowBlue"
                    className="object-contain w-[14px] h-[14px]"
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* --------------------------------------------- */}

          {/* salary insight */}
          <div className="flex flex-col items-center justify-start w-full h-auto gap-4 px-4 py-6 bg-white rounded-2xl">
            <div className="w-full h-auto space-y-2">
              <div className="flex items-center justify-between w-full h-auto">
                {/* title */}
                <h1 className="text-base font-semibold">{`Salary Insights`}</h1>

                <button className="text-[#3F6EEC] text-xs font-normal">
                  Compare Salary
                </button>
              </div>
              <div className="w-full h-auto text-[#909198] text-xs font-normal">
                {`Compare Salaries Of Java Developer With Similar Companies.`}
              </div>

              {/* average salary  */}
              <div className="flex flex-col items-center justify-center w-full h-auto pt-4 text-center text-[10px] font-normal gap-2">
                <span className="w-full h-auto text-[#000000] ">
                  {`Average Salary-4.4 Lac`}
                </span>

                <div className="w-full h-[4px] bg-[#F8F8F8] flex justify-start items-center">
                  <span className="h-full w-1/2 bg-[#3F6EEC] rounded-2xl"></span>
                </div>

                <div className="text-[#949494] text-[10px] font-normal w-full h-auto flex justify-between items-center gap-2">
                  <span>{`Min 3.2 LPA`}</span>
                  <span>{`Max 7.5 LPA`}</span>
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------- */}

          {/* salary insight */}
          <div className="flex flex-col items-center justify-start w-full h-auto gap-4 px-4 py-6 bg-white rounded-2xl">
            <div className="w-full h-auto space-y-2">
              <div className="flex items-center justify-between w-full h-auto">
                {/* title */}
                <h1 className="text-base font-semibold">{`Benefits & Perk`}</h1>

                <button className="text-[#3F6EEC] text-xs font-normal">
                  view all
                </button>
              </div>
              <div className="w-full h-auto text-[#909198] text-xs font-normal">
                {`Compare Salaries Of Java Developer With Similar Companies.`}
              </div>

              {/* bottom container  */}
              <div className="flex items-center justify-between w-full h-auto gap-1 py-2 ">
                {/* card */}
                <div className="w-[121px] h-[69px] rounded-lg bg-[#F7F8F8] py-2 px-[7px] flex flex-col justify-center items-center">
                  <Image
                    src={Layer1}
                    alt="layer"
                    className="object-contain w-8 h-8 "
                  />
                  <span className="text-[#949494] text-[10px] font-normal">
                    {`Health Insurance`}
                  </span>
                </div>
                {/* card */}
                <div className="w-[121px] h-[69px] rounded-lg bg-[#F7F8F8] py-2 px-[7px] flex flex-col justify-center items-center">
                  <Image
                    src={Layer2}
                    alt="layer"
                    className="object-contain w-8 h-8 "
                  />
                  <span className="text-[#949494] text-[10px] font-normal">
                    {`Soft Skills`}
                  </span>
                </div>
                {/* card */}
                <div className="w-[121px] h-[69px] rounded-lg bg-[#F7F8F8] py-2 px-[7px] flex flex-col justify-center items-center">
                  <Image
                    src={Layer3}
                    alt="layer"
                    className="object-contain w-8 h-8 "
                  />
                  <span className="text-[#949494] text-[10px] font-normal">
                    {`Team Outgoings`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsPage;
