"use client";

import { GetPhoneNumber } from "@/app/actions";
import EmployeeWrapperComp from "@/app/components/Employee-Wrapper";
import EmployeeOtpPopup from "@/app/components/EmployeeOtpPopup";
import arrowleft from "@/public/assets/arrowleft.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { app } from "../firebaseConfig";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import Loader from "@/app/components/loader";
import { useRouter } from "next/navigation";
import { login } from "../services";
import { useDispatch } from "react-redux";
import { setAuthToken, setIsLoggedIn, setPhoneNumber, setUser } from "../redux";

const EmployeeLoginPage = () => {
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState("");
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const dispatch = useDispatch();

  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const router = useRouter();
  const auth = getAuth(app);

  const handleNextButtonClick = () => {
    if (!phone || phone === "") {
      setError(true);
    } else {
      setError(false);
      // console.log("Phone number before GetPhoneNumber:", phone);
      // GetPhoneNumber(phone);
      // setShowOTPModal(true);
      handleSendOTP();
    }
  };

  const handleCloseOTPModal = () => {
    setShowOTPModal(false);
  };

  const handleSendOTP = async () => {
    setLoading(true);

    try {
      const appVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
        size: "invisible",
      });
      // const formattedPhoneNumber = `+${phone.replace(/\D/g, "")}`;
      const formattedPhoneNumber = `+92${phone.replace(/\D/g, "")}`;

      const confirmation = await signInWithPhoneNumber(
        auth,
        formattedPhoneNumber,
        appVerifier
      );

      setConfirmationResult(confirmation);
      // setPhone("");
      // alert("OTP has been sent");
      setLoading(false);

      setShowOTPModal(true);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    let tempVal = otpValues.toString();
    var otp = parseFloat(tempVal.replace(/,/g, ""));
    setConfirmLoading(true);
    try {
      let result = await confirmationResult.confirm(otp);
      if (result) {
        const formattedPhoneNumber = `+92${phone.replace(/\D/g, "")}`;
        let params = {
          phone: formattedPhoneNumber,
        };

        login(params)
          .then((res) => {
            console.log("res........", res?.data);
            dispatch(setUser(res?.data?.user));
            dispatch(setIsLoggedIn(true));
            dispatch(setAuthToken(res?.data?.token));
            router.push("/employee-login/employee-jobs");

            setConfirmLoading(false);
            setOtpValues(["", "", "", "", "", ""]);
          })
          .catch((err) => {
            setShowOTPModal(false);
            // alert(err?.response?.data?.message);
            if (err?.response?.data?.message == "user not found") {
              router.push("/employee-login/info");
              dispatch(setPhoneNumber(formattedPhoneNumber));
            }
          })
          .finally(() => setConfirmLoading(false));
      }

      // result.UserCredentialImpl.user
    } catch (error) {
      console.error(error);
      setOtpValues(["", "", "", "", "", ""]);
      setConfirmLoading(false);
      alert("Invalid code");
    }
  };
  return (
    <>
      <EmployeeWrapperComp>
        <div className="w-full h-auto space-y-8">
          <div className="flex items-center w-full h-auto gap-1">
            <button className="bg-[#F7F8F8] p-2 rounded ">
              <Image src={arrowleft} alt="arrowleft" className="rounded-md" />
            </button>
            <h1 className="text-[#909198] font-semibold text-base">Go Back</h1>
          </div>

          <h1 className="font-bold lg:text-xl text-lg text-[#393A44]">
            Enter Your Mobile Number
          </h1>

          <div className="lg:max-w-[541px] w-auto h-[52px] ">
            <input
              type="text"
              className="w-full px-4 py-2 space-x-8 border outline-none rounded-xl lg:text-sm text-xs font-normal placeholder:text-[#909198]"
              placeholder="+91 - enter your 10 digit mobile number |"
              onChange={(e) => setPhone(e.target.value)}
            />
            <p
              className={`text-xs text-[#909198] ${
                error && "text-red-600"
              } font-normal py-2 px-3`}
            >
              {error
                ? "Please Enter Phone Number"
                : "You will receive an OTP on this number"}
            </p>
          </div>
        </div>

        {/* <div className="lg:max-w-[541px] w-full h-auto py-4"> */}
        <button
          id="sign-in-button"
          disabled={loading}
          onClick={handleNextButtonClick}
          className="text-center shadow-md h-[57px] bg-[#0076FC] shadow-blue-200 rounded-full outline-none text-sm font-semibold w-full  text-[#F8F8F8]"
        >
          {loading ? (
            <div className="flex items-center justify-center ">
              <Loader color={"#fff"} size="50" />
            </div>
          ) : (
            "Next"
          )}
        </button>
        {/* </div> */}
      </EmployeeWrapperComp>

      {/* OTP Modal */}
      {showOTPModal && (
        <div className="fixed top-0 left-0 min-w-full min-h-full bg-[#e3e3e3] md:px-0 px-8 bg-opacity-50 flex justify-center items-center duration-300">
          <EmployeeOtpPopup
            phone={phone}
            otpValues={otpValues}
            setOtpValues={setOtpValues}
            onClick={handleCloseOTPModal}
            onClose={handleCloseOTPModal}
            handleSubmit={handleOtpSubmit}
            loading={confirmLoading}
          />
        </div>
      )}
    </>
  );
};

export default EmployeeLoginPage;
