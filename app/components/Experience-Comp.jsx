"use client";

import { GetAboutData } from "@/app/actions";
import add from "@/public/assets/add.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const Experience = (props) => {
  const { formData, setFormData } = props;

  useEffect(() => {
    GetAboutData(formData);
  }, [formData]);

  return (
    <div className="w-full py-2">
      <div className="w-full space-y-2 lg:space-y-8">
        <div className="">
          <h1 className="font-bold text-xl text-[#000000] ">About us</h1>
        </div>
        <form className="grid grid-cols-6 lg:gap-6 gap-2 text-[#434343] text-sm">
          <div className="col-span-6 space-y-2 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="block py-1 text-sm font-semibold"
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              id="FirstName"
              className=" w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>

          <div className="col-span-6 space-y-2 sm:col-span-3">
            <label
              htmlFor="gender"
              className="block py-1 text-sm font-semibold"
            >
              Gender
            </label>
            <select
              id="gender"
              className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="col-span-3 space-y-2">
            <label
              htmlFor="Email"
              className="block py-1 text-sm font-semibold "
            >
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              placeholder="Add E-mail Address"
              id="add E-mail address"
              class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div class="col-span-3 sm:col-span-3 space-y-2">
            <label htmlFor="Password" class="block text-sm py-1 font-semibold">
              {" "}
              Date of Birth{" "}
            </label>
            <input
              type="text"
              placeholder="00/00/0000"
              id="date-of-birth"
              class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, dob: e.target.value })
              }
            />
          </div>

          <div class="col-span-6 space-y-2">
            <label
              htmlFor="PasswordConfirmation"
              class="block text-sm font-semibold py-1"
            >
              City
            </label>
            <input
              type="text"
              id="enter city name"
              placeholder="Enter City Name"
              class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            <button className="text-[#0076FC] text-sm flex items-center py-1 gap-1">
              <Image src={add} alt="" /> Add City
            </button>
          </div>
          <div className="col-span-6 space-y-2">
            <label
              htmlFor="PasswordConfirmation"
              className="block py-1 text-sm font-semibold "
            >
              Locality
            </label>
            <input
              type="text"
              id="Enter Locality"
              placeholder="Enter Locality"
              className="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, locality: e.target.value })
              }
            />
            <button className="text-[#0076FC] text-sm flex items-center py-1 gap-1">
              <Image src={add} alt="" /> Add City
            </button>
          </div>
          {/* <div class="col-span-6">
            <Link href="/education">
              {" "}
              <button
                // onClick={handlePageClick}
                className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white"
              >
                Next
              </button>
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Experience;
