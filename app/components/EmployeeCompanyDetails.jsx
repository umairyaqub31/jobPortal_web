"use client";

import { GetAboutData } from "@/app/actions";
import add from "@/public/assets/add.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import upload from "@/public/assets/upload.svg";

const EmployeeCompanyDetailsComp = (props) => {
  const [image, setImage] = useState(null);

  const { formData, setFormData } = props;
  //   useEffect(() => {
  //     GetAboutData(formData);
  //   }, [formData]);

  return (
    <div className="lg:min-w-[45vw] min-w-[60vw] w-full h-auto min-h-[80vh] py-2">
      <div className="w-full space-y-2 lg:space-y-8">
        <div className="flex items-center justify-center w-full h-auto text-center">
          <h1 className="font-bold text-xl text-[#000000] ">
            Provide The Following Data About Your Company
          </h1>
        </div>
        <form className="grid grid-cols-6 lg:gap-6 gap-2 text-[#434343] text-sm">
          <div className="col-span-6 space-y-2 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="block py-1 text-sm font-semibold"
            >
              Consultancy E-mail Id
            </label>
            <input
              type="text"
              placeholder="Enter Consultancy E-mail Id"
              id="FirstName"
              className="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, consultancyEmail: e.target.value })
              }
            />
          </div>

          <div className="col-span-6 space-y-2 sm:col-span-3">
            <label htmlFor="emial" className="block py-1 text-sm font-semibold">
              Consultancy URL
            </label>
            <input
              type="text"
              id="enterConsultancyURL"
              placeholder="Enter Consultancy URL"
              class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, consultancyWeb: e.target.value })
              }
            />
          </div>

          <div class="col-span-6 space-y-2">
            <label
              htmlFor="about consultancy"
              class="block text-sm font-semibold py-1"
            >
              About Consultancy
            </label>
            <textarea
              type="text"
              id="about consultancy"
              placeholder="Enter About Consultancy"
              class="w-full h-14 rounded-lg border outline-none px-4 py-3 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, aboutConsultancy: e.target.value })
              }
            />
          </div>

          <div class="col-span-6 space-y-2">
            <label
              htmlFor="companyType"
              class="block text-sm font-semibold py-1"
            >
              Consultancy Size
            </label>
            <select
              id="Consultancy Size"
              className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, consultancySize: e.target.value })
              }
            >
              <option value="male">Select Role</option>
              <option value="female">1-100</option>
              <option value="female">100-10000</option>
              <option value="other">Other</option>
            </select>
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

          <div class="col-span-6 space-y-2">
            <label
              htmlFor="PasswordConfirmation"
              class="block text-sm font-semibold py-1"
            >
              Locality
            </label>
            <input
              type="text"
              id="enter locality"
              placeholder="Enter Locality"
              class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, locality: e.target.value })
              }
            />
            <button className="text-[#0076FC] text-sm flex items-center py-1 gap-1">
              Add Locality
            </button>
          </div>

          <div class="col-span-6 space-y-2">
            <div className="flex flex-col items-center justify-center w-full h-auto duration-300">
              <label
                htmlFor="upload"
                className={`md:w-[240px] w-full bg-white border border-[#3F6EEC] h-[44px] gap-2 relative cursor-pointer rounded-full text-[#3F6EEC] justify-center flex items-center px-4 py-[10px]`}
              >
                <input
                  type="file"
                  id="upload"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const imageUrl = URL.createObjectURL(file);
                    setImage(imageUrl);
                  }}
                />
                <Image
                  src={upload}
                  width={500}
                  height={500}
                  alt="Upload Icon"
                  className={` w-4 h-4 `}
                />

                <span className="text-sm font-semibold">
                  Upload Consultancy Logo
                </span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeCompanyDetailsComp;
