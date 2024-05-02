import cross from "@/public/assets/cross.svg";
import Image from "next/image";
import React, { useState } from "react";
import EmployeeInputDialog from "./Employee-Input-Dialog";

const EmployeeOtpInput = ({ onClick, onClose }) => {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  // Set the initial countdown time in seconds
  const [countdown, setCountdown] = useState(56);
  const [showInputDialog, setShowInputDialog] = useState(true);
  const [showOTPModal, setShowOTPModal] = useState(false);

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

  const handleOnSubmitModal = () => {
    setShowOTPModal(true);
    onClose;
    setShowInputDialog(false);
  };

  const handleCloseOTPModal = () => {
    setShowOTPModal(false);
  };

  return (
    <>
      {showInputDialog && (
        <div className="shadow-sm md:w-[300px] bg-white rounded-3xl duration-300">
          <div className="p-4">
            <div className="flex items-center justify-between py-2">
              <h2 className="text-lg font-medium">Enter OTP</h2>
              <button className="bg-[#F8F8F8] p-1" onClick={onClose}>
                <Image src={cross} alt="" />
              </button>
            </div>
            <div className="py-2">
              <p className="text-sm text-[#949494]">
                A verification email will be sent to your email{" "}
                <button className="text-[#0076FC]"> @someone@email.com</button>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 pt-3">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    className={`w-9 outline-none py-2 rounded-lg forced-colors:to-blue-500 ${
                      value
                        ? "text-blue-500 border-blue-500"
                        : "bg-gray-100 border-gray-300"
                    } text-center`}
                    placeholder="-"
                    value={value}
                    onChange={(event) => handleChange(index, event)}
                  />
                ))}
              </div>
              <div className="">
                <h1 className="text-center">{`${Math.floor(countdown / 60)
                  .toString()
                  .padStart(2, "0")}:${(countdown % 60)
                  .toString()
                  .padStart(2, "0")}`}</h1>
              </div>
              <div className="text-center">
                <p className="text-[#8E8E8E] text-sm">
                  Didn’t receive code?{" "}
                  <button className="text-[#0076FC] font-bold">
                    Resend Code
                  </button>
                </p>
              </div>
              <div className="">
                {/* <Link href="/employee-login/info"> */}
                <button
                  className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white"
                  onClick={handleOnSubmitModal}
                >
                  Submit
                </button>
                {/* </Link> */}
              </div>
              <div className="">
                <button
                  className="text-center text-[#0076FC] font-bold rounded-full w-full "
                  onClick={onClick}
                >
                  GO Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showOTPModal && (
        <div className="fixed top-0 left-0 min-w-full min-h-full bg-[#e3e3e3] md:px-0 px-8 bg-opacity-50 flex justify-center items-center duration-300">
          <EmployeeInputDialog
            onClick={handleCloseOTPModal}
            onClose={handleCloseOTPModal}
          />
        </div>
      )}
    </>
  );
};

export default EmployeeOtpInput;
