import React from 'react';
import Banner from '../Banner/Banner';

function SuccessBanner({ numberOfGuesses }) {
  return (
    <Banner status={'happy'}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{' '}{numberOfGuesses}{' '}guess{numberOfGuesses > 1 ? 'es' : ''}</strong>.
      </p>
    </Banner>
  );
}

export default SuccessBanner;
