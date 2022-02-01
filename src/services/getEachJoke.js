import axios from "axios";

export const getEachJoke = async (oneCategory) => {
  const response = await axios.get(
    `https://api.chucknorris.io/jokes/search?query=${oneCategory}`
  );
  return response;
};
