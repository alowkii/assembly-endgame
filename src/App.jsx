import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Languages from './components/Languages';
import Status from './components/Status';
import Word from './components/Word';
import KeyBoard from './components/Keyboard';
import { languages } from './data/languages.js';
import { getWord } from './components/Utils.jsx';
import Confetti from 'react-confetti';

function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState(getWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessesCount = guessedLetters.filter(letter => !currentWord.toUpperCase().includes(letter)).length;
  const rightGuessCount = guessedLetters.filter(letter => currentWord.toUpperCase().includes(letter)).length;

  const uniqueLettersCount = new Set(currentWord.toUpperCase()).size;
  
  const score = uniqueLettersCount < 26 
    ? ((rightGuessCount / uniqueLettersCount * 5) + ((26 - uniqueLettersCount - wrongGuessesCount) / (26 - uniqueLettersCount) * 5)).toFixed(2)
    : 0;

  const isWon = currentWord.toUpperCase().split('').every(letter => guessedLetters.includes(letter.toUpperCase()));
  const isLost = wrongGuessesCount > languages.length - 1;

  const resetGame = () => {
    setGuessedLetters([]);
    setCurrentWord(getWord());
  };

  return (
    <>
      <Header />
      <main>
        <Status 
          score={parseFloat(score)}
          isWon={isWon}
          isLost={isLost}
          wrongGuessesCount={wrongGuessesCount}
          languages={languages}
        />
        <Languages 
          wrongGuessesCount={wrongGuessesCount}
          languages={languages}
        />
        <Word
          isLost={isLost}
          currentWord={currentWord}
          guessedLetters={guessedLetters}
        />
        <KeyBoard 
          guessedLetters={guessedLetters} 
          setGuessedLetters={setGuessedLetters}
          currentWord={currentWord.toUpperCase()}
          isGameOver={isWon || isLost}
        />
        {(isWon || isLost) && 
          <button className='new-game-btn' onClick={resetGame}>New Game</button>
        }
      </main>
      {isWon && 
        <Confetti 
          width={window.innerWidth-10} 
          height={window.innerHeight-10}
        />
      }
    </>
  );
}

export default AssemblyEndgame;
