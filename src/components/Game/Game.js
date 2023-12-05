import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import SuccessBanner from '../SuccessBanner/SuccessBanner';
import FailureBanner from '../FailureBanner/FailureBanner';

function Game() {
  function initializeGuessList() {
    return range(NUM_OF_GUESSES_ALLOWED).map(item => ({
      value: range(5).map(_ => ('')),
      id: crypto.randomUUID()
    }))
  }

  const [guessList, setGuessList] = React.useState(() => initializeGuessList());

  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [numberGuessesMade, setNumberGuessesMade] = React.useState(0);
  const [foundCorrectAnswer, setFoundCorrectAnswer] = React.useState(false);

  const gameFinished = foundCorrectAnswer || numberGuessesMade === NUM_OF_GUESSES_ALLOWED;

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

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

  function handleRestart() {
    setAnswer(sample(WORDS));
    setNumberGuessesMade(0);
    setFoundCorrectAnswer(false);
    setGuessList(initializeGuessList());
  }

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameFinished} guessList={guessList} answer={answer} />
      {gameFinished && (
        foundCorrectAnswer
          ? <SuccessBanner numberOfGuesses={numberGuessesMade} handleRestart={handleRestart} />
          : <FailureBanner answer={answer} handleRestart={handleRestart} />
      )
      }
    </>
  );
}

export default Game;
