import Card from "./Card";
import pokemons from "../scripts/data";
import getImageUrls from "../scripts/getImageUrl";
import { useState, useEffect } from "react";
import shuffleArray from "../scripts/shuffleArray";
import Score from "./Score";
import GameOver from "./GameOver";
import "../styles/app.css"

function App() {
  const [urls, setUrls] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (isPressed) => {
    if (isPressed) {
      setGameOver(true);
      return;
    }

    const newScore = score + 1;
    setScore(newScore);
    if (newScore > highScore) {
      setHighScore(newScore);
    }
  };

  const handleGameOver = () => {
    setScore(0);
    setGameOver(false);
  }

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const newUrls = await getImageUrls(pokemons);
        setUrls(newUrls);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUrls();
  }, []);

  useEffect(() => {
    setUrls(shuffleArray(urls));
  }, [score, urls]);


  if (gameOver) {
    return <GameOver score={score} highScore={highScore} onClick={() => handleGameOver()} />;
  }

  return (
    <div className="body">
      <div className="score-container">
        <Score score={score} highScore={highScore} />
      </div>

      <div className="card-container">
        {!urls.length ? (<>loading...</>) : urls.map((url) => {
          return (
            <div className="card-item" key={url}>
              <Card src={url} onClick={(isPressed) => handleClick(isPressed)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
