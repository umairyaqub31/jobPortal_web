"use client";

// ! imports
import Image from "next/image";
import { useState } from "react";

// ! local imports
import DP from "@/public/11.jpg";
import DP1 from "@/public/22.jpg";
import DP2 from "@/public/33.jpg";

// ! lib imports

// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ClientCardComp = ({ data }) => {
  const [isPaginationVisible, setIsPaginationVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const totalSlides = 3;

  const [start, setStart] = useState(0);

  const handleForward = () => {
    if (start + 1 + 3 <= data.length) {
      setStart(start + 1);
    }
  };

  const handleBackward = () => {
    if (start - 1 >= 0) {
      setStart(start - 1);
    }
  };

  // * custom pagination
  const CustomPagination = ({ current, total, swiper }) => {
    return (
      <div className="swiper-pagination1">
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            className={`swiper-pagination-bullet1 ${
              current === index ? "swiper-pagination-bullet-active1" : ""
            }`}
            onClick={() => swiper.slideTo(index)}
          ></span>
        ))}
      </div>
    );
  };

  console.log(start);
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center text-center bg-white md:gap-8 gap-4 md:px-[12%] px-4">
        {/* main container */}
        <div className="flex items-center justify-center w-full h-auto gap-0 overflow-x-hidden flex-nowrap">
          {/* <button onClick={handleBackward} className="hidden md:block">
          <IoIosArrowBack className="w-6 h-6" />
        </button> */}

          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            onSwiper={(swiper) => setSwiper(swiper)}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            breakpoints={{
              600: {
                // width: 576,
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1124: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
          >
            <SwiperSlide>
              <div className="bg-[#FFFFFF] max-w-[350px] w-auto h-[337px] gap-4 rounded-2xl drop-shadow-sm flex flex-nowrap flex-col justify-between items-start duration-300 text-start">
                <div className="w-full h-[205px] bg-[#F8F8F8] flex flex-col justify-center gap-2 items-center text-[#393A44]">
                  {/* <h1 className="text-2xl font-semibold">{`Efficie`}</h1> */}
                  <p className="flex flex-wrap w-full px-12 h-auto text-sm font-normal text-center text-[#909198]">
                    {`My experience with hieron was excellent. Their team's expertise, commitment, and customer-centric approach make them a standout player in the industry. very cooperative employee and management.`}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center w-full h-auto">
                  <Image
                    src={DP1}
                    alt="dp"
                    className="object-contain rounded-full w-14 h-14"
                  />

                  <h1 className="text-xl font-semibold">{`Nitin Tiwari`}</h1>
                  <p className="flex flex-wrap w-full justify-center items-center h-auto text-sm font-normal text-center text-[#474A57]">
                    {`CEO at ABC Corporation`}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF] max-w-[350px] w-auto h-[337px] gap-4 rounded-2xl drop-shadow-sm flex flex-nowrap flex-col justify-between items-start duration-300 text-start">
                <div className="w-full h-[205px] bg-[#F8F8F8] flex flex-col justify-center gap-2 items-center text-[#393A44]">
                  {/* <h1 className="text-2xl font-semibold">{`Efficie`}</h1> */}
                  <p className="flex flex-wrap w-full px-12 h-auto text-sm font-normal text-center text-[#909198]">
                    {`My experience with Hieron was outstanding. Their team's expertise, dedication, and customer-centric approach truly set them apart in the industry. The employees and management were incredibly cooperative.`}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center w-full h-auto">
                  <Image
                    src={DP}
                    alt="dp"
                    className="object-contain rounded-full w-14 h-14"
                  />

                  <h1 className="text-xl font-semibold">{`Jeetendra sharma`}</h1>
                  <p className="flex flex-wrap w-full justify-center items-center h-auto text-sm font-normal text-center text-[#474A57]">
                    {`CEO at ABC Corporation`}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF] max-w-[350px] w-auto h-[337px] gap-4 rounded-2xl drop-shadow-sm flex flex-nowrap flex-col justify-between items-start duration-300 text-start">
                <div className="w-full h-[205px] bg-[#F8F8F8] flex flex-col justify-center gap-2 items-center text-[#393A44]">
                  {/* <h1 className="text-2xl font-semibold">{`Efficie`}</h1> */}
                  <p className="flex flex-wrap w-full px-12 h-auto text-sm font-normal text-center text-[#909198]">
                    {`I had an excellent experience with Hieron. The team's expertise, commitment, and focus on customer satisfaction make them a standout in the industry. Both the employees and management were very cooperative.`}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center w-full h-auto">
                  <Image
                    src={DP2}
                    alt="dp"
                    className="object-contain rounded-full w-14 h-14"
                  />

                  <h1 className="text-xl font-semibold">{`Review Ankita`}</h1>
                  <p className="flex flex-wrap w-full justify-center items-center h-auto text-sm font-normal text-center text-[#474A57]">
                    {`CFO at Gandhi Enterprises

`}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF] max-w-[350px] w-auto h-[337px] gap-4 rounded-2xl drop-shadow-sm flex flex-nowrap flex-col justify-between items-start duration-300 text-start">
                <div className="w-full h-[205px] bg-[#F8F8F8] flex flex-col justify-center gap-2 items-center text-[#393A44]">
                  {/* <h1 className="text-2xl font-semibold">{`Efficie`}</h1> */}
                  <p className="flex flex-wrap w-full px-12 h-auto text-sm font-normal text-center text-[#909198]">
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.`}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center w-full h-auto">
                  <Image
                    src={DP}
                    alt="dp"
                    className="object-contain rounded-full w-14 h-14"
                  />

                  <h1 className="text-xl font-semibold">{`Ankita Yadav`}</h1>
                  <p className="flex flex-wrap w-full justify-center items-center h-auto text-sm font-normal text-center text-[#474A57]">
                    {`CEO at Common Industries`}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <button onClick={handleForward} className="hidden md:block">
          <IoIosArrowForward className="w-6 h-6" />
        </button> */}
        </div>
        {swiper && (
          <CustomPagination
            current={currentSlide}
            total={totalSlides}
            swiper={swiper}
          />
        )}
      </div>
    </>
  );
};

export default ClientCardComp;
