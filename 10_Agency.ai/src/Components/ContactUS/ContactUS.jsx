import React, { useState } from "react";
import { useTheme } from "../Contexts/Context";

const ContactUS = () => {
  const { theme, togglethme } = useTheme();

  const [Data, setData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className={`w-full min-h-screen flex items-center justify-center px-6 transition-all duration-500
      ${
        theme === "light"
          ? "bg-linear-to-br from-gray-50 to-gray-100"
          : "bg-linear-to-br from-gray-900 to-black"
      }`}
    >
      <div
        className={`max-w-6xl w-full grid md:grid-cols-2 gap-16 rounded-3xl p-12 shadow-2xl transition-all
        ${
          theme === "light"
            ? "bg-white text-gray-800"
            : "bg-gray-900 text-gray-100"
        }`}
      >
        {/* Left Section */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-4xl font-extrabold leading-tight">
            Let’s build something{" "}
            <span className="text-indigo-500">amazing</span> together
          </h2>

          <p
            className={`text-lg ${
              theme === "light" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            From strategy to execution, we help brands grow through design,
            technology and digital experiences that actually convert.
          </p>

          <div
            className={`flex flex-col gap-4 mt-4 ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {[
              ["📍", "India"],
              ["📧", "support@yourcompany.com"],
              ["📞", "+91 98765 43210"],
            ].map(([icon, text], i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                  {icon}
                </span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Form) */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input theme={theme} name="Name" value={Data.Name} onChange={ChangeHandler} placeholder="Your Name" />
            <input theme={theme} name="Email" value={Data.Email} onChange={ChangeHandler} placeholder="Your Email" />
          </div>

          <input theme={theme} name="Subject" value={Data.Subject} onChange={ChangeHandler} placeholder="Subject" />

          <textarea
            rows="6"
            name="Message"
            value={Data.Message}
            onChange={ChangeHandler}
            placeholder="Your Message"
            className={`w-full px-5 py-4 rounded-xl resize-none transition-all
            ${
              theme === "light"
                ? "bg-white border border-gray-300 text-gray-800 focus:ring-indigo-500"
                : "bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-indigo-400"
            } focus:outline-none focus:ring-2`}
          />

          <button
            onClick={() =>
              setData({
                Name: "",
                Email: "",
                Subject: "",
                Message: "",
              })
            }
            className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={togglethme}
            className="mt-4 text-sm text-indigo-400 hover:text-indigo-300 self-end"
          >
            Toggle {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUS;
