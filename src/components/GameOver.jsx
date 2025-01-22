import "../styles/gameOver.css";
import Score from "./Score";
export default function GameOver({ score, highScore, onClick }) {
  return (
    <div className="game-over-container">
      <p className="game-over-text">Game Over!</p>
      <Score score={score} highScore={highScore} />
      <button className="restart-button" onClick={onClick}>
        Restart
      </button>
    </div>
  );
}
