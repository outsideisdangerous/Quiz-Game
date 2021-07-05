import React, { useEffect } from "react";

function QuizArea({
  onOptionClicked,
  questionIndex,
  startGame,
  numOfQuestions,
  quizzes,
}) {
  // Display one question at a time. When either button is clicked,
  // register correct/incorrect answer then move to next question,
  // and wipe the current question from UI.

  const currentQuestion = quizzes[questionIndex];

  return (
    <div>
      <h1>Question #{questionIndex + 1}</h1>
      <h1>{currentQuestion.question}</h1>
      {/* <div>
        <ul>
          {quizzes.map((quiz, i) => (
            <li key={i}>{quiz.question}</li>
          ))}
        </ul>
      </div> */}
      <button onClick={onOptionClicked}>True</button>
      <button onClick={onOptionClicked}>False</button>
    </div>
  );
}

export default QuizArea;
