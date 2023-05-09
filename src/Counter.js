import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(2);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrement} onFocus={() => {}} type="button">
        Increment
      </button>
    </div>
  );
};

export default Counter;
