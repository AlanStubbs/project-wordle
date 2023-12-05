import React from 'react';
import Banner from '../Banner/Banner';

function SuccessBanner({ numberOfGuesses, handleRestart }) {
  return (
    <Banner status={'happy'} handleRestart={handleRestart} >
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{' '}{numberOfGuesses}{' '}guess{numberOfGuesses > 1 ? 'es' : ''}</strong>.
      </p>
    </Banner>
  );
}

export default SuccessBanner;
