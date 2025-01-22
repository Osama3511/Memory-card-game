import "../styles/score.css"
export default function Score({ score, highScore }) {
  return (
    <div className="score-container">
      <div className="score-item">
        <span className="score-label">Score:</span>
        <span className="score-value">{score}</span>
      </div>
      <div className="score-item">
        <span className="score-label">High Score:</span>
        <span className="score-value">{highScore}</span>
      </div>
    </div>
  );
}
