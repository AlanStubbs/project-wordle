import React from 'react';
import { checkGuess } from '../../game-helpers';

function KeyboardRow({ letters, activeGuess, setGuess, guessList, answer }) {
  function handleClick(letter) {
    const nextGuess = !activeGuess
      ? letter.toUpperCase()
      : activeGuess.length < 5
        ? `${activeGuess}${letter.toUpperCase()}`
        : activeGuess;

    setGuess(nextGuess);
  };

  function className(keyboardLetter) {
    for (let i = 0; i < guessList.length; i++) {
      const value = guessList[i].value;

      const guessString = value.join('');

      if (guessString.trim().length === 0) {
        continue;
      }

      const augmentedGuess = checkGuess(guessString, answer);

      const foundStatus = augmentedGuess.find(ag => ag.letter === keyboardLetter)?.status;

      if (foundStatus) {
        return foundStatus;
      }
    };

    return '';
  };

  return (
    <div className='keyboard-row'>
      {[...letters].map(letter => (
        <button
          key={letter}
          type={activeGuess.length >= 5 ? 'submit' : 'button'} // this is to try to handle hitting Enter in a good way - with Keyboard inside GuessInput's form
          onClick={() => handleClick(letter)}
          className={`keyboard-button ${className(letter)}`} >{letter}</button>
      ))}
    </div>
  );
}

export default KeyboardRow;
