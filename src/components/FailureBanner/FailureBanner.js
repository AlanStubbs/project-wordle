import React from 'react';
import Banner from '../Banner/Banner';

function FailureBanner({ answer, handleRestart }) {
  return (
    <Banner status={'sad'} handleRestart={handleRestart} >
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </Banner>
  );
}

export default FailureBanner;
