"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import upload from "@/public/assets/upload.svg";
import { GetUserCV } from "@/app/actions";
import { uploadFile } from "../services";

const UploadCVComp = () => {
  const [image, setImage] = useState([]);
  console.log("image :::", image);

  const fileUpload = () => {
    uploadFile(image)
      .then((res) => {
        console.log("Upload File API...............", res);
      })
      .catch((err) => {
        console.log("err.....", err?.message);
      });
  };

  useEffect(() => {
    GetUserCV(image);
  }, [image]);

  console.log(".....He", image);
  return (
    <>
      <div className="w-full min-h-[70vh] h-auto flex flex-col justify-start items-center text-[#434343] gap-6 lg:py-8 py-4 lg:px-14 px-4 duration-300">
        {/* upload resume input */}
        <div className="flex flex-col items-start justify-center w-full h-auto space-y-6 flex-nowrap">
          <label
            onClick={fileUpload}
            htmlFor="Employee Type"
            className="block py-1 text-xl font-bold"
          >
            Upload CV
          </label>
          <label
            htmlFor="upload"
            className="gap-2 h-11 cursor-pointer w-auto rounded-full border border-[#3F6EEC]  text-[#3F6EEC] px-4 py-2 flex items-center"
          >
            <input
              type="file"
              id="upload"
              className="hidden text-[#e7f2fa]"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <Image src={upload} alt="Upload Icon" className="w-5 h-5 " />
            <p className="text-sm font-semibold">Upload Your CV Here</p>
          </label>
        </div>
      </div>
    </>
  );
};

export default UploadCVComp;
