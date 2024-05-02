"use client";
import EmployeeWrapperComp from "@/app/components/Employee-Wrapper";
import EmployeeActiveBar from "@/app/components/EmployeeActiveBar";
import AboutMe from "@/app/pages/AboutMe";
import React, { useState } from "react";

const Education = () => {
  const [activePage, setActivePage] = useState(1);

  console.log(activePage);

  return (
    <>
      <EmployeeWrapperComp>
        <div className="">
          <EmployeeActiveBar
            activePage={activePage}
            setActivePage={setActivePage}
          >
            {activePage}
          </EmployeeActiveBar>
        </div>
      </EmployeeWrapperComp>
    </>
  );
};

export default Education;
