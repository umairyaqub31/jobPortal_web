"use client";

import React, { useState } from "react";
import avatar from "@/public/avatar.png";
import Image from "next/image";

// * local imports
import pen from "@/public/pen.png";
import pen2 from "@/public/pen2.png";
const EmployeeProfileComp = () => {
  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyRole: "",
    consultancyName: "",
    workingAs: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData ::");
    console.log(formData);
  };

  return (
    <>
      {/* main container */}
      <div className="w-full h-auto lg:space-y-6 space-y-3 bg-transparent md:py-[4%] py-[10%]">
        <div className="flex flex-col items-start justify-start w-auto h-auto gap-2">
          <label className="w-[95px] h-[95px] rounded-full">
            <input
              type="file"
              name="dp"
              id="dp"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                const imageUrl = URL.createObjectURL(file);
                setImage(imageUrl);
              }}
            />
            <Image
              src={image || avatar}
              alt="dp"
              width={500}
              height={500}
              className="object-cover w-[95px] h-[95px] rounded-full"
            />
          </label>
          <div className="flex items-center justify-start w-auto h-auto gap-2 text-center">
            <span className="text-[#0076FC] font-normal text-xs">
              Edit Profile Photo
            </span>
            <Image
              src={pen}
              alt="pen"
              width={500}
              height={500}
              className="object-contain w-[18px] h-[18px]"
            />
          </div>
        </div>

        {/* main body form */}

        <form
          onSubmit={handleSubmit}
          className="w-full h-auto lg:space-y-6 space-y-3"
        >
          <div className="flex lg:flex-row flex-col items-center max-lg:max-w-[706px] justify-start w-full h-auto gap-6">
            {/* full name */}
            <div className="lg:w-[341px] w-full h-auto flex flex-col justify-start text-start items-center gap-2">
              <div className="flex items-center justify-between w-full h-auto gap-2">
                <label
                  htmlFor="full Name"
                  className="text-[#434343] text-sm font-semibold"
                >
                  Full Name
                </label>
                <Image
                  src={pen2}
                  alt="pen"
                  width={500}
                  height={500}
                  className="object-contain w-[18px] h-[18px]"
                />
              </div>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                type="text"
                className="outline-none w-full h-[55px] border bg-white rounded-2xl px-4 text-sm font-normal"
                placeholder="Enter Full Name"
              />
            </div>

            {/* email address */}
            <div className="lg:w-[341px] w-full h-auto flex flex-col justify-start text-start items-center gap-2">
              <div className="flex items-center justify-between w-full h-auto gap-2">
                <label
                  htmlFor="E-Mail Address"
                  className="text-[#434343] text-sm font-semibold"
                >
                  E-Mail Address
                </label>
                <Image
                  src={pen2}
                  alt="pen"
                  width={500}
                  height={500}
                  className="object-contain w-[18px] h-[18px]"
                />
              </div>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                className="outline-none w-full h-[55px] border bg-white rounded-2xl px-4 text-sm font-normal"
                placeholder="Enter E-Mail Address"
              />
            </div>
          </div>

          {/* Company Type */}
          <div className="flex flex-col items-center justify-start md:w-[706px] w-full h-auto gap-2 text-start">
            <div className="flex items-center justify-between w-full h-auto gap-2">
              <label
                htmlFor="Select Role"
                className="text-[#434343] text-sm font-semibold"
              >
                Select Role
              </label>
              <Image
                src={pen2}
                alt="pen"
                width={500}
                height={500}
                className="object-contain w-[18px] h-[18px]"
              />
            </div>
            <select
              onChange={(e) =>
                setFormData({ ...formData, companyRole: e.target.value })
              }
              type="email"
              className="outline-none w-full h-[55px] border text-[#949494] text-sm bg-white rounded-2xl px-4 font-normal"
              placeholder="Enter Select Role"
            >
              <option value="">Select Role</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex lg:flex-row flex-col items-center max-lg:max-w-[706px] justify-start w-full h-auto gap-6">
            {/* company name */}
            <div className="lg:w-[341px] w-full h-auto flex flex-col justify-start text-start items-center gap-2">
              <div className="flex items-center justify-between w-full h-auto gap-2">
                <label
                  htmlFor="Company Name"
                  className="text-[#434343] text-sm font-semibold"
                >
                  Company Name
                </label>
                <Image
                  src={pen2}
                  alt="pen"
                  width={500}
                  height={500}
                  className="object-contain w-[18px] h-[18px]"
                />
              </div>
              <select
                onChange={(e) =>
                  setFormData({ ...formData, companyRole: e.target.value })
                }
                type="email"
                className="outline-none w-full h-[55px] border text-[#949494] text-sm bg-white rounded-2xl px-4 font-normal"
                placeholder="00/00/0000"
              >
                <option value="">00/00/0000</option>
                <option value="manager">Zysoftec</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* working as */}
            <div className="lg:w-[341px] w-full h-auto flex flex-col justify-start text-start items-center gap-2">
              <div className="flex items-center justify-between w-full h-auto gap-2">
                <label
                  htmlFor="working as"
                  className="text-[#434343] text-sm font-semibold"
                >
                  working as
                </label>
                <Image
                  src={pen2}
                  alt="pen"
                  width={500}
                  height={500}
                  className="object-contain w-[18px] h-[18px]"
                />
              </div>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, workingAs: e.target.value })
                }
                type="email"
                className="outline-none w-full h-[55px] border bg-white rounded-2xl px-4 text-sm font-normal"
                placeholder="Enter working as"
              />
            </div>
          </div>

          <button
            type="submit"
            className="md:w-[706px] w-full bg-[#3F6EEC] text-white p-4 h-auto flex justify-center items-center text-center rounded-full"
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default EmployeeProfileComp;
