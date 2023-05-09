import React, { useState } from 'react';

function State() {
  const [inputValue, newChangeValue] = useState('Shery');
  const onChange = (event) => {
    const newval = event.target.value;
    newChangeValue(newval);
  };
  return (
    <div>
      <h1>{inputValue}</h1>
      <input type="text" value={inputValue} placeholder="Type something" onChange={onChange} />
    </div>
  );
}

export default State;
