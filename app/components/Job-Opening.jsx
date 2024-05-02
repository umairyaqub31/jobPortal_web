//! imports
import React from "react";
import Link from "next/link";

//! local imports
import SliderCardComp from "./Slider-Card";
import { SliderCardData } from "@/lib/data";

const JobOpeningComp = () => {
  return (
    <>
      {/* main component  */}

      <div className="w-full min-h-[80vh] h-auto bgImage flex justify-center items-center flex-col text-center gap-8">
        {/* quote  */}
        <h1 className="w-full h-auto md:text-[36px] text-[20px] font-bold">{`Job Openings in Top Companies`}</h1>

        {/* slider  */}
        <SliderCardComp data={SliderCardData} />

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
