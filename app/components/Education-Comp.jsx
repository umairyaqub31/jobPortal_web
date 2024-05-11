"use client";

import { GetEducationData } from "@/app/actions/index.js";
import React, { useState, useEffect } from "react";
import { generateYearsData } from "../services/constants";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setCandidateProfile } from "../redux";
// import add from "@/public/assets/add.svg";
// import Image from "next/image";

const months = [
  {
    title: "January",
    value: "January",
  },
  {
    title: "February",
    value: "February",
  },
  {
    title: "March",
    value: "March",
  },
  {
    title: "April",
    value: "April",
  },
  {
    title: "May",
    value: "May",
  },
  {
    title: "June",
    value: "June",
  },
  {
    title: "July",
    value: "July",
  },
  {
    title: "August",
    value: "August",
  },
  {
    title: "September",
    value: "September",
  },
  {
    title: "October",
    value: "October",
  },
  {
    title: "November",
    value: "November",
  },
  {
    title: "December",
    value: "December",
  },
];
const EducationComp = (props) => {
  const dispatch = useDispatch();
  const { formData, setFormData, handlePageNext } = props;
  const { candidateProfile } = useSelector((state) => state.root.user);
  console.log("..............", candidateProfile);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    GetEducationData(formData);
  }, [formData]);

  return (
    <>
      <Formik
        initialValues={{
          school: "",
          degree: "",
          grade: "",
          fieldofStudy: "",
          startDateMonth: "",
          startDateYear: "",
          endDateMonth: "",
          endDateYear: "",
        }}
        validationSchema={Yup.object({
          school: Yup.string()
            .min(3, "Minimum 3 Characters")
            .required("Required"),
          degree: Yup.string()
            .min(3, "Minimum 3 Characters")
            .required("Required"),
          grade: Yup.string()
            .min(3, "Minimum 3 Characters")
            .required("Required"),
          fieldofStudy: Yup.string().required("Required"),
          startDateMonth: Yup.string().required("Required"),
          startDateYear: Yup.string().required("Required"),
          endDateMonth: Yup.string().required("Required"),
          endDateYear: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // Your form submission logic here
          console.log("Form Submitted");
          console.log(values);
          dispatch(setCandidateProfile({ ...candidateProfile, ...values }));

          handlePageNext();
          setSubmitting(false);
          setFormSubmitted(true);
        }}
      >
        <div className="flex flex-col items-start w-full h-auto gap-4">
          <h1 className="text-[#000000] font-bold text-xl">{`Education`}</h1>

          {/* inner container  */}
          <Form className="w-full">
            <div className="flex flex-col w-full h-auto gap-4">
              {/* container 1 */}
              <div className="w-full h-auto gap-2 p-4 bg-[#F8F8F8] rounded-3xl flex flex-col justify-center items-start">
                {/* school input */}
                <div className="w-full space-y-2">
                  <label
                    htmlFor="school"
                    className="block py-1 text-sm font-semibold"
                  >
                    School
                  </label>
                  <Field
                    type="text"
                    placeholder="Enter school name"
                    id="school"
                    name="school"
                    className=" w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                  />
                  <ErrorMessage
                    name="school"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                  <button className="text-[#0076FC] text-sm flex items-center py-1 gap-1">
                    Add School
                  </button>
                </div>

                {/* degree input */}
                <div className="w-full space-y-2">
                  <label
                    htmlFor="degree"
                    className="block py-1 text-sm font-semibold"
                  >
                    Degree
                  </label>
                  <Field
                    type="text"
                    placeholder="Enter degree title"
                    id="degree"
                    name="degree"
                    className=" w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                  />
                  <ErrorMessage
                    name="degree"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                  <button className="text-[#0076FC] text-sm flex items-center py-1 gap-1">
                    Add School
                  </button>
                </div>

                {/* grade & field of study  */}
                <div className="flex flex-col w-full gap-6 flex-nowrap lg:flex-row">
                  <div className="w-full space-y-2 lg:w-1/2">
                    <label
                      htmlFor="grade"
                      className="block py-1 text-sm font-semibold"
                    >
                      Grade
                    </label>
                    <Field
                      type="text"
                      placeholder="Enter Grdae"
                      id="grade"
                      name="grade"
                      className=" w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                    />
                    <ErrorMessage
                      name="grade"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  <div className="w-full space-y-2 lg:w-1/2">
                    <label
                      htmlFor="gender"
                      className="block py-1 text-sm font-semibold"
                    >
                      Field Of Study
                    </label>
                    <Field
                      as="select"
                      name="fieldofStudy"
                      className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                    >
                      <option value="">Select</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="other">Other</option>
                    </Field>
                    <ErrorMessage
                      name="fieldofStudy"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* container 2 */}
              <div className="w-full h-auto gap-2 p-4 bg-[#F8F8F8] rounded-3xl flex flex-col justify-center items-start">
                {/* start date  & end date  */}
                <div className="w-full h-auto space-y-2">
                  <label
                    htmlFor="Start Date"
                    className="block py-1 text-sm font-semibold"
                  >
                    Start Date
                  </label>
                  <div className="flex w-full h-auto gap-6 flex-nowrap">
                    <Field
                      name="startDateMonth"
                      as="select"
                      className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                    >
                      <option value="">Select Month</option>
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="Aug">Aug</option>
                      <option value="Sep">Sep</option>
                      <option value="Oct">Oct</option>
                      <option value="Nov">Nov</option>
                      <option value="Dec">Dec</option>
                    </Field>
                    <ErrorMessage
                      name="startDateMonth"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                    <Field
                      name="startDateYear"
                      as="select"
                      className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                    >
                      <ErrorMessage
                        name="startDateYear"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                      <option value="">Select Year</option>
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="Aug">Aug</option>
                      <option value="Sep">Sep</option>
                      <option value="Oct">Oct</option>
                      <option value="Nov">Nov</option>
                      <option value="Dec">Dec</option>
                    </Field>
                    <ErrorMessage
                      name="startDateYear"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>

                {/* start date  & end date  */}
                <div className="w-full h-auto space-y-2">
                  <label
                    htmlFor="Start Date"
                    className="block py-1 text-sm font-semibold"
                  >
                    End Date
                  </label>
                  <div className="flex w-full h-auto gap-6 flex-nowrap">
                    <Field
                      name="endDateMonth"
                      as="select"
                      className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                    >
                      <ErrorMessage
                        name="endDateMonth"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                      <option value="">Select Month</option>
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="Aug">Aug</option>
                      <option value="Sep">Sep</option>
                      <option value="Oct">Oct</option>
                      <option value="Nov">Nov</option>
                      <option value="Dec">Dec</option>
                    </Field>
                    <ErrorMessage
                      name="endDateMonth"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                    <Field
                      name="endDateYear"
                      as="select"
                      className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                    >
                      <ErrorMessage
                        name="endDateYear"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                      <option value="">Select Year</option>
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="Aug">Aug</option>
                      <option value="Sep">Sep</option>
                      <option value="Oct">Oct</option>
                      <option value="Nov">Nov</option>
                      <option value="Dec">Dec</option>
                    </Field>
                    <ErrorMessage
                      name="endDateYear"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-6">
              {" "}
              <button
                // onClick={handlePageClick}
                className="text-center mt-[40px] shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white"
              >
                Next
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default EducationComp;
