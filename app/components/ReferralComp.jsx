"use client";

// * imports
import React, { useState } from "react";

// * lin imports
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const ReferralComp = () => {
  const [referralLink, setReferralLink] = useState(
    "https://Lorem ipsum dolor sit amet, consectetur"
  );
  const [buttonText, setButtonText] = useState("Copy Link");
  return (
    <>
      {/* main container */}
      <div className="w-full md:max-w-[773px] duration-300 min-h-[80vh] h-auto mt-[3%] bg-white md:p-4 p-2 md:space-y-8 space-y-4 rounded-xl text-[#434343] md:text-sm text-xs font-normal">
        <div className="w-full h-auto space-y-4">
          <h1 className="text-sm font-semibold">{`Your Referral Invite Link`}</h1>
          <input
            type="text"
            disabled
            value={referralLink}
            className="w-full h-[55px] md:px-4 px-2 rounded-2xl bg-white border text-[#949494] "
            placeholder="https://Lorem ipsum dolor sit amet, consectetur"
          />

          {/* button container */}
          <div className="flex md:flex-row flex-col items-center justify-start w-full h-auto gap-2">
            <button
              className="text-white md:w-[179px] w-full h-[40px] py-[17px] px-6 flex justify-center items-center text-center bg-[#0076FC] font-semibold rounded-full"
              onClick={() => {
                navigator.clipboard
                  .writeText(referralLink)
                  .then(() => {
                    console.log("Text copied to clipboard");
                    setButtonText("Copied"); // Change the button text to "Copied"
                    setTimeout(() => setButtonText("Copy Link"), 2000); // Revert the button text after 2 seconds
                  })
                  .catch((err) => {
                    console.error("Failed to copy text: ", err);
                    // Optionally, handle the error here
                  });
              }}
            >
              {buttonText}
            </button>

            <div className="md:w-auto w-full h-auto flex md:justify-start justify-center items-center gap-2">
              <button className="bg-[#F2F2F2] w-7 h-7 rounded-full flex justify-center items-center text-center">
                <FaTwitter className="w-3 h-3" />
              </button>

              <button className="bg-[#F2F2F2] w-7 h-7 rounded-full flex justify-center items-center text-center">
                <FaFacebookF className="w-3 h-3" />
              </button>

              <button className="bg-[#F2F2F2] w-7 h-7 rounded-full flex justify-center items-center text-center">
                <BsInstagram className="w-3 h-3" />
              </button>

              <button className="bg-[#F2F2F2] w-7 h-7 rounded-full flex justify-center items-center text-center">
                <BsLinkedin className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-auto space-y-4">
          <h1 className="text-sm font-semibold">{`Invite Friends Through E-mail`}</h1>
          <input
            type="text"
            className="w-full h-[55px] md:px-4 px-2 rounded-2xl bg-white border text-[#949494] "
            placeholder="Add Gmail Address"
          />

          <button className="bg-[#F2F2F2] md:w-[179px] w-full h-[40px] rounded-full text-center text-[#393A44] font-semibold text-sm">
            Send Invite
          </button>
        </div>
      </div>
    </>
  );
};

export default ReferralComp;
