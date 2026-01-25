import React, { useState } from "react";
import assets from "../../assets/assets";
import { Contact, Logs, MoonStar, Sun } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../Contexts/Context";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSmall, setisSmall] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`w-full fixed z-50 h-fit px-5 sm:px-12 lg:px-14 xl:px-40 flex justify-between items-center py-4 transition-all
      ${
        theme === "light"
          ? "bg-white text-gray-700 shadow-sm"
          : "bg-gray-900 text-gray-100 shadow-lg"
      }`}
    >
      {/* Logo */}
      <NavLink to={"/"}>
        <img src={assets.logo} alt="logo" className="h-8" />
      </NavLink>

      {/* Desktop Links */}
      <div className="hidden sm:flex gap-x-6 text-md font-semibold">
        <NavLink
          to="/"
          className={`transition hover:text-blue-400 ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          Home
        </NavLink>

        <NavLink
          to="/Services"
          className={`transition hover:text-blue-400 ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          Services
        </NavLink>

        <NavLink
          to="/LatestWork"
          className={`transition hover:text-blue-400 ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          Our Work
        </NavLink>

        <NavLink
          onClick={() => {
            navigate("/");
          }}
          to="/contact"
          className={`transition hover:text-blue-400 ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          Contact Us
        </NavLink>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-x-5">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`hidden lg:block p-2 rounded-full border transition
          ${
            theme === "light"
              ? "border-gray-800 hover:bg-gray-100"
              : "border-gray-600 hover:bg-gray-800"
          }`}
        >
          {theme === "light" ? <MoonStar size={18} /> : <Sun size={18} />}
        </button>

        {/* Connect Button */}
        <button className="hidden lg:flex items-center gap-x-2 py-1.5 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition shadow-md">
          <span className="text-lg font-semibold">Connect</span>
          <img src={assets.arrow_icon} className="h-6" />
        </button>
      </div>

      {/* Mobile Buttons */}
      <div className="block sm:hidden">
        <div className="flex gap-x-4 items-center">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border
            ${
              theme === "light"
                ? "border-gray-800"
                : "border-gray-600 text-white"
            }`}
          >
            {theme === "light" ? <MoonStar size={18} /> : <Sun size={18} />}
          </button>

          <button onClick={() => setisSmall(!isSmall)}>
            <Logs />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSmall && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm sm:hidden">
          <div
            className={`fixed top-0 right-0 h-full w-72 px-6 py-8 flex flex-col shadow-2xl transition-transform
            ${
              theme === "light"
                ? "bg-white text-gray-800"
                : "bg-gray-900 text-gray-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <NavLink
                to={"/"}
                onClick={() => {
                  setisSmall(false);
                }}
              >
                <img src={assets.logo} alt="logo" className="h-8" />
              </NavLink>
              <button
                onClick={() => setisSmall(false)}
                className="text-2xl hover:text-red-400 transition"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            {isSmall && (
              <nav className="flex flex-col gap-4 font-medium">
                {["Services", "LatestWork", "Team", "contact"].map((item) => (
                  <NavLink
                    key={item}
                    to={`/${item}`}
                    onClick={() => setisSmall(false)}
                    className="hover:text-blue-400 transition"
                  >
                    {item}
                  </NavLink>
                ))}
              </nav>
            )}

            {/* Bottom Button */}
            <div className="mt-auto">
              <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold shadow-lg transition">
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
