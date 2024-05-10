import { GetAboutData } from "@/app/actions";
import add from "@/public/assets/add.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Loader from "./loader";
import { setEmployeeProfile } from "../redux";
import { useDispatch } from "react-redux";

const ProvideDataComp = (props) => {
  const dispatch = useDispatch();
  const { formData, setFormData, handlePageNext } = props;
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        companyRole: "",
        consultancyName: "",
        workingAs: "",
      }}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .min(3, "Minimum 3 Characters")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        companyRole: Yup.string().required("Required"),
        consultancyName: Yup.string()
          .min(3, "Minimum 3 Characters")
          .required("Required"),
        workingAs: Yup.string()
          .min(3, "Minimum 3 Characters")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.timeLog(">............");
        handlePageNext();
        dispatch(setEmployeeProfile(values));

        console.log("Form Submitted");
        console.log(values);
        setSubmitting(false);
        setFormSubmitted(true);
      }}
    >
      <div className="lg:min-w-[45vw] min-w-[60vw] grow w-full h-auto min-h-[80vh] py-2">
        <div className="w-full space-y-2 lg:space-y-8">
          <div className="">
            <h1 className="font-bold text-xl text-[#000000]">
              Provide The Following Data About Yourself
            </h1>
          </div>
          <Form>
            <div className="grid grid-cols-6 lg:gap-6 gap-2 text-[#434343] text-sm">
              <div className="col-span-6 space-y-2 sm:col-span-3">
                <label
                  htmlFor="fullName"
                  className="block py-1 text-sm font-semibold"
                >
                  Full Name
                </label>
                <Field
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Enter Full Name"
                  className="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="col-span-6 space-y-2 sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block py-1 text-sm font-semibold"
                >
                  E-Mail Address
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                  className="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="col-span-6 space-y-2">
                <label
                  htmlFor="companyRole"
                  className="block text-sm font-semibold py-1"
                >
                  Company Type
                </label>
                <Field
                  as="select"
                  name="companyRole"
                  className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                >
                  <option value="">Select Role</option>
                  <option value="Manager">Manager</option>
                  <option value="Other">Other</option>
                </Field>
                <ErrorMessage
                  name="companyRole"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="col-span-3 space-y-2">
                <label
                  htmlFor="consultancyName"
                  className="block py-1 text-sm font-semibold"
                >
                  Consultancy Name
                </label>
                <Field
                  type="text"
                  name="consultancyName"
                  id="consultancyName"
                  placeholder="Consultancy Name"
                  className="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                />
                <ErrorMessage
                  name="consultancyName"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="col-span-3 sm:col-span-3 space-y-2">
                <label
                  htmlFor="workingAs"
                  className="block text-sm py-1 font-semibold"
                >
                  Working As
                </label>
                <Field
                  type="text"
                  name="workingAs"
                  id="workingAs"
                  placeholder="Working As"
                  className="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                />
                <ErrorMessage
                  name="workingAs"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <button
                type="submit"
                className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white"
              >
                Next
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default ProvideDataComp;
