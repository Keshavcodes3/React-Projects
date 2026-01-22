import React from "react";
import { useState } from "react";
const App = () => {
  const [Num, setNum] = useState(0);
  return (
    <div className="h-screen w-full flex flex-col gap-4 justify-center items-center">
      <div className="flex gap-x-5 justify-center items-center">
        <h1 className="text-7xl text-gray-600 font-bold">{Num}</h1>
        <h1 className="py-2 px-4 text-3xl rounded-3xl bg-gray-500 text-white font-bold">
          {Num & (1 != 0) ? "Odd" : "Even"}
        </h1>
      </div>
      <div className="flex items-center gap-x-5">
        <button
          onClick={() => setNum(prev=>prev+1)}
          className="px-4 py-2 rounded-2xl text-xl text-white bg-green-300 "
        >
          Increment
        </button>
        <button
          onClick={() => (Num >= 1 ? setNum(prev=>prev-1) : setNum(0))}
          className="px-4 py-2 rounded-2xl text-xl text-white bg-blue-300 "
        >
          Decrement
        </button>
        <button
          onClick={() => setNum(prev=>Math.max(0,prev-1))}
          className="px-4 py-2 rounded-2xl text-xl text-white bg-emerald-400 "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
