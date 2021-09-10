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
  const cQuestion = decodeHtml(currentQuestion.question);

  return (
    <section className="bg-four rounded-xl h-32  w-screen shadow-xl">
      <div className="text-center">
        <h1>Question #{questionIndex + 1}</h1>

        <h1>{cQuestion}</h1>
      </div>

      <div className="wrapper-button my-6 ">
        <button
          className="border rounded mr-12 bg-five hover:bg-four"
          onClick={handleOptionClickedTrue}
        >
          True
        </button>
        <button
          className="border bg-five rounded hover:bg-four"
          onClick={handleOptionClickedFalse}
        >
          False
        </button>
      </div>
    </section>
  );
}

export default QuizArea;
