"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Bag from "@/public/Bag.png";
import MapPoint from "@/public/Map Point.png";
import VerifiedCheck from "@/public/Verified Check.png";
import ArrowForward from "@/public/Arrow Left Up.png";
import Magnifer from "@/public/Magnifer.png";
import filter from "@/public/filter.png";
import FilterComp from "@/app/components/Filter";
import HeadBarComp from "@/app/components/Headbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllJobs,
  getCAN_SEARCHJOBSBYROLES,
  getCompanyJobs,
} from "../services";
import { setAllJobs, setCompanyid, setJobRole } from "../redux";
import { useRouter, useParams } from "next/navigation";

const JobsPage = (props) => {
  const dispatch = useDispatch();
  const { allJobs, companyid, jobrole } = useSelector(
    (state) => state.root.user
  );
  console.log("...............id", companyid);
  console.log("jobrole...................", jobrole);

  const [filerOpen, setFilterOpen] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [companyjobs, setCompanyJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleDataReceived = (data) => {
    setJobData(data);
  };
  // console.log("Job data in MAin Page is ", jobData);

  const fetchJobs = () => {
    getAllJobs()
      .then((res) => {
        console.log("ress....ALL JOBS........", res?.data);
        setCompanyJobs(res.data?.jobs);
        dispatch(setAllJobs(res?.data?.jobs));
      })
      .catch((err) => {
        console.log("err.....", err?.message);
      });
  };
  const fetchCompanyJobs = () => {
    setLoading(true);
    const pageno = 1;
    getCompanyJobs(pageno, companyid)
      .then((res) => {
        console.log("ress.... Company Job........", res?.data);
        setCompanyJobs(res.data?.jobs);
        dispatch(setCompanyid(""));
      })
      .catch((err) => {
        console.log("err.....", err?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const fetchJobsByRoles = () => {
    getCAN_SEARCHJOBSBYROLES(jobrole)
      .then((res) => {
        console.log("getCAN_SEARCHJOBSBYROLES.........", res?.data);

        setCompanyJobs(res.data?.results);
        dispatch(setJobRole(""));
      })
      .catch((err) => {
        console.log("err.....", err?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    if (companyid) {
      fetchCompanyJobs();
    }
  }, [companyid]);

  useEffect(() => {
    if (jobrole) {
      fetchJobsByRoles();
    }
  }, [jobrole]);

  return (
    <>
      <HeadBarComp
        visible={true}
        isLoggedIn={true}
        searchBar={true}
        jobs={true}
        onDataReceived={handleDataReceived}
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
      <div className="w-full min-h-screen h-auto bg-[#f8f8f8] flex lg:flex-row flex-col justify-start gap-8 items-start py-8 duration-300 px-4 lg:px-[8%]">
        {/* left div */}
        <div className="min-w-[350px] w-auto h-full bg-white p-4 rounded-2xl space-y-4 lg:block hidden duration-300">
          {/* Filters div */}
          <div className="text-[#404145] w-full h-auto flex flex-col justify-center items-start gap-4">
            <h1 className="text-sm font-semibold">{`Filters`}</h1>
            <div className="flex flex-wrap items-center justify-start w-full h-auto gap-2">
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
            </div>
          </div>

          {/* city div */}
          <div className="text-[#404145] w-full h-auto flex flex-col justify-center items-start gap-4">
            <h1 className="text-sm font-semibold">{`City`}</h1>
            <div className="flex flex-wrap items-center justify-start w-full h-auto gap-2">
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
            </div>
          </div>

          {/* job role div */}
          <div className="text-[#404145] w-full h-auto flex flex-col justify-center items-start gap-4">
            <h1 className="text-sm font-semibold">{`Job Role`}</h1>
            <div className="flex flex-wrap items-center justify-start w-full h-auto gap-2">
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
            </div>
          </div>

          {/* job role div */}
          <div className="text-[#404145] w-full h-auto flex flex-col justify-center items-start gap-4">
            <h1 className="text-sm font-semibold">{`Job Role`}</h1>
            <div className="flex flex-wrap items-center justify-start w-full h-auto gap-2">
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
            </div>
          </div>

          {/* salary div */}
          <div className="text-[#404145] w-full h-auto flex flex-col justify-center items-start gap-4">
            <h1 className="text-sm font-semibold">{`Salary`}</h1>
            <div className="flex flex-wrap items-center justify-start w-full h-auto gap-2">
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
              {/* item */}
              <button className="text-xs font-normal text-[#949494] w-auto h-[34px] flex justify-center items-center text-center py-2 px-4 border rounded-full flex-nowrap">
                {`New Jobs+`}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-full h-full gap-4 duration-300 text-start">
          <h1 className="text-[#949494] text-base font-semibold">
            {`Result For `}
          </h1>
          <h1 className="text-[#434343] text-2xl font-semibold">
            {`Stocking Associate`}
          </h1>

          {/* card div */}
          <div className="flex flex-col items-center justify-center w-full h-auto gap-4">
            {/* card 1 */}
            {companyjobs?.map((item, idx) => (
              <div
                key={idx}
                className="w-full flex flex-col justify-start items-start h-auto bg-[#FFFFFF] p-4 gap-2 rounded-2xl drop-shadow-sm"
              >
                <div className="text-[#4FAD2E] flex justify-center items-center text-center text-[10px] font-semibold w-auto h-6 px-4 py-1 rounded-full bg-[#4FAD2E1A]">
                  {`TOP MATCHED`}
                </div>

                <div className="flex items-center justify-between w-full h-auto ">
                  <h1 className="text-[#393A44] text-[16px] font-semibold">
                    {item?.jobTitle}
                  </h1>
                  <Link href={"/job-details"}>
                    <button className="bg-[#3F6EEC] flex justify-center items-center text-center rounded-full font-normal text-[10px] w-auto h-[28px] text-white gap-2 py-1 px-2">
                      <span>{`View Detail`}</span>
                      <Image
                        src={ArrowForward}
                        alt="arrow"
                        className="object-contain w-4 h-4"
                      />
                    </button>
                  </Link>
                </div>

                <h1 className="text-[#393A44] text-[14px] font-semibold">
                  {`12,000$ - 16,000`}
                </h1>

                <div className="w-full h-[2px] bg-[#0000000D]"></div>

                <div className="flex items-center justify-start w-full h-auto gap-2 flex-nowrap">
                  <Image src={Bag} alt="bag" className="w-5 h-5 " />
                  <p className="text-[#909198] font-normal text-xs">
                    {`total solution fintech `}
                  </p>
                </div>

                <div className="flex items-center justify-start w-full h-auto gap-2 flex-nowrap">
                  <Image src={MapPoint} alt="bag" className="w-5 h-5 " />
                  <p className="text-[#909198] font-normal text-xs">
                    {`ul. Chodkiewicza Karola 111, Chorzów 41-506`}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-start w-full h-auto gap-2">
                  <span className="border text-[10px] font-normal text-[#909198] rounded-full border-[#0000001A] h-6 w-auto p-2 flex justify-center items-center text-center">
                    {`Ss Vacanies`}
                  </span>

                  <span className="border text-[10px] font-normal text-[#909198] rounded-full border-[#0000001A] h-6 w-auto p-2 flex justify-center items-center text-center">
                    {`Ss Vacanies`}
                  </span>
                </div>

                <div className="w-full h-[2px] bg-[#0000000D]"></div>

                <div className="flex items-center justify-between w-full h-auto">
                  <span className="text-[#393A44] text-[10px] font-normal">
                    {`other industry`}
                  </span>

                  <div className="bg-[#4FAD2E1A] text-[#4FAD2E] text-[10px] font-semibold w-auto h-6 rounded-full flex justify-center items-center gap-2 py-2 px-4">
                    <Image
                      src={VerifiedCheck}
                      alt="VerifiedCheck"
                      className="object-contain w-4 h-4"
                    />

                    <span>{`Verified`}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsPage;
