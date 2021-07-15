import axios from "axios";

export const fetchQuestions = async (
  numOfQuestions,
  difficulty,
  categoryId
) => {
  try {
    const params = new URLSearchParams();
    params.append("amount", numOfQuestions);
    if (difficulty !== "all") {
      params.append("difficulty", difficulty);
    }
    if (categoryId !== -1) {
      params.append("category", categoryId);
    }
    params.append("type", "boolean");
    // params.append("correct_answer", isItCorrect);

    const url = "https://opentdb.com/api.php";
    const response = await axios.get(url, { params });
    // console.log(response.data.results);
    // console.log(numOfQuestions);
    return response.data.results;
    // setQuizzes(array); ,
  } catch (error) {
    console.log({ error });
  }
};
