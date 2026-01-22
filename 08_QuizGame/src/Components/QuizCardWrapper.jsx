import React, { useState } from "react";
import QuizCard from "./QuizCard";
import QuizData from "../../public/Questions.js";
import PopUpButton from "./PopUpButton.jsx";

const QuizCardWrapper = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [selectedOption, setselectedOption] = useState(null);
  const [isOver, setisOver] = useState(false);
  const currentQuestion = QuizData[currentIndex];
  const [Score, setScore] = useState(0);
  const nextQuestion = () => {
    if (QuizData[currentIndex].correctIndex === selectedOption) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => prev - 5);
    }
    console.log(Score);
    if (currentIndex < QuizData.length - 1) {
      setcurrentIndex(currentIndex + 1);
    } else {
      setisOver(true);
    }
  };
  return (
    <div className="h-full w-full flex-col gap-y-10 ">
      <div className="h-90 rounded-xl max-w-3xl mx-auto w-120 p-8 bg-blue-300">
        {/* Question */}
        <h1 className="text-center text-xl font-bold">
          {currentQuestion.question}
        </h1>

        {/* Options */}
        <div className="flex flex-col gap-2 mt-5">
          {currentQuestion.options.map(function (val, idx) {
            return (
              <QuizCard
                key={idx}
                optionText={val}
                index={idx}
                selectedOption={selectedOption}
                setselectedOption={setselectedOption}
              />
            );
          })}
        </div>

        {/* Next Button */}
        <div className="flex justify-center items-center mt-3">
          <button
            onClick={nextQuestion}
            className="px-4 py-2 rounded-lg bg-blue-400 text-xl cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
      <div className="mt-5">
        {isOver ? <PopUpButton Score={Score} Length={QuizData.length} /> : ""}
      </div>
    </div>
  );
};

export default QuizCardWrapper;
