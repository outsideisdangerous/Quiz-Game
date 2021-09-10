import axios from "axios";

export const fetchQuestions = async (
  numOfQuestions,
  difficulty,
  categoryId
) => {
  const params = new URLSearchParams();
  params.append("amount", numOfQuestions);
  if (difficulty !== "all") {
    params.append("difficulty", difficulty);
  }
  if (categoryId !== -1) {
    params.append("categoryId", categoryId);
  }
  params.append("type", "boolean");
  const url = "https://opentdb.com/api.php";
  const response = await axios.get(url, { params });
  const data = response.data.results;
  if (!data.length) {
    throw new Error("No question available.");
  }
  return data;
};
