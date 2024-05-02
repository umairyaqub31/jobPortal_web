import React, { useState } from "react";
import Image from "next/image";
import cross from "@/public/assets/cross.svg";
import Link from "next/link";

// * local imports
import upload from "@/public/upload.png";

const EmployeeInputDialog = ({ onClick, onClose }) => {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  // Set the initial countdown time in seconds
  const [countdown, setCountdown] = useState(56);

  const [gstFile, setGstFile] = useState(null);
  const [pinCardFile, setPinCardFile] = useState(null);

  const handleChange = (index, event) => {
    const newOtpValues = [...otpValues];
    // Check if the input value length is more than 1, if so, trim it to the first character
    const value =
      event.target.value.length > 1
        ? event.target.value.slice(0, 1)
        : event.target.value;
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  React.useEffect(() => {
    let interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          return prevCountdown; // If countdown reaches 0, stop the countdown
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
      <div className="shadow-sm md:w-[626px] w-full h-auto  bg-white rounded-3xl duration-300">
        <div className="p-4 space-y-8 md:p-8">
          <div className="flex items-center justify-between py-2">
            <h2 className="text-lg font-bold">Upload The Following Files</h2>
            <button className="bg-[#F8F8F8] p-1" onClick={onClose}>
              <Image src={cross} alt="" />
            </button>
          </div>
          {/* <div className="py-2">
            <p className="text-sm text-[#949494]">
              A verification email will be sent to your email{" "}
              <button className="text-[#0076FC]"> @someone@email.com</button>
            </p>
          </div> */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center justify-center w-full h-auto gap-4 md:flex-row">
              <label className="min-w-[273px] h-[116px] rounded-[40px] border border-[#3F6EEC] text-[#3F6EEC] flex flex-col justify-center items-center text-center py-[10px] px-4 cursor-pointer gap-2">
                <input
                  type="file"
                  name="GST"
                  id="GST"
                  className="hidden w-full h-full"
                  onChange={(e) => setGstFile(e.target.files[0])}
                />
                <Image
                  src={upload}
                  alt="upload"
                  className="object-contain w-6 h-6"
                />
                <label htmlFor="GST" className="text-sm font-semibold">
                  Upload Your GST
                </label>
              </label>

              <label className="min-w-[273px] h-[116px] rounded-[40px] border border-[#3F6EEC] text-[#3F6EEC] flex flex-col justify-center items-center text-center py-[10px] px-4 cursor-pointer gap-2">
                <input
                  type="file"
                  name="card"
                  id="card"
                  className="hidden w-full h-full"
                  onChange={(e) => setPinCardFile(e.target.files[0])}
                />
                <Image
                  src={upload}
                  alt="upload"
                  className="object-contain w-6 h-6"
                />
                <label htmlFor="card" className="text-sm font-semibold">
                  Upload Your PIN CARD
                </label>
              </label>
            </div>

            <div className="">
              <Link href="/employee-login/employee-jobs">
                <button className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white">
                  Confirm
                </button>
              </Link>
            </div>
            <div className="">
              <Link href="/employee-login/info">
                <button
                  className="text-center text-[#0076FC] font-bold rounded-full w-full "
                  onClick={onClick}
                >
                  Skip
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeInputDialog;
