"use client";

// ! imports
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// ! local imports
import { TrendingCardData } from "@/lib/data";
import BedTime from "@/public/Bedtime.png";

// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getJobRoles } from "../services";
const TradingJobsComp = () => {
  const [isPaginationVisible, setIsPaginationVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const totalSlides = 3;
  const [trendingrole, setTrendingRole] = useState({});

  // Effect to update pagination visibility based on window width
  useEffect(() => {
    // This code runs on the client side after the component mounts
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      // Assuming you want to show pagination for screens smaller than 768px
      setIsPaginationVisible(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call the function to set the initial state
    handleResize();

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // * custom pagination

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchTrendingRoles = () => {
    getJobRoles()
      .then((res) => {
        // console.log("Trending Job API...............", res);
        setTrendingRole(res.data);
      })
      .catch((err) => {
        console.log("err.....", err?.response?.data?.message);
      });
  };
  useEffect(() => {
    fetchTrendingRoles();
  }, []);

  const CustomPagination = ({ current, total, swiper }) => {
    return (
      <div className="swiper-pagination">
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            className={`swiper-pagination-bullet ${
              current === index ? "swiper-pagination-bullet-active" : ""
            }`}
            onClick={() => swiper.slideTo(index)}
          ></span>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* ?main comp */}
      <div className="w-full h-auto flex flex-col justify-center items-center text-center bg-white md:gap-8 gap-4 md:p-[100px] p-4">
        {/* quote  */}
        <h1 className="w-full h-auto md:text-[36px] text-[20px] font-bold">{`Trending Job Roles`}</h1>

        {/* card container */}
        <div className="flex items-center justify-center w-full h-auto gap-0 overflow-x-hidden flex-nowrap ">
          {/* card */}
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
              // when window width is >= 1280px
              1463: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={32}
            // slidesPerView={4}
            // navigation
            // pagination={isPaginationVisible ? { clickable: true } : false}
            // Other props remain the same
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {Object.values(trendingrole)?.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="cursor-pointer min-w-[305px] w-full h-[113px] rounded-2xl border gap-4 flex justify-center items-center">
                    <div className="w-16 h-16 bg-[#FF993B] rounded-3xl flex justify-center items-center">
                      <Image
                        src={BedTime}
                        alt="bedtime"
                        className="object-contain w-9 h-9"
                      />
                    </div>

                    <div className="w-auto h-full flex flex-col justify-center items-start text-[#2D432C] gap-4 ">
                      <h1 className="text-2xl font-semibold">{item.jobRole}</h1>
                      <p className="text-sm font-normal ">{item.count}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {windowWidth < 768 && swiper && (
            <CustomPagination
              current={currentSlide}
              total={totalSlides}
              swiper={swiper}
            />
          )}
        </div>
        {/* card container */}
        <div className="flex items-center justify-center w-full h-auto gap-0 overflow-x-hidden flex-nowrap max-md:hidden">
          {/* card */}
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
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
              // when window width is >= 1280px
              1463: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={32}
            // slidesPerView={4}
            // navigation
            // pagination={isPaginationVisible ? { clickable: true } : false}
            // Other props remain the same
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {/* {TrendingCardData?.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="cursor-pointer min-w-[305px] w-full h-[113px] rounded-2xl border gap-4 flex justify-center items-center">
                    <div className="w-16 h-16 bg-[#FF993B] rounded-3xl flex justify-center items-center">
                      <Image
                        src={BedTime}
                        alt="bedtime"
                        className="object-contain w-9 h-9"
                      />
                    </div>

                    <div className="w-auto h-full flex flex-col justify-center items-start text-[#2D432C] gap-4 ">
                      <h1 className="text-2xl font-semibold">{item.title}</h1>
                      <p className="text-sm font-normal ">{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })} */}
          </Swiper>
        </div>

        {/* view all button */}
        <div className="flex items-center justify-center w-full h-auto md:py-0 py-[3%]">
          <Link href="/jobs">
            <button className="h-[56px] w-[90vw] md:w-auto py-[17px] px-6 gap-2 flex justify-center ice text-center rounded-full border  border-[#3F6EEC] text-[#3F6EEC] text-sm font-semibold">
              {`View All Jobs`}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TradingJobsComp;
