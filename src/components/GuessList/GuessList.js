import React from 'react';
import Guess from '../Guess';

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList
        .map(
          ({ value, id }) => (
            <Guess
              key={id}
              guess={value}
              parentKey={id} />
          ))}
    </div>
  );
}

export default GuessList;
