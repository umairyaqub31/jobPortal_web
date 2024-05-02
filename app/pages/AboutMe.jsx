"use client";

import { useState } from "react";
import ActiveBar from "@/app/components/ActiveBar";
import HomeWrapper from "@/app/components/Home-Wrapper";

const AboutMe = () => {
  const [activePage, setActivePage] = useState(1);

  console.log(activePage);

  return (
    <>
      <ActiveBar activePage={activePage} setActivePage={setActivePage}>
        {activePage}
      </ActiveBar>
    </>
  );
};

export default AboutMe;
