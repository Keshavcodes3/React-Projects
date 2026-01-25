import React from "react";
import assets from "../../assets/assets";

import { useTheme } from "../Contexts/Context";

const Card = ({ image, title, desc }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-2xl sm:w-60 lg:w-80 w-full p-5 flex flex-col shadow-xl transition duration-200 cursor-pointer hover:scale-105
      ${
        theme === "light"
          ? "bg-white"
          : "bg-gray-900 shadow-blue-500/10"
      }`}
    >
      <div className="w-full overflow-hidden rounded-xl">
        <img src={image} alt={title} className="w-full" />
      </div>

      <h1
        className={`text-2xl font-semibold mt-4 ${
          theme === "light" ? "text-gray-700" : "text-white"
        }`}
      >
        {title}
      </h1>

      <p
        className={`text-lg mt-2 ${
          theme === "light" ? "text-gray-500" : "text-gray-400"
        }`}
      >
        {desc}
      </p>
    </div>
  );
};



const LatestWork = () => {
  const { theme } = useTheme();

  const Datas = [
    {
      image: assets.work_mobile_app,
      title: "Mobile app marketing",
      desc: "We turn bold ideas into powerful digital solutions that connect, engage...",
    },
    {
      image: assets.work_fitness_app,
      title: "Dashboard management",
      desc: "We help you execute your plan and deliver results.",
    },
    {
      image: assets.work_dashboard_management,
      title: "Fitness app promotion",
      desc: "We help you create a marketing strategy that drives results..",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full flex items-center flex-col pt-20 transition-all
      ${
        theme === "light"
          ? "bg-white"
          : "bg-gray-950"
      }`}
    >
      <h2 className="text-5xl font-semibold bg-linear-to-r from-violet-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
        Our Work
      </h2>

      <p
        className={`text-xl font-bold max-w-xl mx-auto text-center mt-2
        ${
          theme === "light" ? "text-gray-600" : "text-gray-400"
        }`}
      >
        From strategy to execution, we craft digital solutions that move your
        business forward.
      </p>

      <div className="w-full mx-auto flex justify-center flex-wrap gap-6 p-5">
        {Datas.map((val, i) => (
          <Card key={i} image={val.image} title={val.title} desc={val.desc} />
        ))}
      </div>
    </div>
  );
};

export default LatestWork