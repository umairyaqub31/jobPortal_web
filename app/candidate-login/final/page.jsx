"use client";

import { GetUserInfo } from "@/app/actions";
import add from "@/public/assets/add.svg";
import upload from "@/public/assets/upload.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { candidateRegister, uploadFile } from "@/app/services";
import { setAuthToken, setIsLoggedIn, setUser } from "@/app/redux";
import { useRouter } from "next/navigation";

const FInalPageComp = () => {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const { candidateProfile } = useSelector((state) => state.root.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  console.log(
    "Final Page Uploac Profile Photo page............",
    candidateProfile
  );
  const [formData, setFormData] = useState({
    userAbout: "",
    userAge: "",
    userLanguage: "English",
    userPic: null,
  });
  const [profileimage, setProfileImage] = useState();
  const [error, setError] = useState("");
  useEffect(() => {
    GetUserInfo(formData);
  }, [formData]);

  const fileUpload = async () => {
    const data = new FormData();

    await data.append("file", image);

    uploadFile(data)
      .then((res) => {
        console.log("...Profile Image", res);
        setProfileImage(res?.data?.fileUrl);
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

  const APIHIT = (values) => {
    let currentData = Formik.values;

    console.log(">.....................", values);
    let params = {
      phone: "03008863443",
      fullName: candidateProfile.firstName,
      gender: candidateProfile.gender,
      email: candidateProfile.email,
      DOB: candidateProfile.DOB,
      city: candidateProfile.city,
      locality: candidateProfile.locality,
      school: candidateProfile.school,
      degree: candidateProfile.degree,
      grade: candidateProfile.grade,
      fieldOfStudy: candidateProfile.fieldofStudy,
      startDate: candidateProfile.startDateMonth,
      endDate: candidateProfile.endDateMonth,
      experienceLevel: candidateProfile.ExperienceLevel,
      skills: ["JavaScript", "Node.js", "React"],
      experience: candidateProfile.yearsofExperience,
      jobDetails: [
        {
          role: "Software Engineer",
          startDate: "2014-07-01",
          currentlyWorking: true,
          employeeType: "Full-time",
        },
      ],
      prefferedRole: candidateProfile.jobPreferences,
      jobPreferences: candidateProfile.jobPreferences,
      CV: candidateProfile.CVLink,
      profilePicture: profileimage,
      about: values.aboutUs,
      age: values.age,
      languages: [values.language],
    };
    candidateRegister(params)
      .then((res) => {
        console.log("res.....", res);
        dispatch(setAuthToken(res.data.token));
        dispatch(setUser(res?.data?.user));
        dispatch(setIsLoggedIn(true));
        router.push("/");
      })
      .catch((err) => {
        console.log("errorr.....", err?.response?.data);
        alert(err?.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-auto min-h-screen bgImage px-[10%] py-[5%]">
        <div className="max-w-[533px] w-auto min-h-[667px] h-auto bg-white drop-shadow-md rounded-3xl md:p-8 p-4 gap-8 flex flex-col flex-none justify-start items-start">
          <h1 className="w-full h-auto lg:text-xl text-lg font-bold text-[#393A44]">
            {`Provide The Following Info To Proceed Further`}
          </h1>
          <Formik
            initialValues={{
              // upload: "",
              aboutUs: "",
              age: "",
              language: "",
            }}
            validationSchema={Yup.object({
              // upload: Yup.string().required("Required"),
              aboutUs: Yup.string()
                .min(3, "Minimum 3 Characters")
                .required("Required"),
              age: Yup.string()
                .min(2, "Minimum 2 numbers")
                .required("Required"),
              language: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              // Your form submission logic here
              console.log("Form Submitted");
              // dispatch(setCandidateProfile({ ...candidateProfile, ...values }));
              console.log(values);
              APIHIT(values);
              setSubmitting(false);
              setFormSubmitted(true);
            }}
          >
            <Form>
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
                      onChange={(e) => setImage(e.target.files[0])}
                      // onChange={(e) => {
                      //   const file = e.target.files[0];
                      //   const imageUrl = URL.createObjectURL(file);

                      //   setImage(imageUrl);
                      // }}
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

                  {/* <ErrorMessage
                    name="upload"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  /> */}
                  <p className="w-auto flex flex-nowrap text-[#0076FC] text-xs font-normal">{`Upload Profile Photo`}</p>
                </div>
              </div>

              <div className="w-full h-auto ">
                <Field
                  name="aboutUs"
                  id="aboutUs"
                  cols="30"
                  rows="5"
                  placeholder="About Us"
                  className="w-full p-4 border border-gray-300 rounded-lg outline-none"
                ></Field>
                <ErrorMessage
                  name="aboutUs"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="flex flex-col w-full h-auto space-y-2">
                <label htmlFor="Age" className="text-sm font-semibold">
                  Age
                </label>
                <Field
                  id="age"
                  name="age"
                  type="text"
                  placeholder="Enter Your Age"
                  className="rounded-xl border outline-none w-[35%] h-[44px] p-4"
                />
              </div>
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 text-xs mt-1"
              />

              <div className="col-span-6 gap-2">
                <label
                  htmlFor="skill"
                  className="block py-2 text-sm font-semibold text-[#434343]"
                >
                  What Are The Languages Do You Know?
                </label>
                {/* <button className="text-[#0076FC] text-sm font-medium flex justify-center items-center h-11 gap-2 border-[#3F6EEC] border-2 rounded-full py-3 px-4">
                  <Image src={add} alt="" />
                  <span className="text-[#3F6EEC] text-sm font-semibold">
                    Add Language
                  </span>
                </button> */}
                <Field
                  as="select"
                  name="language"
                  className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                >
                  <option value="">Select Langauge</option>
                  <option value="Engish">Engish</option>
                  <option value="Urdu">Urdu</option>
                  <option value="Hindi">Hindi</option>
                </Field>
                <ErrorMessage
                  name="language"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="w-full h-auto">
                {/* <Link href="/profile-info"> */}
                <button
                  type="submit"
                  className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white"
                >
                  Next
                </button>
                {/* </Link> */}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default FInalPageComp;
