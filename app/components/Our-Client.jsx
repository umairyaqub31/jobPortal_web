//! imports

//! local imports
import { SliderCardData } from "@/lib/data";
import ClientCardComp from "./Client-Card";

const OurClientComp = () => {
  return (
    <>
      {/* main component  */}

      <div className="w-full min-h-[80vh] h-auto bg-white flex justify-center items-center flex-col text-center gap-8">
        {/* quote  */}
        <div className="px-4 space-y-2">
          <h1 className="w-full h-auto md:text-[36px] text-[20px] font-bold">{`Our Clients Speak`}</h1>
          <h1 className="text-[#909198] w-full h-auto text-[14px] font-normal">{`We have been working with clients around the world`}</h1>

          {/* slider  */}
        </div>
        <ClientCardComp data={SliderCardData} />

        {/* button */}
        {/* <Link href={"/"} passHref>
          <button className="border border-[#3F6EEC] text-[#3F6EEC] py-[17px] px-[24px] w-auto h-auto flex justify-center items-center text-center rounded-full text-sm font-semibold">
            {`View All Components`}
          </button>
        </Link> */}
      </div>
    </>
  );
};

export default OurClientComp;
