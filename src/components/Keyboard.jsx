import PropTypes from 'prop-types';

export default function Keyboard(props) {
  function addGuessedLetter(letter) {
    if(!props.guessedLetters.includes(letter)) {
      props.setGuessedLetters(prevLetters => [...prevLetters, letter]);
    }
  }

  function isCorrect(letter) {
    return props.currentWord.includes(letter);
  }

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const keyboardElements = alphabet.map(letter => {
    const isGuessed = props.guessedLetters.includes(letter);
    return (<button
      onClick={() => addGuessedLetter(letter)}
      key={letter}
      disabled={props.isGameOver}
      aria-disabled={props.isGameOver}
      aria-label= {`${letter} button`}
      style={{ backgroundColor: isGuessed ? 
        ( isCorrect(letter) ? '#00ff00' : '#ff6b6b') 
        : '#b8deff' 
      }}
    >
      {letter}
    </button>);
  });

  return (
    <div className="keyboard" aria-live='polite'>
      {keyboardElements}
    </div>
  );
}

Keyboard.propTypes = {
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  setGuessedLetters: PropTypes.func.isRequired,
  currentWord: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
};