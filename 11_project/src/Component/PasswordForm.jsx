import React, { useState } from "react";

const PasswordForm = ({ onAdd }) => {
  const [formData, setformData] = useState({
    site: "",
    userName: "",
    password: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    onAdd(formData);
    setformData({ site: "", userName: "", password: "" });
  }

  function HandleChange(e) {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="flex justify-center items-center py-16">
      <form
        onSubmit={submitHandler}
        className="bg-gray-800 p-8 rounded-3xl shadow-xl w-96 flex flex-col gap-4"
      >
        <h2 className="text-white text-2xl font-bold text-center mb-4">
          Password Manager
        </h2>

        <input
          type="text"
          value={formData.site}
          name="site"
          required
          onChange={HandleChange}
          placeholder="Website Name"
          className="px-4 py-3 rounded-xl bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          required
          name="userName"
          value={formData.userName}
          onChange={HandleChange}
          placeholder="Username"
          className="px-4 py-3 rounded-xl bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          required
          name="password"
          value={formData.password}
          onChange={HandleChange}
          placeholder="Password"
          className="px-4 py-3 rounded-xl bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-3 rounded-xl font-semibold mt-2"
        >
          Save Password
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
