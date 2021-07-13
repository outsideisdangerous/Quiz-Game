import React from "react";

function QuizArea({ handleOptionClicked, questionIndex, quizzes }) {
  const currentQuestion = quizzes[questionIndex];

  return (
    <div>
      <h1>Question #{questionIndex + 1}</h1>

      <h1>{currentQuestion.question}</h1>

      <button onClick={handleOptionClicked}>True</button>
      <button onClick={handleOptionClicked}>False</button>
    </div>
  );
}

export default QuizArea;
