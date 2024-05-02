"use client";

// ! imports
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ! lib imports
import { CiSearch } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";

// ! local imports
import avatar_logo from "@/public/avatar-logo.png";
import QuestionCircle from "@/public/Question Circle.png";
import logo from "@/public/logo.png";
import avatar from "@/public/avatar.png";
import userIcon from "@/public/userIcon.png";
import City from "@/public/City.png";
import exit from "@/public/exit.png";
import MobileMenuComp from "./Mobile-Menu";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux";

const HeadBarComp = ({
  visible,
  // isLoggedIn,
  help,
  jobs,
  noBlog,
  searchBar,
}) => {
  // const [user, setUser] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.root.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("logout chala");
    dispatch(signOut());
  };
  const router = useRouter();
  return (
    <>
      {visible && (
        <>
          {mobileMenu && (
            <MobileMenuComp setMobileMenu={setMobileMenu} user={isLoggedIn} />
          )}
          <div className="relative z-[999999999999999999999999999] drop-shadow-sm w-full h-auto py-4 lg:px-[100px] md:px-[56px] px-4 flex items-center justify-between bg-white">
            {/* logo  */}
            <Link
              href="/"
              className="flex items-center justify-center w-auto h-full gap-1 flex-nowrap"
            >
              <Image
                src={avatar_logo}
                alt=""
                className="object-contain w-10 h-10"
              />
              <Image
                src={logo}
                alt=""
                className="h-[16.5px] w-[92px] object-contain"
              />
            </Link>

            <button
              className="md:hidden w-10 h-10 bg-[#F8F8F8] rounded-lg p-2 flex justify-center items-center"
              onClick={() => setMobileMenu(true)}
            >
              <RiMenu3Line className="w-5 h-5 text-[#909198]" />
            </button>

            <div className="items-center justify-center hidden w-auto h-auto gap-8 duration-300 md:flex">
              {searchBar && (
                <>
                  <label
                    htmlFor="search"
                    className="h-10 min-w-[239px] w-auto border rounded-3xl py-2 px-4 flex justify-start items-center space-x-2"
                  >
                    <button>
                      <CiSearch className="w-6 h-6 text-[#3F6EEC]" />
                    </button>
                    <input
                      type="search"
                      placeholder={`Search Jobs By ‘cmpany’`}
                      className="text-sm font-normal text-[#909198] outline-none bg-transparent"
                    />
                  </label>
                </>
              )}

              {help && (
                <div className="flex items-center justify-start w-auto h-auto gap-2 text-center">
                  <Image
                    src={QuestionCircle}
                    alt="QuestionCircle"
                    width={500}
                    height={500}
                    className="object-contain w-6 h-6"
                  />
                  <span className="text-[#393A44] text-sm font-normal">
                    Help
                  </span>
                </div>
              )}

              {/* other buttons  */}
              {/* jobs */}
              {jobs && (
                <>
                  <select
                    name="Jobs"
                    id=""
                    className="text-[#393A44] text-sm font-normal gap-2 outline-none"
                  >
                    <option
                      value=""
                      className="px-2"
                      onClick={() => router.push("/jobs")}
                    >
                      Jobs
                    </option>
                    <option
                      value=""
                      className="px-2"
                      onClick={() => router.push("/jobs")}
                    >
                      Jobs
                    </option>
                    <option
                      value=""
                      className="px-2"
                      onClick={() => router.push("/jobs")}
                    >
                      Jobs
                    </option>
                  </select>

                  {/* blog */}
                  {!noBlog && (
                    <button className="text-sm font-normal">Blog</button>
                  )}
                </>
              )}

              {isLoggedIn ? (
                <>
                  <div
                    className="w-9 h-9 relative z-[9999999999999999999999999999999] rounded-full bg-[#D9D9D9] flex justify-center items-center cursor-pointer"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    // onMouseLeave={() => setShowUserMenu(false)}
                  >
                    <Image
                      src={avatar}
                      alt="avatar"
                      className="object-cover rounded-full h-9 w-9"
                    />

                    {showUserMenu && (
                      <div
                        className="absolute top-10 right-0 min-w-[164px] min-h-[161px] h-auto w-auto rounded-2xl p-4 space-y-2 border z-[999999999999] bg-white duration-300"
                        // style={{ position: "fixed", zIndex: 999999999999 }}
                      >
                        <div className="flex items-center justify-center w-full h-auto gap-2">
                          <Image
                            src={avatar}
                            alt="avatar"
                            className="object-cover rounded-full h-9 w-9"
                          />
                          <div className="text-sm font-normal text-[#909198] w-auto h-auto flex flex-col justify-between items-center gap-2">
                            <span className="font-semibold text-black">
                              Renial Khan
                            </span>
                            <span className="text-xs">89463729382</span>
                          </div>
                        </div>

                        {/* divider */}
                        <div className="w-full h-[1px] bg-[#0000000D]"></div>

                        {/* buttons */}
                        <Link
                          href="/employee-profile"
                          className="flex items-center justify-start w-full h-auto gap-2"
                        >
                          <Image
                            src={userIcon}
                            alt="QuestionCircle"
                            width={500}
                            height={500}
                            className="object-contain w-4 h-4"
                          />
                          <span className="text-[#393A44] text-xs font-normal">
                            View Profile
                          </span>
                        </Link>

                        <Link
                          href="/company-profile"
                          className="flex items-center justify-start w-full h-auto gap-2 flex-nowrap"
                        >
                          <Image
                            src={City}
                            alt="QuestionCircle"
                            width={500}
                            height={500}
                            className="object-contain w-4 h-4"
                          />
                          <span className="text-[#393A44] text-xs font-normal">
                            Company Profile
                          </span>
                        </Link>

                        <Link
                          onClick={handleLogout}
                          href="/"
                          className="flex items-center justify-start w-full h-auto gap-2 flex-nowrap"
                        >
                          <Image
                            src={exit}
                            alt="QuestionCircle"
                            width={500}
                            height={500}
                            className="object-contain w-4 h-4"
                          />
                          <span className="text-[#3F6EEC] text-xs font-normal">
                            Sign Out
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* employee login button */}
                  <Link href={"/employee-login"}>
                    <button className="border border-[#3F6EEC] rounded-full h-10 flex justify-center items-center text-[#3F6EEC] py-4 px-6">
                      Employee Login
                    </button>
                  </Link>

                  {/* Candidate login button */}
                  <Link href={"/candidate-login"}>
                    <button className="border border-[#3F6EEC] bg-[#3F6EEC] rounded-full h-10 flex justify-center items-center text-white py-4 px-6">
                      Candidate Login
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HeadBarComp;
