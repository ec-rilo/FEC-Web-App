import React, { useState } from 'react';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>You clicked {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>
        Click me
      </button>
    </div>
  );
}

export App