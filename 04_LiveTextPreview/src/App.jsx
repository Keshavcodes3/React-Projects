import React, { useState } from "react";

const App = () => {
  const [currentChar, setcurrentChar] = useState('');
  const HandleChange=(e)=>{
    const val=e.target.value;
    if(val.length>0){
      setcurrentChar(val[val.length-1]);
    }else{
      setcurrentChar('')
    }
  }
  return (
    <div className="h-screen w-full bg-gray-500">
      <div className="h-full w-full max-w-4xl mx-auto ">
        <div className="h-full w-full flex justify-center items-center flex-col">
          <h1 className="text-3xl text-white font-bold">Live Text Preview</h1>
          <div className="py-3 px-5 flex items-center justify-center rounded-3xl bg-gray-200">
            <p className="text-5xl text-blue-700 text-center">{currentChar}</p>
          </div>
          <div className="mt-3 p-4">
            <input
              onChange={(e) => HandleChange(e)}
              className="p-4 border-2 outline-0 border-blue-500"
              type="text"
              value={currentChar}
              placeholder="Enter Something"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
