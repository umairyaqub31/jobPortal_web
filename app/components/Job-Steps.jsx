"use client";

// ! imports
import React, { useState } from "react";
import { Divider, Steps } from "antd";
import Image from "next/image";

// !local imports
import desc from "@/public/desc.png";
import arrow from "@/public/arrow.png";

const stepsData = [
  {
    title: `Build Apna Profile In Just 3 Steps`,
    description: `Lorem ipsum dolor sit amet consectetur. Pretium consectetur mi lectus eget mi `,
  },
  {
    title: `Build Apna Profile In Just 3 Steps`,
    description: `Lorem ipsum dolor sit amet consectetur. Pretium consectetur mi lectus eget mi `,
  },
  {
    title: `Build Apna Profile In Just 3 Steps`,
    description: `Lorem ipsum dolor sit amet consectetur. Pretium consectetur mi lectus eget mi `,
  },
];

const JobStepsComp = () => {
  const [current, setCurrent] = useState(1);
  const onChange = (value) => {
    // console.log("onChange:", value);
    setCurrent(value);
  };
  const description = `Lorem ipsum dolor sit amet consectetur. Pretium consectetur mi lectus eget mi`;

  return (
    <>
      {/* main container */}
      <div className="flex flex-col items-center justify-center w-full h-auto gap-8 text-center bg-white lg:px-[100px] px-8 lg:py-[100px] py-[64px] duration-300">
        {/* quote  */}
        <h1 className="w-full h-auto md:text-[36px] text-[20px] font-bold">{`Get Job In Just 3 Steps...`}</h1>

        {/* main container with images */}
        <div className="flex flex-wrap w-full h-auto">
          {/* left div */}
          <div className="relative hidden w-full h-auto md:w-1/2 lg:block">
            {/* circle 1 */}
            <div className="absolute z-[99] top-0 left-[10%] w-[18px] h-[18px] rounded-full bg-[#F3A268] lg:block hidden"></div>

            {/* circle 2 */}
            <div className="absolute z-[99] top-[4%] -left-[2%] w-[79px] h-[79px] rounded-full bg-[#687EF3] lg:block hidden"></div>

            {/* circle 3 */}
            <div className="absolute z-[99] top-[7%] left-[41%] w-[167px] h-[167px] rounded-full bg-[#687EF31A] lg:block hidden"></div>

            {/* circle 4 */}
            <div className="absolute z-[99] top-[104%] left-[2px] w-[15px] h-[15px] rounded-full bg-[#34E7A5] lg:block hidden"></div>

            {/* circle 5 */}
            <div className="absolute z-[99999999999999] top-[92%] left-[29%] w-[47px] h-[47px] rounded-full bg-[#687EF31A] lg:block hidden"></div>

            {/* circle  6*/}
            <div className="absolute z-[99999999999999] top-[97%] left-[57%] w-[30px] h-[30px] rounded-full bg-[#687EF31A] lg:block hidden"></div>

            {/* card div */}
            <div className=" h-[451px] flex justify-start items-start overflow-y-hidden rounded-[32px] drop-shadow-lg mt-[5%] md:ml-[3%] ml-0 relative z-[99999]">
              <Image
                src={desc}
                alt={"desc"}
                className="w-[373px] object-contain rounded-[32px]"
              />
            </div>

            {/* pop up div */}
            <div className="absolute z-[99999999] w-[292px] h-[96px] rounded-2xl top-[421px] left-[183px] bg-white drop-shadow-sm lg:flex hidden justify-start pl-4 items-center border">
              <Image src={arrow} alt={arrow} />
              <h1 className="text-[#3F6EEC] text-base font-semibold w-[152px] h-auto">{`apply and get haired in ease`}</h1>
            </div>
          </div>

          {/* right div */}
          <div className="flex flex-col items-center justify-center w-full h-auto gap-2 lg:w-1/2 ">
            <Steps
              current={current}
              onChange={onChange}
              direction="vertical"
              className="flex items-center justify-center w-full h-[374px] text-start"
            >
              {stepsData?.map((item, index) => (
                <Steps.Step
                  key={index}
                  title={
                    <h1 className="w-full  h-auto lg:text-[28px] text-[20px] font-bold text-[#3F6EEC]">{`Build Apna Profile In Just 3 Steps`}</h1>
                  }
                  description={
                    <p className="text-sm font-medium lg:text-base lg:w-[519px] w-[331px]">
                      {`Lorem ipsum dolor sit amet consectetur. Pretium consectetur mi lectus eget mi `}
                    </p>
                  }
                  className={`flex flex-col items-center justify-start w-full h-auto text-start ${
                    current === index ? "opacity-100" : "opacity-60"
                  }`}
                />
              ))}
              {/* <Steps.Step
                title={
                  <h1 className="w-full h-auto lg:text-[28px] text-[20px] font-bold text-[#3F6EEC]">{`Build Apna Profile In Just 3 Steps`}</h1>
                }
                description={
                  <p className="text-sm font-medium lg:text-base lg:w-[519px] w-[331px]">
                    {`Lorem ipsum dolor sit amet consectetur. Pretium consectetur mi lectus eget mi `}
                  </p>
                }
                className="flex flex-col items-center justify-start w-full h-auto text-start"
              />
              <Steps.Step
                title={
                  <h1 className="w-full h-auto lg:text-[28px] text-[20px] font-bold text-[#3F6EEC]">{`Build Apna Profile In Just 3 Steps`}</h1>
                }
                description={
                  <p className="text-sm font-medium lg:text-base lg:w-[519px] w-[331px]">
                    {`Lorem ipsum dolor sit amet consectetur. Pretium consectetur mi lectus eget mi `}
                  </p>
                }
                className="flex flex-col items-center justify-start w-full h-auto text-start"
              /> */}
            </Steps>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobStepsComp;
