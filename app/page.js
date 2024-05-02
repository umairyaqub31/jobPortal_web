import DownloadAppComp from "@/app/components/Download-App";
import HeadBarComp from "@/app/components/Headbar";
import HeroComp from "@/app/components/Hero-Home";
import JobOpeningComp from "@/app/components/Job-Opening";
import JobStepsComp from "@/app/components/Job-Steps";
import OurClientComp from "@/app/components/Our-Client";
import TradingJobsComp from "@/app/components/Trading-Jobs";
import SliderComp from "@/app/components/sliderComp";

export default function Home() {
  return (
    <>
      {/* main container */}
      <div className="w-full h-auto min-h-screen bg-white">
        <HeadBarComp visible={true} isLoggedIn={false} jobs={true} />
        <HeroComp />
        <JobStepsComp />
        <JobOpeningComp />
        <TradingJobsComp />
        <OurClientComp />
        <DownloadAppComp />
        {/* <FooterComp /> */}
      </div>
    </>
  );
}
