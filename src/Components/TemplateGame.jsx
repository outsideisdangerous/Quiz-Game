import React, { useState, useEffect } from "react";
import QuizArea from "./QuizArea";
import StartScreen from "./StartScreen";
import { fetchQuestions } from "../Utils/questions.utils";
// import ScoreBoard from "./Scoreboard";

// const StartScreen = ({ startGame }) => {
//   //... All your states are here
//   // You need to move them up into the parent component
//   return (
//     <div>
//       Start screen<button onClick={startGame}>Start game</button>
//     </div>
//   );
// };

const Scoreboard = () => {
  return (
    <div>
      <h1>3/10 correct</h1>
    </div>
  );
};

const TemplateGame = () => {
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [quizzes, setQuizzes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(-1);
  const [difficulty, setDifficulty] = useState("all");

  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const startGame = async () => {
    const questions = await fetchQuestions(
      numOfQuestions,
      difficulty,
      categoryId
    );
    setQuizzes(questions);
    setGameStarted(true);
  };

  const handleOptionClicked = () => {
    setCurrentQuestionIndex((prevState) => {
      return prevState + 1;
    });
  };

  useEffect(() => {
    if (currentQuestionIndex === 5) {
      setGameFinished(true);
    }
  }, [currentQuestionIndex]);

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
        />
      )}
      {gameStarted === true && gameFinished === false && (
        <QuizArea
          onOptionClicked={handleOptionClicked}
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
        />
      )}
      {gameFinished === true && <Scoreboard />}
    </div>
  );
};

export default TemplateGame;
