import React, { useState } from "react";

const App = () => {
  const [Character, setCharacter] = useState({
    char: "",
    count: 0,
  });
  const HandleChange=(e)=>{
    const val=e.target.value;
    setCharacter((prev)=>({
      char:val,
      count:val?prev.count+1:0
    }))
  }
  return (
    <div className="h-screen w-full bg-gray-500">
      <div className="h-full w-full max-w-4xl mx-auto ">
        <div className="h-full w-full flex justify-center items-center flex-col">
          <h1 className="text-3xl text-white font-bold">Char Counter</h1>
          <div className="py-3 px-5 flex items-center justify-center rounded-3xl bg-gray-200">
            <p className="text-2xl text-blue-700 text-center">
              Count : <span className="text-3xl">{Character.count}</span>
            </p>
          </div>
          <div className="mt-3 p-4">
            <input onChange={(e)=>HandleChange(e)}
              className="p-4 border-2 outline-0 border-blue-500"
              type="text"
              placeholder="Enter Something"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
