"use client";

import add from "@/public/assets/add.svg";
import upload from "@/public/assets/upload.svg";
import pen2 from "@/public/pen2.png";
import Image from "next/image";
import { useState } from "react";

const CompanyProfileComp = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyRole: "",
    consultancyName: "",
    workingAs: "",
  });

  //   useEffect(() => {
  //     GetAboutData(formData);
  //   }, [formData]);

  return (
    <div className="md:w-[706px] w-full h-auto min-h-[80vh] py-[4%]">
      <div className="w-full space-y-2 lg:space-y-8">
        <form className="grid grid-cols-6 lg:gap-6 gap-2 text-[#434343] text-sm">
          <div className="col-span-6 space-y-2 sm:col-span-3">
            <div className="flex items-center justify-between w-full h-auto gap-2">
              <label
                htmlFor="full Name"
                className="text-[#434343] text-sm font-semibold"
              >
                Consultancy E-mail Id
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
              type="text"
              placeholder="Enter Consultancy E-mail Id"
              id="FirstName"
              className="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>

          <div className="col-span-6 space-y-2 sm:col-span-3">
            <div className="flex items-center justify-between w-full h-auto gap-2">
              <label
                htmlFor="full Name"
                className="text-[#434343] text-sm font-semibold"
              >
                Consultancy URL
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
              type="text"
              id="enterConsultancyURL"
              placeholder="Enter Consultancy URL"
              class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="col-span-6 space-y-2">
            <div className="flex items-center justify-between w-full h-auto gap-2">
              <label
                htmlFor="full Name"
                className="text-[#434343] text-sm font-semibold"
              >
                About Consultancy
              </label>
              <Image
                src={pen2}
                alt="pen"
                width={500}
                height={500}
                className="object-contain w-[18px] h-[18px]"
              />
            </div>
            <textarea
              type="text"
              id="about consultancy"
              placeholder="Enter About Consultancy"
              class="w-full h-14 rounded-lg border outline-none px-4 py-3 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="col-span-6 space-y-2">
            <div className="flex items-center justify-between w-full h-auto gap-2">
              <label
                htmlFor="full Name"
                className="text-[#434343] text-sm font-semibold"
              >
                Consultancy Size
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
              id="Consultancy Size"
              className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, companyRole: e.target.value })
              }
            >
              <option value="male">Select Role</option>
              <option value="female">1-100</option>
              <option value="female">100-10000</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="col-span-6 space-y-2">
            <div className="flex items-center justify-between w-full h-auto gap-2">
              <label
                htmlFor="full Name"
                className="text-[#434343] text-sm font-semibold"
              >
                City Name
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
            <div className="flex items-center justify-between w-full h-auto gap-2">
              <label
                htmlFor="full Name"
                className="text-[#434343] text-sm font-semibold"
              >
                Consultancy E-mail Id
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
              type="text"
              id="enter locality"
              placeholder="Enter Locality"
              class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            <button className="text-[#0076FC] text-sm flex items-center py-1 gap-1">
              Add Locality
            </button>
          </div>

          <div className="col-span-6 space-y-2">
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
                  Edit Consultancy Logo
                </span>
              </label>
            </div>
          </div>

          {/* <div className="w-full h-auto flex justify-center items-center"> */}
          <button
            // type="submit"
            className="md:min-w-[706px] sm:min-w-[406px] min-w-[250px] grow w-auto bg-[#3F6EEC] text-white p-4 h-auto flex justify-center items-center text-center rounded-full"
          >
            Save Changes
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default CompanyProfileComp;
