"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowBlue from "@/public/ArrowBlue.png";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { getSearchCompanyorRole } from "../services";
import { useRouter } from "next/navigation";
import { setCompanyid, setJobRole } from "../redux";
import { useDispatch } from "react-redux";

const SearchBarComp = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [rolesdata, setRolesData] = useState([]);
  const [isDivVisible, setDivVisible] = useState(false);
  const [isRolesVisible, setRolesVisible] = useState(false);
  const searchInputRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [searchRoles, setRolesSearchText] = useState("");
  const divRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (searchText) {
      setDivVisible(true);
    } else {
      setDivVisible(false);
    }
  }, [searchText]);

  useEffect(() => {
    if (searchRoles) {
      setRolesVisible(true);
    } else {
      setRolesVisible(false);
    }
  }, [searchRoles]);

  const handleFocus = () => {};

  const handleChange = (e) => {
    // console.log("ee......", e.target.value);
    setSearchText(e.target.value);
  };

  const handleRoles = (e) => {
    // console.log("ee......", e.target.value);
    setRolesSearchText(e.target.value);
  };

  const handlePClick = () => {
    setDivVisible(false);
  };

  const handleRolesClick = () => {
    setRolesVisible(false);
  };

  const handleClickOutside = (event) => {
    if (
      divRef.current &&
      !divRef.current.contains(event.target) &&
      !searchInputRef.current.contains(event.target)
    ) {
      setDivVisible(false);
    }
  };

  const handleRolesClickOutside = (event) => {
    if (
      divRef.current &&
      !divRef.current.contains(event.target) &&
      !searchInputRef.current.contains(event.target)
    ) {
      setRolesVisible(false);
    }
  };
  // console.log(
  //   "IDs:",
  //   data.map((item) => item._id)
  // );

  const fetchCompanyorRole = () => {
    setLoading(true);
    const role = "";
    getSearchCompanyorRole(searchText, role)
      .then((res) => {
        console.log("RESPONSE............", res);
        setData(res?.data?.results);
      })
      .catch((err) => {
        console.log("Error..........", err.message);
      })
      .finally(() => setLoading(false));
  };

  const fetchRoles = () => {
    setLoading(true);
    const company = "";
    getSearchCompanyorRole(company, searchRoles)
      .then((res) => {
        console.log("RESPONSE   role............", res);
        setRolesData(res?.data?.results);
      })
      .catch((err) => {
        console.log("Error..........", err.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleRolesClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleRolesClickOutside);
    };
  }, []);

  useEffect(() => {
    fetchCompanyorRole();
    fetchRoles();
  }, [searchText, searchRoles]);

  const handleNext = (id) => {
    console.log(">HIT..........", id);
    dispatch(setCompanyid(id));
  };

  const handleJobRol = (jobRole) => {
    console.log(".....Role.....", jobRole);
    dispatch(setJobRole(jobRole));
  };
  return (
    <>
      {/* main container */}
      <div className="md:bg-[#FFFFFF] bg-transparent drop-shadow-sm h-auto w-auto py-2 px-4 flex md:flex-row flex-col md:justify-between justify-center items-center rounded-full md:gap-14 gap-0 duration-300">
        {/* search by jobs */}
        <label
          htmlFor="search"
          className="md:bg-transparent bg-white md:h-10 h-14 min-w-[239px] md:w-auto w-[325px] flex justify-start items-center space-x-2 rounded-tl-[16px] rounded-tr-[16px] max-md:px-4 max-md:py-2"
        >
          <button>
            <CiSearch className="w-6 h-6 text-[#3F6EEC]" />
          </button>

          <input
            type="search"
            onChange={(e) => handleChange(e)}
            placeholder="Search Jobs By company"
            className="text-sm font-normal relative text-[#909198] outline-none bg-transparent w-full"
            // onFocus={handleFocus}
            ref={searchInputRef}
          />
          {isDivVisible && (
            <div
              ref={divRef}
              className="w-[280px] absolute top-[75px] bg-white rounded-md p-3"
            >
              {data.map((item) => (
                <div
                  key={item._id}
                  onClick={() => {
                    router.push("/jobs");
                    handleNext(item._id);
                  }}
                  className="p-2 font-medium text-[14px] hover:underline cursor-pointer"
                >
                  {item?.company?.name}
                </div>
              ))}

              <p onClick={handlePClick} className="p-2 font-medium font-[14px]">
                Logo Desginer
              </p>
              <p onClick={handlePClick} className="p-2 font-medium font-[14px]">
                Logo Graphic
              </p>
            </div>
          )}
        </label>

        {/* divider */}
        <div className="md:block hidden w-auto h-[29px] border-l-[1px] border-[#000000]" />

        {/* search jobs by location */}
        <label
          htmlFor="search"
          className="md:bg-transparent bg-white md:h-10 h-14 min-w-[239px] md:w-auto w-[325px] flex justify-start items-center space-x-2 rounded-tl-[16px] rounded-tr-[16px] max-md:px-4 max-md:py-2"
        >
          <button>
            <CiSearch className="w-6 h-6 text-[#3F6EEC]" />
          </button>

          <input
            type="search"
            onChange={(e) => handleRoles(e)}
            placeholder="Search Jobs By Rolesss"
            className="text-sm font-normal relative text-[#909198] outline-none bg-transparent w-full"
            // onFocus={handleFocus}
            ref={searchInputRef}
          />
          {isRolesVisible && (
            <div
              ref={divRef}
              className="w-[280px] absolute top-[75px] bg-white rounded-md p-3"
            >
              <Link href="/jobs">
                {rolesdata.map((item) => (
                  <p
                    key={item._id}
                    onClick={() => {
                      router.push("/jobs");
                      handleJobRol(item.jobRole);
                    }}
                    className="p-2 font-medium font-[14px] hover:"
                  >
                    {item?.jobRole}
                  </p>
                ))}
              </Link>
            </div>
          )}
        </label>

        {/* search button  */}
        <button className="bg-[#3F6EEC] text-white py-4 px-6 rounded-full md:w-24 w-full md:h-auto h-[40px] flex justify-center items-center shadow-lg max-md:mt-4">
          {`Search`}
        </button>

        {/* view all */}
        <Link href="/jobs">
          <button className="border border-[#0000001A] gap-2 py-2 px-[17px] min-w-[112px] min-h-[37px] text-[#3F6EEC] text-sm font-normal flex justify-center items-center rounded-full">
            <span>View All</span>
            <Image
              src={ArrowBlue}
              alt="ArrowBlue"
              width={500}
              height={500}
              className="object-contain w-6 h-6"
            />
          </button>
        </Link>
      </div>
    </>
  );
};

export default SearchBarComp;
