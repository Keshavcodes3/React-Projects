import React from "react";
import assets from "../../assets/assets";
import HomeImage from "./HomeImage";
import Navbar from "./Navbar";


const HomePage = () => {


  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen  flex flex-col  items-center py-30`}
      >
        <div
          className={`flex items-center border-2 border-gray-400 rounded-full py-2 px-4 `}
        >
          <img src={assets.group_profile} alt="" className="h-7" />
          <p className="">Trusted by 10k+ people</p>
        </div>
        <div className="mt-10 max-w-6xl pxP-5">
          <h1 className="text-3xl xl:text-[84px] text-gray-600 font-medium text-center">
            Turning imagination into{" "}
            <span className="bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
              digital
            </span>{" "}
            impact.
          </h1>
          <p className="max-w-sm text-md mt-2 sm:text-2xl lg:text-3xl sm:ml-[15%] xl:max-w-2xl text-center text-gray-600 xl:ml-[20%] font-medium">
            Creating meaningful connections and turning big ideas into
            interactive digital experiences.
          </p>
        </div>
        <div className="mt-3">
          <HomeImage />
        </div>
      </div>
    </>
  );
};

export default HomePage;
