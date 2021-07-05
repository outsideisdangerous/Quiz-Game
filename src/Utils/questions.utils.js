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
      // AOC
      params.append("difficulty", difficulty); // AOC
    }
    if (categoryId !== -1) {
      // AOC
      params.append("category", categoryId); // AOC
    }
    params.append("type", "boolean");

    const url = "https://opentdb.com/api.php";
    const response = await axios.get(url, { params });
    // console.log(response.data.results);
    // console.log(numOfQuestions);
    return response.data.results;
    // setQuizzes(array); // AOC,
  } catch (error) {
    console.log({ error });
  }
};
