import React from "react";
import assets from "../../assets/assets";
import { useTheme } from "../Contexts/Context";
const ServiceImg = () => {
  const { theme, _ } = useTheme();
  return (
    <div className="max-w-6xl mx-auto mt-5 z-0">
      {theme == "light" && (
        <div className="absolute ">
          <img src={assets.bgImage2} alt="" className="h-120 w-608 left-10" />
        </div>
      )}
    </div>
  );
};

export default ServiceImg;
