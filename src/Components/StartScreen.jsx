import React, { useCallback, useEffect } from "react";
import axios from "axios";
import { fetchQuestions } from "../Utils/questions.utils";

// TODO:  input for question amount
// TODO: fetch BE according to user's input question amount
// TODO:

const difficultyLevels = ["easy", "medium", "hard", "all"];

const StartScreen = ({
  startGame,
  gameStarted,
  setGameStarted,
  setNumOfQuestions,
  quizzes,
  categories,
  setCategories,
  setCategoryId,
  setDifficulty,
}) => {
  // Handlers

  const handleDifficultyLevelChange = (event) => {
    // console.log(event.target.value);
    setDifficulty(event.target.value);
  };

  const handleNumOfQuestionInputChange = (event) => {
    // console.log(event.target.value);
    if (event.target.value > 50) {
      console.log("The maximum number of questions in a quiz is 50!");
    } else {
      setNumOfQuestions(event.target.value);
    }
  };

  const handleCategoryChange = (event) => {
    setCategoryId(event.target.value);
  };

  // Fetch Logics

  const fetchCategories = useCallback(async () => {
    try {
      const url = "https://opentdb.com/api_category.php";
      const response = await axios.get(url);
      // console.log(response.data.trivia_categories);
      setCategories(response.data.trivia_categories);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  // const fetchDifficulties = async () => {
  //   try {
  //     const url = "https://opentdb.com/api.php";
  //     const response = await axios.get(url);
  //     // console.log(response.data);
  //     setDifficulty(response.data.trivia_difficulty);
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };

  // UseEffect Logics

  useEffect(() => {
    // Debug
    fetchCategories();
  }, []);

  // useEffect(() => {
  //   console.log(quizzes);
  // }, [quizzes]);

  return (
    <>
      <div>
        <h2>Enter number of questions</h2>
        <input
          id="set-quiz-length"
          type="number"
          min={1}
          max={50}
          placeholder="Number of Questions"
          onChange={handleNumOfQuestionInputChange}
        />
      </div>
      <div>
        <h2>Category</h2>
        <select onChange={handleCategoryChange}>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <h2>Difficulty</h2>
        <select onChange={handleDifficultyLevelChange}>
          {difficultyLevels.map((level) => {
            return (
              <option key={level} value={level}>
                {level}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <br />
        <button onClick={startGame}>Start Quiz</button>
      </div>

      {/* <div>
        <ul>
          {quizzes.map((quiz, i) => (
            <li key={i}>{quiz.question}</li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default StartScreen;
