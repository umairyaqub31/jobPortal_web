"use client";

import { GetAboutData } from "@/app/actions";
import add from "@/public/assets/add.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import upload from "@/public/assets/upload.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../services";
import {
  setAuthToken,
  setEmployeeProfile,
  setIsLoggedIn,
  setUser,
} from "../redux";
import { useRouter } from "next/navigation";

const EmployeeCompanyDetailsComp = (props) => {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const { employeeProfile, phoneNumber } = useSelector(
    (state) => state.root.user
  );
  console.log("..............", employeeProfile);
  const { formData, setFormData } = props;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [logoimage, setLogoImage] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fileUpload = async () => {
    const data = new FormData();

    await data.append("file", image);

    uploadFile(data)
      .then((res) => {
        console.log("...Profile Image", res);
        setLogoImage(res?.data?.fileUrl);
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

  const ApiHit = (values) => {
    console.log(">..................", values);
    let params = {
      email: employeeProfile.email,
      phone: phoneNumber,
      fullName: employeeProfile.fullName,
      company: {
        companyRole: employeeProfile.companyRole,
        consultancyName: employeeProfile.consultancyName,
        workingAs: employeeProfile.workingAs,

        email: values.consultancyEmailId,
        webUrl: values.consultancyURL,
        about: values.aboutConsultancy,
        size: values.consultancySize,
        city: values.city,
        locality: values.locality,
        // logo: "String",
      },
    };
    register(params)
      .then((res) => {
        setLoading(true);
        console.log("res.....", res);
        dispatch(setAuthToken(res.data.token));
        dispatch(setUser(res?.data?.user));
        dispatch(setIsLoggedIn(true));
        router.push("/employee-login/employee-jobs");
        dispatch(setEmployeeProfile({}));
      })
      .catch((err) => {
        console.log("errorr.....", err?.response?.data);
        alert(err?.message);
      })
      .finally(() => setLoading(false));
  };
  return (
    <Formik
      initialValues={{
        consultancyEmailId: "",
        consultancyURL: "",
        aboutConsultancy: "",
        consultancySize: "",
        city: "",
        locality: "",
      }}
      validationSchema={Yup.object({
        consultancyEmailId: Yup.string()
          .email("Invalid email address")
          .required("Required"),
        consultancyURL: Yup.string()
          .min(3, "Minimum 3 Characters")
          .required("Required"),
        aboutConsultancy: Yup.string()
          .min(3, "Minimum 3 Characters")
          .required("Required"),
        consultancySize: Yup.string().required("Required"),
        city: Yup.string().min(3, "Minimum 3 Characters").required("Required"),
        locality: Yup.string()
          .min(3, "Minimum 3 Characters")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // Your form submission logic here
        console.log("Form Submitted");
        console.log(values);
        ApiHit(values);
        setSubmitting(false);
        setFormSubmitted(true);
      }}
    >
      {(formik) => (
        <div className="lg:min-w-[45vw] min-w-[60vw] w-full h-auto min-h-[80vh] py-2">
          <div className="w-full space-y-2 lg:space-y-8">
            <div className="flex items-center justify-center w-full h-auto text-center">
              <h1 className="font-bold text-xl text-[#000000] ">
                Provide The Following Data About Your Company
              </h1>
            </div>
            <Form className="grid grid-cols-6 lg:gap-6 gap-2 text-[#434343] text-sm">
              <div className="col-span-6 space-y-2 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block py-1 text-sm font-semibold"
                >
                  Consultancy E-mail Id
                </label>
                <Field
                  type="text"
                  placeholder="Enter Consultancy E-mail Id"
                  name="consultancyEmailId"
                  id="consultancyEmailId"
                  className="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                />
                <ErrorMessage
                  name="consultancyEmailId"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="col-span-6 space-y-2 sm:col-span-3">
                <label
                  htmlFor="emial"
                  className="block py-1 text-sm font-semibold"
                >
                  Consultancy URL
                </label>
                <Field
                  type="text"
                  name="consultancyURL"
                  id="consultancyURL"
                  placeholder="Enter Consultancy URL"
                  class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                />
                <ErrorMessage
                  name="consultancyURL"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div class="col-span-6 space-y-2">
                <label
                  htmlFor="about consultancy"
                  class="block text-sm font-semibold py-1"
                >
                  About Consultancy
                </label>
                <Field
                  type="text"
                  id="aboutConsultancy"
                  name="aboutConsultancy"
                  placeholder="Enter About Consultancy"
                  class="w-full h-14 rounded-lg border outline-none px-4 py-3 bg-white text-sm text-[#949494] shadow-sm"
                />
                <ErrorMessage
                  name="aboutConsultancy"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div class="col-span-6 space-y-2">
                <label
                  htmlFor="companyType"
                  class="block text-sm font-semibold py-1"
                >
                  Consultancy Size
                </label>
                <Field
                  as="select"
                  name="consultancySize"
                  className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                >
                  <ErrorMessage
                    name="consultancySize"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                  <option value="">Select Role</option>
                  <option value="1-100">1-100</option>
                  <option value="100-10000">100-10000</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name="consultancySize"
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

              <div class="col-span-6 space-y-2">
                <label
                  htmlFor="PasswordConfirmation"
                  class="block text-sm font-semibold py-1"
                >
                  Locality
                </label>
                <Field
                  type="text"
                  id="locality"
                  name="locality"
                  placeholder="Enter Locality"
                  class="w-full h-14 rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
                />
                <ErrorMessage
                  name="locality"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
                <button className="text-[#0076FC] text-sm flex items-center py-1 gap-1">
                  Add Locality
                </button>
              </div>

              <div class="col-span-6 space-y-2">
                <div className="flex flex-col items-center justify-center w-full h-auto duration-300">
                  <label
                    htmlFor="upload"
                    className={`md:w-[240px] w-full bg-white border border-[#3F6EEC] h-[44px] gap-2 relative cursor-pointer rounded-full text-[#3F6EEC] justify-center flex items-center px-4 py-[10px]`}
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
                      className={` w-4 h-4 `}
                    />

                    <span className="text-sm font-semibold">
                      Upload Consultancy Logo
                    </span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white"
              >
                Next
              </button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default EmployeeCompanyDetailsComp;
