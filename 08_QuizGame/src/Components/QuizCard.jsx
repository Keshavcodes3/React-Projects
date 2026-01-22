import React from "react";

const QuizCard = ({ optionText, index, selectedOption, setselectedOption }) => {
  const selectedstyle =
    "cursor-pointer flex items-center px-5 py-2 rounded-lg bg-blue-500 transition-all duration-200";
  const NormalStyle =
    "cursor-pointer flex items-center px-5 py-2 rounded-lg bg-white transition-all duration-200";

  return (
    <div className="max-w-3xl w-80 mx-auto ">
      <button
        onClick={() => setselectedOption(index)}
        className={selectedOption === index ? selectedstyle : NormalStyle}
      >
        {optionText}
      </button>
    </div>
  );
};

export default QuizCard;
