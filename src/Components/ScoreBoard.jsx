import React, { useState } from "react";

function Scoreboard({ numOfQuestions, numCorrect }) {
  return (
    <div>
      <h1>Your Results: </h1>
      <h2>Number of Questions Correct: {numCorrect}</h2>
      <h2>Number of Questions Incorrect: {numOfQuestions - numCorrect}</h2>
      <h2>
        Your Score percentage:
        {((numCorrect / numOfQuestions) * 100).toFixed(2)}%
      </h2>
      <h1>Well Done!</h1>
      <h5>This Quiz was powered by the REACT library</h5>
    </div>
  );
}

export default Scoreboard;
