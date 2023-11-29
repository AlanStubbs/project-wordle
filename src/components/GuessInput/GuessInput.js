import React from 'react';

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState('');
  return (
    <form className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();

        console.log({ guess });
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
          setGuess(event.target.value.toUpperCase())} />
    </form>
  );
}

export default GuessInput;
