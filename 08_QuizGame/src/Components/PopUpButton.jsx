import React from "react";
import App from "../App";
const PopUpButton = ({ Score, Length }) => {
  const GradeEvaluator = (Score) => {
    if (Score === Length) {
      return "You Aced it";
    } else if (Score < 0) {
      return "Fail";
    }
  };
  return (
    <div className="h-60 rounded-xl max-w-3xl mx-auto w-120 p-8 bg-blue-300">
      <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="text-3xl font-semibold text-gray-600">
          Quiz Completed!
        </h1>
        <p className="font-bold text-2xl">
          Your Score : {Score} out of {Length*10}
        </p>
        <div className="py-3 px-7  rounded-2xl border-2 border-gray-600 flex justify-center items-center">
          <h1>{GradeEvaluator(Score)}</h1>
        </div>
        <button className="px-5 py-3 bg-blue-900 rounded-lg transition-all duration-300 text-white font-bold cursor-pointer hover:bg-blue-500">
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default PopUpButton;
