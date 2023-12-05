import React from 'react';
import Keyboard from '../Keyboard/Keyboard';

function GuessInput({ addGuess, disabled, guessList, answer }) {
  const [guess, setGuess] = React.useState('');

  return (
    <>
      <form className="guess-input-wrapper"
        onSubmit={event => {
          event.preventDefault();
          addGuess({ guess });
          setGuess('');
        }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          required
          minLength={5}
          maxLength={5}
          pattern='[a-zA-Z]{5}'
          title='5 letter words only'
          value={guess}
          onChange={event =>
            setGuess(event.target.value.toUpperCase())}
          disabled={disabled} />
        <Keyboard activeGuess={guess} setGuess={setGuess} guessList={guessList} answer={answer} />
      </form>
    </>
  );
}

export default GuessInput;
