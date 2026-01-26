import React, { useState } from "react";

const PasswordCard = ({ item,onDelete }) => {
  const [show, setshow] = useState(false);
  return (
    <div className="bg-gray-800 text-white p-5 rounded-2xl shadow-lg w-72 border border-gray-700">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-blue-300">{item.site}</h3>
        <button
          onClick={() => setshow(!show)}
          className="text-sm bg-blue-500 px-3 py-1 rounded-lg"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      <div className="text-sm space-y-2">
        <p>
          <span className="text-gray-400">Username:</span>{" "}
          <span className="font-medium">{item.userName}</span>
        </p>

        <p>
          <span className="text-gray-400">Password:</span>{" "}
          <span className="font-medium">{show ? item.password : "••••••"}</span>
        </p>
      </div>

      <div className="flex gap-2 mt-4">
        <button className="bg-green-600 px-3 py-1 text-sm rounded-lg">
          Copy
        </button>

        <button onClick={onDelete} className="bg-red-600 px-3 py-1 text-sm rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
};

export default PasswordCard;
