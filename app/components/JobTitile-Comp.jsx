"use client";

import { GetAllValues, GetJobExperienceData } from "@/app/actions";
// !imports
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setCandidateProfile } from "../redux";

// ! icons imports

const JobTitileComp = (props) => {
  const dispatch = useDispatch();
  const { candidateProfile } = useSelector((state) => state.root.user);
  console.log("Job Title............", candidateProfile);
  const { formData, setFormData, handlePageNext } = props;
  const [dialog, setDialog] = useState(true);
  // const [formData, setFormData] = useState({
  //   jobRole: "",
  //   jobStartingMonth: "",
  //   jobStartingYear: "",
  //   currentJobStartingYear: "",
  //   currentJobStartingMonth: "",
  //   employeeType: "",
  //   jobTitle: "",
  //   jobPreferences: "",
  // });

  useEffect(() => {
    const getData = async () => {
      const data = await GetAllValues();
      console.log(data);
      if (data) {
        if (data.experienceLevel === "fresher") {
          setDialog(false);
        } else {
          setDialog(true);
        }
      }
    };

    getData();
  }, []);

  useEffect(() => {
    GetJobExperienceData(formData);
  }, [formData]);

  return (
    <>
      <div className="w-full min-h-[70vh] h-auto flex flex-col justify-start items-center text-[#434343] gap-6 lg:py-8 py-4 lg:px-14 px-4 duration-300">
        <Formik
          initialValues={{
            yearsofExperience: "",
            jobPreferences: "",
          }}
          validationSchema={Yup.object({
            yearsofExperience: Yup.string().required("Required"),

            jobPreferences: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // Your form submission logic here
            console.log("Form Submitted");
            dispatch(setCandidateProfile({ ...candidateProfile, ...values }));
            console.log(values);
            handlePageNext();
            setSubmitting(false);
            setFormSubmitted(true);
          }}
        >
          <Form>
            <div className="flex flex-col items-start justify-center w-full h-auto space-y-2 lg:lg:space-y-4">
              <label
                htmlFor="Role"
                className="block py-1 text-sm font-semibold"
              >
                Preferred Job Title/Role
              </label>
              <Field
                name="yearsofExperience"
                as="select"
                className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              >
                <ErrorMessage
                  name="yearsofExperience"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
                <option value="">Select</option>
                <option value="1">1 year</option>
                <option value="2">2 year</option>
                <option value="3">3 year</option>
                <option value="4">4 year</option>
                <option value="5">5 year</option>
                <option value="6">6 year</option>
              </Field>
              <ErrorMessage
                name="yearsofExperience"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-full h-auto space-y-2 lg:lg:space-y-4">
              <label
                htmlFor="Role"
                className="block py-1 text-sm font-semibold"
              >
                Job Preferences
              </label>
              <Field
                name="jobPreferences"
                as="select"
                className="h-14 w-full rounded-lg border outline-none px-4 bg-white text-sm text-[#949494] shadow-sm"
              >
                <ErrorMessage
                  name="jobPreferences"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
                <option value="">Select</option>
                <option value="1">1 year</option>
                <option value="2">2 year</option>
                <option value="3">3 year</option>
                <option value="4">4 year</option>
                <option value="5">5 year</option>
                <option value="6">6 year</option>
              </Field>
              <ErrorMessage
                name="jobPreferences"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div class="col-span-6">
              {" "}
              <button
                // onClick={handlePageClick}
                className="text-center shadow-md bg-[#0076FC] shadow-blue-200 rounded-full w-full py-2 text-white"
              >
                Next
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default JobTitileComp;
