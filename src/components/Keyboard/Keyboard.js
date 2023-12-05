import React from 'react';
import KeyboardRow from '../KeyboardRow/KeyboardRow';

const rowOne = 'QWERTYUIOP';
const rowTwo = 'ASDFGHJKL';
const rowThree = 'ZXCVBNM';

function Keyboard({ activeGuess, setGuess, guessList, answer }) {

  return (
    <div className='keyboard'>
      <KeyboardRow letters={rowOne} activeGuess={activeGuess} setGuess={setGuess} guessList={guessList} answer={answer} />
      <KeyboardRow letters={rowTwo} activeGuess={activeGuess} setGuess={setGuess} guessList={guessList} answer={answer} />
      <KeyboardRow letters={rowThree} activeGuess={activeGuess} setGuess={setGuess} guessList={guessList} answer={answer} />
    </div>
  );
}

export default Keyboard;
