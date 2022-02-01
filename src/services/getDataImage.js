import axios from "axios";

export const getDataImage = async () => {
  const response = await axios.get("https://api.chucknorris.io/jokes/random");
  return response;
};
