import axios from "axios";

export const getCategories = async () => {
  const response = await axios.get(
    "https://api.chucknorris.io/jokes/categories"
  );
  return response;
};
