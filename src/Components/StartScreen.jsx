import React, { useCallback, useEffect } from "react";
import axios from "axios";
import { fetchQuestions } from "../Utils/questions.utils";

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
  const handleDifficultyLevelChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleNumOfQuestionInputChange = (event) => {
    if (event.target.value > 50) {
      alert("Please enter a maximum value of 50 or less!");
    } else {
      setNumOfQuestions(event.target.value);
    }
  };

  const handleCategoryChange = (event) => {
    setCategoryId(event.target.value);
  };

  const fetchCategories = useCallback(async () => {
    try {
      const url = "https://opentdb.com/api_category.php";
      const response = await axios.get(url);
      setCategories(response.data.trivia_categories);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  const fetchDifficulties = async () => {
    try {
      const url = "https://opentdb.com/api.php";
      const response = await axios.get(url);
      setDifficulty(response.data.trivia_difficulty);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="">
      <div className="wrapper bg-four rounded-lg shadow-xl p-6">
        <div className="title ">
          <h1 className="text-4xl text-primary rounded bg-three shadow-md text-center font-semibold tracking-wide">
            QUIZ GAME
          </h1>
        </div>
        <div>
          <h2 className="my-1.5 font-semibold">Enter number of questions</h2>
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
          <h2 className="my-1.5 font-semibold">Category</h2>
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
          <h2 className="my-1.5 font-semibold">Difficulty</h2>
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
          <button
            className="z-50 hover:bg-transparent text-gray-700 font-bold py-2 px-4 border-b-4 border-five hover:border-blue rounded"
            onClick={startGame}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartScreen;
