import React, { useState, useEffect } from "react";
import QuizArea from "./Components/QuizArea";
import StartScreen from "./Components/StartScreen";
import { fetchQuestions } from "./Utils/questions.utils";
import Scoreboard from "./Components/Scoreboard";
import "./App.css";

// const StartScreen = ({ startGame }) => {
//   //... All your states are here
//   // You need to move them up into the parent component
//   return (
//     <div>
//       Start screen<button onClick={startGame}>Start game</button>
//     </div>
//   );
// };

const App = () => {
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [quizzes, setQuizzes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(-1);
  const [difficulty, setDifficulty] = useState("all");

  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [isItCorrect, setIsItCorrect] = useState("");
  // const [numCorrect, setNumCorrect] = useState(0);

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
    // setIsItCorrect
    setCurrentQuestionIndex((prevState) => {
      return prevState + 1;
    });
    if (currentQuestionIndex === numOfQuestions - 1) {
      setGameFinished(true);
    }
  };

  // useEffect(() => {
  //   if (quizzes.length > 0) setGameStarted(true);
  // }, [quizzes]);

  // useEffect(() => {
  //   if (gameStarted === false) return;
  // }, [gameStarted]);

  // useEffect(() => {
  //   if (currentQuestionIndex === numOfQuestions - 1) {
  //     setGameFinished(true);
  //   }
  // }, [currentQuestionIndex, numOfQuestions]);

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
          // handleOptionClickedTrue={handleOptionClicked}
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
          handleOptionClicked={handleOptionClicked}
        />
      )}
      {gameFinished === true && <Scoreboard />}
    </div>
  );
};

export default App;
