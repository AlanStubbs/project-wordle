import React from 'react';

function Banner({ status, children, handleRestart }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <button className='restart-button' onClick={handleRestart} >Restart Game</button>
    </div >
  );
}

export default Banner;
