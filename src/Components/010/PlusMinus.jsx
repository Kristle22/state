import { useState } from 'react';

function PlusMinus() {
  const [number, setNumber] = useState(0);

  const plusCount = () => {
    setNumber((n) => n + 1);
  };

  const minusCount = () => {
    setNumber((n) => n - 3);
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={plusCount}>PLUS</button>
      <button onClick={minusCount}>MINUS</button>
    </>
  );
}

export default PlusMinus;
