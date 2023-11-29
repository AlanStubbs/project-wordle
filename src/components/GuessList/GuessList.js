import React from 'react';
import Guess from '../Guess';

function GuessList({ guessList, answer }) {
  return (
    <div className="guess-results">
      {guessList
        .map(
          ({ value, id }) => (
            <Guess
              key={id}
              guess={value}
              parentKey={id}
              answer={answer} />
          ))}
    </div>
  );
}

export default GuessList;
