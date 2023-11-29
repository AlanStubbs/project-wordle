import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, parentKey, answer }) {
  const guessString = guess.join('');

  const augmentedGuess =
    guessString.trim().length === 0
      ? guess
      : checkGuess(guessString, answer);

  return (
    <p className="guess">
      {
        augmentedGuess.map(({ letter, status }, index) => (
          <span key={`${parentKey}-${index}`} className={letter === undefined ? 'cell' : `cell ${status}`}>{letter}</span>
        ))
      }
    </p>
  );
}

export default Guess;
