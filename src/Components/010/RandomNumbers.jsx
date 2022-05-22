import { useState } from 'react';
import rand from '../../FUNCTIONS/randNumbers';

function RandomNumbers({ wh, c }) {
  const [radius, setRadius] = useState(50);
  const [number, setNumber] = useState(rand(5, 25));

  const changeRadius = () => {
    setRadius((r) => (r === 3 ? 50 : 3));
  };

  const genRandom = () => {
    setNumber((n) => (n = rand(5, 25)));
  };

  return (
    <>
      <div
        className='circle'
        style={{
          borderRadius: radius,
          width: wh,
          height: wh,
        }}
      >
        <div style={{ lineHeight: c }}>{number}</div>
      </div>
      <button onClick={changeRadius}>Change radius</button>
      <button onClick={genRandom}>Change Number</button>
    </>
  );
}

export default RandomNumbers;
