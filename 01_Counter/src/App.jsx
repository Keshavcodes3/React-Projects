import React, { useState } from "react";
import "./Styles/App.scss";
const App = () => {
  const [CurrentNum, setCurrentNum] = useState(0);
  return (
    <div className="container">
      <h1 className="text">{CurrentNum}</h1>
      <div className="button-container">
        <button
          onClick={() => setCurrentNum(CurrentNum + 1)}
          className="button increment"
        >
          Increment
        </button>
        <button
          onClick={() => CurrentNum>=1?setCurrentNum(CurrentNum - 1):setCurrentNum(0)}
          className="button decrement"
        >
          Decrement
        </button>
        <button onClick={() => setCurrentNum(0) } className="button reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
