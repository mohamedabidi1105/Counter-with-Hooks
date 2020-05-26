import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      <input id="count" name="count" type="number" value={count} onChange={(event) => setCount(parseInt(event.target.value))}></input>
    </div>
  );
}

export default Counter;