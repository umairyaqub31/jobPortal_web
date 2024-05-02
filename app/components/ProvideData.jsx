"use client";

import { GetAboutData } from "@/app/actions";
import add from "@/public/assets/add.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProvideDataComp = (props) => {
  const { formData, setFormData } = props;
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   companyRole: "",
  //   consultancyName: "",
  //   workingAs: "",
  // });

  //   useEffect(() => {
  //     GetAboutData(formData);
  //   }, [formData]);

  return (
    <div className="lg:min-w-[45vw] min-w-[60vw] grow w-full h-auto min-h-[80vh] py-2">
      <div className="w-full space-y-2 lg:space-y-8">
        <div className="">
          <h1 className="font-bold text-xl text-[#000000] ">
            Provide The Following Data About Yourself
          </h1>
        </div>
        <form className="grid grid-cols-6 lg:gap-6 gap-2 text-[#434343] text-sm">
          <div className="col-span-6 space-y-2 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="block py-1 text-sm font-semibold"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              id="FirstName"
              className="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>

          <div className="col-span-6 space-y-2 sm:col-span-3">
            <label htmlFor="emial" className="block py-1 text-sm font-semibold">
              E-Mail Address
            </label>
            <input
              type="text"
              id="enter email address"
              placeholder="Enter Email Address"
              class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div class="col-span-6 space-y-2">
            <label
              htmlFor="companyType"
              class="block text-sm font-semibold py-1"
            >
              Company Type
            </label>
            <select
              id="company type"
              className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, companyRole: e.target.value })
              }
            >
              <option value="male">Select Role</option>
              <option value="female">Manager</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="col-span-3 space-y-2">
            <label
              htmlFor="Email"
              className="block py-1 text-sm font-semibold "
            >
              {" "}
              Consultancy Name{" "}
            </label>
            <input
              type="consultancyName"
              placeholder="consultancyName"
              id="consultancyName"
              class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, consultancyName: e.target.value })
              }
            />
          </div>

          <div class="col-span-3 sm:col-span-3 space-y-2">
            <label htmlFor="Password" class="block text-sm py-1 font-semibold">
              {" "}
              Working As{" "}
            </label>
            <input
              type="text"
              placeholder="Working As"
              id="workingAs"
              class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, workingAs: e.target.value })
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProvideDataComp;
