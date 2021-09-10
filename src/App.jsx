import React, { useState } from "react";
import QuizArea from "./Components/QuizArea";
import StartScreen from "./Components/StartScreen";
import { fetchQuestions } from "./Utils/questions.utils";
import ScoreBoard from "./Components/ScoreBoard";
import "./App.css";

const App = () => {
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [quizzes, setQuizzes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(-1);
  const [difficulty, setDifficulty] = useState("all");

  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [numCorrect, setNumCorrect] = useState(0);
  const [error, setError] = useState(null);

  const currentQuestion = quizzes[currentQuestionIndex];

  const startGame = async () => {
    try {
      setError(null);
      const questions = await fetchQuestions(
        numOfQuestions,
        difficulty,
        categoryId
      );
      setQuizzes(questions);
      setGameStarted(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleOptionClickedTrue = () => {
    if (currentQuestion.correct_answer === "True") {
      setNumCorrect((prevState) => {
        return prevState + 1;
      });
      setCurrentQuestionIndex((prevState) => {
        return prevState + 1;
      });
    } else {
      setCurrentQuestionIndex((prevState) => {
        return prevState + 1;
      });
    }

    if (currentQuestionIndex === numOfQuestions - 1) {
      setGameFinished(true);
    }
  };

  const handleOptionClickedFalse = () => {
    if (currentQuestion.correct_answer === "False") {
      setNumCorrect((prevState) => {
        return prevState + 1;
      });
      setCurrentQuestionIndex((prevState) => {
        return prevState + 1;
      });
    } else {
      setCurrentQuestionIndex((prevState) => {
        return prevState + 1;
      });
    }

    if (currentQuestionIndex === numOfQuestions - 1) {
      setGameFinished(true);
    }
  };

  return (
    <div>
      {gameStarted === false && (
        <StartScreen
          startGame={startGame}
          numOfQuestions={numOfQuestions}
          setNumOfQuestions={setNumOfQuestions}
          quizzes={quizzes}
          setQuizzes={setQuizzes}
          categories={categories}
          setCategories={setCategories}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          error={error}
        />
      )}
      {gameStarted === true && gameFinished === false && !error && (
        <QuizArea
          questionIndex={currentQuestionIndex}
          startGame={startGame}
          numOfQuestions={numOfQuestions}
          setNumOfQuestions={setNumOfQuestions}
          quizzes={quizzes}
          setQuizzes={setQuizzes}
          categories={categories}
          setCategories={setCategories}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          handleOptionClickedTrue={handleOptionClickedTrue}
          handleOptionClickedFalse={handleOptionClickedFalse}
        />
      )}
      {gameFinished === true && (
        <ScoreBoard numCorrect={numCorrect} numOfQuestions={numOfQuestions} />
      )}
    </div>
  );
};

export default App;
