import PropTypes from "prop-types";

export default function Status({ score, isWon, isLost, wrongGuessesCount, languages }) {
  if (isLost) {
    return (
      <section role="status" className="game-status">
        <h2>You Lost! Try again!</h2>
        <p>Score: {score} Press the &quot;New Game&quot; button to start again.</p>
      </section>
    );
  }

  if (isWon) {
    return (
      <section role="status" className="game-status">
        <h2>Congratulations! You saved the Assembly.</h2>
        <p>Score: {score} Press the &quot;New Game&quot; button to start a new game.</p>
      </section>
    );
  }

  if (wrongGuessesCount > 0) {
    return (
      <section role="status" className="game-status">
        <h2>Farewell! {languages[wrongGuessesCount-1]?.name || "Unknown"}</h2>
        <p>Save the languages.</p>
      </section>
    );
  }

  return (
    <section role="status" className="game-status" style={{opacity: 0}}>
      <h2>Keep Guessing!</h2>
      <p>Try guessing the words.</p>
    </section>
  );
}

Status.propTypes = {
  score: PropTypes.number.isRequired,
  isWon: PropTypes.bool.isRequired,
  isLost: PropTypes.bool.isRequired,
  wrongGuessesCount: PropTypes.number.isRequired,
  languages: PropTypes.array.isRequired,
};
