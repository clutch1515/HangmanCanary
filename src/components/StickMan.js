import React, { Component } from 'react';

function StickMan({remainingGuesses}) {
    return (
      <div>
        {remainingGuesses < 3 && <p>    O   </p>}
        {remainingGuesses < 2 && <p>  \ | /  </p>}
        {remainingGuesses < 1 && <p>    |   </p>}
        {remainingGuesses < 0 && <p>   / \  </p>}
      </div>
    );
  }

  export default StickMan;