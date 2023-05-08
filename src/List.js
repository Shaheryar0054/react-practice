import React from 'react';

const List = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const newNumbers = numbers.map((number) => <li key={number}>{number}</li>);
  return (
    <>
      <ul>{newNumbers}</ul>
    </>
  );
};

export default List;
