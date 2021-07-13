import React, { useState } from "react";

function Scoreboard({ numOfQuestions, numCorrect }) {
  return (
    <div>
      <h1>Your Results:</h1>
      <h2>Number of Questions Correct: {numCorrect}</h2>
      <h2>Number of Questions Incorrect: {numOfQuestions - numCorrect}</h2>
      <h2>Your Percentage Score:</h2>
      <h2>Well Done! This Quiz was powered by the REACT library</h2>
    </div>
  );
}

export default Scoreboard;
