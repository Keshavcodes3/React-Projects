import React from "react";
import HomePage from "./Hero/HomePage";
import Services from "./Services/Services";
import LatestWork from "./LatestWork/LatestWork";
import Partners from "./Partners/partners";
import ContactUS from "./ContactUS/ContactUS";
import { useTheme } from "./Contexts/Context";


const Final = () => {
  const { theme, _ } = useTheme();

  return (
    <div
      className={`min-h-screen w-full transition-all duration-500
      ${
        theme === "light"
          ? "bg-linear-to-br from-purple-100 via-white to-blue-100 text-gray-800"
          : "bg-linear-to-br from-gray-950 via-gray-900 to-black text-gray-100"
      }`}
    >
      <HomePage />
      <Partners />
      <Services />
      <LatestWork />
      <ContactUS />
    </div>
  );
};

export default Final;
