import React from "react";
import assets from "../../assets/assets";
import { useTheme } from "../Contexts/Context";
const HomeImage = () => {
  const { theme, _ } = useTheme();
  return (
    <div className="max-w-6xl mx-auto mt-5 z-0">
      {theme == "light" && (
        <div className="absolute top-50 right-10 xl:top-50 xl:left-130">
          <img src={assets.bgImage1} alt="" className="" />
        </div>
      )}
      <img src={assets.hero_img} alt="" className="rounded-4xl relative z-0" />
    </div>
  );
};

export default HomeImage;
