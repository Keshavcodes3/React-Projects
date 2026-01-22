import React, { useState } from "react";
// import Doc from "./Doc";

const App = () => {
  const ColorObj = [
    "red",
    "blue",
    "green",
    "violet",
    "indigo",
    "yellow",
    "white",
    "orange",
  ];
  const [currentColor, setcurrentColor] = useState(null);
  return (
    <div
      className="h-screen w-full"
      style={{ backgroundColor:  currentColor  }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="absolute p-5 bg-gray-500 rounded-2xl bottom-10 flex gap-x-4">
          {ColorObj.map(function (val, idx) {
            return (
              <div key={idx} className="">
                <button onClick={()=>setcurrentColor(val)}
                  className="px-5 py-2 rounded-3xl text-xl transition-all duration-200 hover:scale-92 cursor-pointer"
                  style={{ backgroundColor: val }}
                >
                  {val}{" "}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
