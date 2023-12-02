import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import SuccessBanner from '../SuccessBanner/SuccessBanner';
import FailureBanner from '../FailureBanner/FailureBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState(range(NUM_OF_GUESSES_ALLOWED).map(item => ({
    value: range(5).map(_ => ('')),
    id: crypto.randomUUID()
  })));

  const [numberGuessesMade, setNumberGuessesMade] = React.useState(0);
  const [foundCorrectAnswer, setFoundCorrectAnswer] = React.useState(false);

  const gameFinished = foundCorrectAnswer || numberGuessesMade === NUM_OF_GUESSES_ALLOWED;

  function addGuess({ guess }) {
    if (numberGuessesMade >= NUM_OF_GUESSES_ALLOWED) {
      window.alert(`Max number of guesses reached: ${NUM_OF_GUESSES_ALLOWED}`);
      return;
    }

    const nextGuessList = [...guessList];

    nextGuessList[numberGuessesMade].value = [...guess];

    setNumberGuessesMade(numberGuessesMade + 1);

    setGuessList(nextGuessList);

    setFoundCorrectAnswer(guess === answer);
  }

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameFinished} />
      {gameFinished && (
        foundCorrectAnswer
          ? <SuccessBanner numberOfGuesses={numberGuessesMade} />
          : <FailureBanner answer={answer} />
      )
      }
    </>
  );
}

export default Game;
