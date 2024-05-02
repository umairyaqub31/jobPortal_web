//! imports
import React from "react";

// ! local imports
import SearchBarComp from "./SearchBar";
const HeroComp = () => {
  return (
    <div className="flex flex-col flex-nowrap items-center justify-start lg:pt-[5%] pt-[15%] w-full h-auto min-h-[70vh] bgImage space-y-8">
      {/* inner container  */}
      <div className="w-auto h-auto flex flex-col flex-nowrap justify-center items-center text-center text-[#393A44] space-y-2">
        <h1 className="md:text-base text-[16px] font-semibold">{`INDIA’S #1 JOB PLATFORM`}</h1>
        <div className="">
          <h1 className="md:text-[44px] text-[24px] font-bold">{`Apna Job Portal :`}</h1>
          <h1 className="md:text-[44px] text-[24px] font-bold text-[#3f6eec]">{`Your job search ends here`}</h1>
        </div>
        <h1 className="text-xl font-semibold md:text-[16px]">{`5 Lac+ Jobs For You To Explore`}</h1>
      </div>

      {/* search bar  */}
      <SearchBarComp />
    </div>
  );
};

export default HeroComp;
