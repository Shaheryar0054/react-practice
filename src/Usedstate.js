import React, { useState } from 'react';

function Usedstate() {
  const [name, setName] = useState('Shaheryar Abid');

  const changeName = () => {
    if (name === 'Shaheryar Abid') {
      setName('Imran Khan');
    } else {
      setName('Shaheryar Abid');
    }
  };

  return (
    <div>
      <h1>{name}</h1>
      <button className="btn" type="button" onClick={changeName}>
        Click Me
      </button>
    </div>
  );
}

export default Usedstate;
