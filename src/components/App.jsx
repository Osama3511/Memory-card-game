import Card from "./Card";
import pokemons from "../scripts/data";
import getImageUrls from "../scripts/getImageUrl";
import { useState, useEffect } from "react";
import shuffleArray from "../scripts/shuffleArray";
import Score from "./Score";

function App() {
  const [urls, setUrls] = useState([]);
  const [score, setScore] = useState(0);


  const handleClick = (isPressed) => {
    if (isPressed) {
      setScore(0);
      return <p>game over</p>;
    }

    setScore(score + 1);
  };

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

  return (
    <>
      <div className="card-container">
        {urls.map((url) => {
          return <Card key={url} src={url} onClick={(e) => handleClick(e)} />;
        })}
      </div>

      <div className="score-container">
        <Score score={score}  />
      </div>
    </>
  );
}

export default App;
