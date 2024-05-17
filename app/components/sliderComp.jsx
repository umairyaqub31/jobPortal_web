"use client";

import React from "react";

import BedTime from "@/public/Bedtime.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const SliderComp = () => {
  return (
    <div className="w-full h-[90vh] p-4 bg-green-500">
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div
            // key={idx}
            className="cursor-pointer min-w-[305px] w-auto h-[113px] rounded-2xl border gap-4 flex justify-center items-center"
          >
            <div className="w-16 h-16 bg-[#FF993B] rounded-3xl flex justify-center items-center">
              <Image
                src={BedTime}
                alt="bedtime"
                className="object-contain w-9 h-9"
              />
            </div>

            <div className="w-auto h-full flex flex-col justify-center items-start text-[#2D432C] gap-4 ">
              <h1 className="text-2xl font-semibold">Title</h1>
              <p className="text-sm font-normal ">Description</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default SliderComp;
