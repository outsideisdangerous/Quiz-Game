import React from "react";

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function QuizArea({
  handleOptionClickedTrue,
  handleOptionClickedFalse,
  questionIndex,
  quizzes,
  correct_answer,
}) {
  const currentQuestion = quizzes[questionIndex];
  // const correctQuestion = quizzes[correct_answer]

  return (
    <>
      <div>
        <h1>Question #{questionIndex + 1}</h1>

        <h1>{decodeHtml(currentQuestion.question)}</h1>
      </div>

      <div className="wrapper-button">
        <button onClick={handleOptionClickedTrue}>True</button>
        <button onClick={handleOptionClickedFalse}>False</button>
      </div>
    </>
  );
}

export default QuizArea;
