import React from 'react';

function Guess({ guess, parentKey }) {
  return (
    <p className="guess">
      {
        guess.map((character, index) => (
          <span key={`${parentKey}-${index}`} className="cell">{character}</span>
        ))
      }
    </p>
  );
}

export default Guess;
