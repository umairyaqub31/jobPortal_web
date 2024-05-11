"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import upload from "@/public/assets/upload.svg";
import { GetUserCV } from "@/app/actions";
import { candidateRegister, uploadFile } from "../services";
import check from "@/public/list.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthToken,
  setCandidateProfile,
  setIsLoggedIn,
  setUser,
} from "../redux";

const UploadCVComp = (props) => {
  const { formData, setFormData, handlePageNext } = props;
  const dispatch = useDispatch();
  const { candidateProfile } = useSelector((state) => state.root.user);
  const [loading, setLoading] = useState(false);
  console.log("...........", candidateProfile);
  const [image, setImage] = useState([]);
  const [error, setError] = React.useState("");
  console.log("image :::", image);

  const fileUpload = async () => {
    const data = new FormData();

    await data.append("file", image);

    uploadFile(data)
      .then((res) => {
        console.log("...CV form", res);
        setFormData({ ...formData, cv: res?.data?.fileUrl });
        dispatch(
          setCandidateProfile({
            ...candidateProfile,
            CVLink: res?.data?.fileUrl,
          })
        );
      })
      .catch((err) => {
        console.log("err.....", err?.message);
      });
  };

  useEffect(() => {
    // GetUserCV(image);
    if (image) {
      fileUpload();
    }
  }, [image]);

  const handlePageClick = () => {
    if (candidateProfile.CVLink && candidateProfile.CVLink.trim() !== "") {
      handlePageNext();
    } else {
      setError("Required");
      console.log(".................EERROORR");
    }
  };
  return (
    <>
      <div className="w-full min-h-[70vh] h-auto flex flex-col justify-start items-center text-[#434343] gap-6 lg:py-8 py-4 lg:px-14 px-4 duration-300">
        {/* upload resume input */}
        {formData?.cv && (
          <Image src={check} alt="check Icon" className="w-5 h-5 " />
        )}

        <div className="flex flex-col items-start justify-center w-full h-auto space-y-6 flex-nowrap">
          <label
            // onClick={fileUpload}
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
          {error && <div className="text-red-500">{error}</div>}
        </div>
      </div>
      <div class="col-span-6 w-full">
        {" "}
        <button
          onClick={handlePageClick}
          className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-[100%] py-2 text-white"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default UploadCVComp;
