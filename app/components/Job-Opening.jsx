//! imports
"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

//! local imports
import SliderCardComp from "./Slider-Card";
import { SliderCardData } from "@/lib/data";
import { topCompanies } from "../services";

const JobOpeningComp = () => {
  const [topCompany, setTopCompany] = useState([]);
  const [pageno, setpageno] = useState(1);
  const fetchTopCompany = (pageno) => {
    console.log("Page no is ", pageno);
    topCompanies(pageno)
      .then((res) => {
        console.log("ress....", res);
        setTopCompany(res?.data?.companies);
      })
      .catch((err) => {
        console.log("err.....", err?.response?.data?.message);
      });
  };
  useEffect(() => {
    fetchTopCompany(pageno);
  }, [pageno]);

  console.log("Jobs are .............", topCompany);
  return (
    <>
      {/* main component  */}

      <div className="w-full min-h-[80vh] h-auto bgImage flex justify-center items-center flex-col text-center gap-8">
        {/* quote  */}
        <h1 className="w-full h-auto md:text-[36px] text-[20px] font-bold">{`Job Openings in Top Companies`}</h1>

        {/* slider  */}
        <SliderCardComp data={topCompany} />

        {/* button */}
        <Link href={"/companies"} passHref>
          <button className="border border-[#3F6EEC] text-[#3F6EEC] py-[17px] px-[24px] w-auto h-auto flex justify-center items-center text-center rounded-full text-sm font-semibold">
            {`View All Companies`}
          </button>
        </Link>
      </div>
    </>
  );
};

export default JobOpeningComp;
