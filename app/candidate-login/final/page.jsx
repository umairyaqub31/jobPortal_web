"use client";

import { GetUserInfo } from "@/app/actions";
import add from "@/public/assets/add.svg";
import upload from "@/public/assets/upload.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const FInalPageComp = () => {
  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    userAbout: "",
    userAge: "",
    userLanguage: "English",
    userPic: null,
  });

  useEffect(() => {
    GetUserInfo(formData);
  }, [formData]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto min-h-screen bgImage px-[10%] py-[5%]">
      <div className="max-w-[533px] w-auto min-h-[667px] h-auto bg-white drop-shadow-md rounded-3xl md:p-8 p-4 gap-8 flex flex-col flex-none justify-start items-start">
        <h1 className="w-full h-auto lg:text-xl text-lg font-bold text-[#393A44]">
          {`Provide The Following Info To Proceed Further`}
        </h1>

        {/* profile pic upload */}
        <div className="flex flex-col items-center justify-center w-auto h-auto gap-2 md:flex-row md:gap-4">
          <div className="flex flex-col items-center justify-center w-auto h-auto">
            <label
              htmlFor="upload"
              className={`min-w-[95px] mb-2 min-h-[95px] gap-1 relative cursor-pointer  rounded-full bg-[#0076FC0D] text-[#0D75920D] justify-center flex items-center ${
                image ? "p-0" : " px-4 py-2 "
              }`}
            >
              <input
                type="file"
                id="upload"
                className="hidden"
                // onChange={(e) => setImage(e.target.files[0])}
                onChange={(e) => {
                  const file = e.target.files[0];
                  const imageUrl = URL.createObjectURL(file);
                  setImage(imageUrl);
                  setFormData({ ...formData, userPic: imageUrl });
                }}
              />
              <Image
                src={image ? image : upload}
                width={500}
                height={500}
                alt="Upload Icon"
                className={`${
                  image && "w-[150px] h-[150px] object-cover rounded-full"
                } w-8 h-8 `}
              />
            </label>
            <p className="w-auto flex flex-nowrap text-[#0076FC] text-xs font-normal">{`Upload Profile Photo`}</p>
          </div>
        </div>

        <div className="w-full h-auto ">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="About Us"
            className="w-full p-4 border border-gray-300 rounded-lg outline-none"
            onChange={(e) =>
              setFormData({ ...formData, userAbout: e.target.value })
            }
          ></textarea>
        </div>

        <div className="flex flex-col w-full h-auto space-y-2">
          <label htmlFor="Age" className="text-sm font-semibold">
            Age
          </label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, userAge: e.target.value })
            }
            type="text"
            placeholder="Enter Your Age"
            className="rounded-xl border outline-none w-[35%] h-[44px] p-4"
          />
        </div>

        <div className="col-span-6 gap-2">
          <label
            htmlFor="skill"
            className="block py-2 text-sm font-semibold text-[#434343]"
          >
            What Are The Languages Do You Know?
          </label>
          <button className="text-[#0076FC] text-sm font-medium flex justify-center items-center h-11 gap-2 border-[#3F6EEC] border-2 rounded-full py-3 px-4">
            <Image src={add} alt="" />
            <span className="text-[#3F6EEC] text-sm font-semibold">
              Add Language
            </span>
          </button>
        </div>

        <div className="w-full h-auto">
          <Link href="/profile-info">
            <button className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FInalPageComp;
