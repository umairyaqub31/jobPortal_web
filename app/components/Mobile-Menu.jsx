import React from "react";
import Image from "next/image";
import Link from "next/link";

import footerLogo from "@/public/footer-logo.png";
import close from "@/public/close.png";

import { CiSearch } from "react-icons/ci";

import avatar from "@/public/avatar.png";

const MobileMenuComp = ({ setMobileMenu, user }) => {
  return (
    <>
      {/* main container */}
      <div className="md:hidden fixed z-[99999] top-0 left-0 w-full h-auto min-h-screen bg-slate-500/30 flex flex-row justify-end items-center duration-300">
        {/* menu div */}
        <div className="min-w-[70%] min-h-screen h-auto flex flex-col justify-start gap-4 p-4 items-center bg-white text-[#393A44] text-xl font-bold">
          <div className="flex items-center justify-start w-full h-auto">
            <button onClick={() => setMobileMenu(false)}>
              <Link href="/">
                <Image
                  src={close}
                  alt="close"
                  className="object-contain w-4 h-4 "
                />
              </Link>
            </button>
          </div>
          <Image
            src={footerLogo}
            alt="footerLogo"
            className="object-contain w-40 h-20"
          />

          {user ? (
            <>
              <div className="w-14 h-14 rounded-full bg-[#D9D9D9] flex justify-center items-center">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="object-cover rounded-full h-14 w-14"
                />
              </div>
            </>
          ) : (
            <>
              {/* employee login button */}
              <Link href={"/employee-login"}>
                <button className="text-base border border-[#3F6EEC] rounded-full h-10 flex justify-center items-center text-[#3F6EEC] py-4 px-6">
                  Employee Login
                </button>
              </Link>

              {/* Candidate login button */}
              <Link href={"/candidate-login"}>
                <button className=" text-base border border-[#3F6EEC] bg-[#3F6EEC] rounded-full h-10 flex justify-center items-center text-white py-4 px-6">
                  Candidate Login
                </button>
              </Link>
            </>
          )}

          {user && (
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

          <Link
            href="/jobs"
            className="mt-8"
            onClick={() => setMobileMenu(false)}
          >
            Jobs
          </Link>
          <Link
            href="/companies"
            className=""
            onClick={() => setMobileMenu(false)}
          >
            Companies
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenuComp;
