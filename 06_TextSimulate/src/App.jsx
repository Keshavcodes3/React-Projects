import React, { useEffect, useState } from "react";

const App = () => {
  const fullText = "Keshav Chetri 🚀";
  const [Data, setData] = useState({
    text: "",
    index: 0,
    direction: "forward",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData((prev) => {
        if (prev.direction == "forward") {
          const nextIndex = prev.index + 1;
          const newText = fullText.slice(0, nextIndex);
          if (fullText.length === nextIndex) {
            return {
              text: newText,
              index: nextIndex,
              direction: "backward",
            };
          }
          return {
            text: newText,
            index: nextIndex,
            direction: "forward",
          };
        }
        const nextIndex = prev.index - 1;
        const newText = fullText.slice(0, nextIndex);
        if (nextIndex === 0) {  
          return {
            text: newText,
            index: nextIndex,
            direction: "forward",
          };
        }
        return {
          text: newText,
          index: nextIndex,
          direction: "backward",
        };

      });
    }, 150);
    return () => clearTimeout(timeout);
  }, [Data]);

  return (
    <div className="h-screen w-full flex bg-gray-800 justify-center items-center">
      <div className="p-5 bg-gray-700 rounded-2xl shadow-xl">
        <input
          type="text"
          value={Data.text}
          readOnly
          className="p-4 text-3xl bg-black text-green-400 font-mono border-2 border-green-400 rounded-2xl outline-0 text-center"
        />
      </div>
    </div>
  );
};

export default App;
