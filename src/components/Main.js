import { useState, useEffect } from "react";
import { getCategories } from "../services/getCategories";
import { getRandomJokes } from "../services/getRandomJoke";
import { getEachJoke } from "../services/getEachJoke";
import chuckNorris from "../image/clipart11314801.png";

const Main = () => {
  const [categories, setCategories] = useState([]);
  const [oneJoke, setOneJoke] = useState([]);

  useEffect(() => {
    const data = getCategories();
    data
      .then((res) => {
        return res;
      })
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  const randomNum = (num) => {
    return Math.floor(Math.random() * num);
  };

  const handleClickButton = (e) => {
    e.preventDefault();
    const data = getEachJoke(e.target.value);
    data
      .then((res) => {
        return res;
      })
      .then((response) => {
        const oneNum = randomNum(response.data.result.length);
        setOneJoke(response.data.result[oneNum].value);
      });
  };

  const handleRandomClickButton = (e) => {
    e.preventDefault();
    const data = getRandomJokes();
    data
      .then((res) => {
        return res;
      })
      .then((response) => {
        setOneJoke(response.data.value);
      });
  };

  return (
    <>
      <div className="navButtons">
        {categories.map((category, index) => {
          return (
            <button
              className="eachButton"
              key={index}
              value={category}
              onClick={handleClickButton}
            >
              {category}
            </button>
          );
        })}
        <button
          className="eachButton"
          value="RANDOM"
          onClick={handleRandomClickButton}
        >
          random
        </button>
      </div>
      <div className="imageChuckRight">
        <img
          className="imageChuckNorris"
          src={chuckNorris}
          alt="Chuck_Norris"
        />
      </div>
      <div className="containerText">
        <div className="jokeResult">
          <p>{oneJoke}</p>
        </div>
      </div>
    </>
  );
};

export default Main;
