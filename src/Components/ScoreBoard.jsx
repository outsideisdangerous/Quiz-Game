import React from "react";

function ScoreBoard({ numOfQuestions, numCorrect }) {
  return (
    <div className="wrapper bg-four rounded-lg shadow-xl space-y-6">
      <h1>Your Results: </h1>
      <h2>Number of Questions Correct: {numCorrect}</h2>
      <h2>Number of Questions Incorrect: {numOfQuestions - numCorrect}</h2>
      <h2>
        Your Score percentage:{" "}
        {((numCorrect / numOfQuestions) * 100).toFixed(2)}%
      </h2>
      <h1 className="">Well Done!</h1>
    </div>
  );
}

export default ScoreBoard;
