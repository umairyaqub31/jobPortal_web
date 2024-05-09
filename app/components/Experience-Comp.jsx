"use client";

import { GetAboutData } from "@/app/actions";
import add from "@/public/assets/add.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Experience = (props) => {
  const { formData, setFormData } = props;

  useEffect(() => {
    GetAboutData(formData);
  }, [formData]);

  return (
    <Formik
      initialValues={{
        firstName: "",
        gender: "",
        email: "",
        DOB: "",
        city: "",
        locality: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(3, "Minimum 3 Characters")
          .required("Required"),
        gender: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        DOB: Yup.string().min(3, "Minimum 3 Characters").required("Required"),

        city: Yup.string().min(3, "Minimum 3 Characters").required("Required"),
        locality: Yup.string()
          .min(3, "Minimum 3 Characters")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // Your form submission logic here
        console.log("Form Submitted");
        console.log(values);
        setSubmitting(false);
        setFormSubmitted(true);
      }}
    >
      {(formik) => (
        <div className="w-full py-2">
          <div className="w-full space-y-2 lg:space-y-8">
            <div className="">
              <h1 className="font-bold text-xl text-[#000000] ">About us</h1>
            </div>
            <Form className="grid grid-cols-6 lg:gap-6 gap-2 text-[#434343] text-sm">
              <div className="col-span-6 space-y-2 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block py-1 text-sm font-semibold"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  placeholder="Enter First Name"
                  id="firstName"
                  name="firstName"
                  className=" w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="col-span-6 space-y-2 sm:col-span-3">
                <label
                  htmlFor="gender"
                  className="block py-1 text-sm font-semibold"
                >
                  Gender
                </label>
                <Field
                  as="select"
                  name="gender"
                  className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="col-span-3 space-y-2">
                <label
                  htmlFor="Email"
                  className="block py-1 text-sm font-semibold "
                >
                  {" "}
                  Email{" "}
                </label>
                <Field
                  type="email"
                  placeholder="Add E-mail Address"
                  id="email"
                  name="email"
                  class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div class="col-span-3 sm:col-span-3 space-y-2">
                <label
                  htmlFor="Password"
                  class="block text-sm py-1 font-semibold"
                >
                  {" "}
                  Date of Birth{" "}
                </label>
                <Field
                  type="text"
                  placeholder="00/00/0000"
                  id="DOB"
                  name="DOB"
                  class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                />
                <ErrorMessage
                  name="DOB"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div class="col-span-6 space-y-2">
                <label
                  htmlFor="PasswordConfirmation"
                  class="block text-sm font-semibold py-1"
                >
                  City
                </label>
                <Field
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter City Name"
                  class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
                <button className="text-[#0076FC] text-sm flex items-center py-1 gap-1">
                  <Image src={add} alt="" /> Add City
                </button>
              </div>
              <div className="col-span-6 space-y-2">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block py-1 text-sm font-semibold "
                >
                  Locality
                </label>
                <Field
                  type="text"
                  id="locality"
                  name="locality"
                  placeholder="Enter Locality"
                  className="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                />
                <ErrorMessage
                  name="locality"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
                <button className="text-[#0076FC] text-sm flex items-center py-1 gap-1">
                  <Image src={add} alt="" /> Add City
                </button>
              </div>
              {/* <div class="col-span-6">
            <Link href="/education">
              {" "}
              <button
                // onClick={handlePageClick}
                className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white"
              >
                Next
              </button>
            </Link>
          </div> */}
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Experience;
