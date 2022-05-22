import { useState } from 'react';

function ChangeReset({ red, blue }) {
  const [square, setSquare] = useState([]);

  const addRedSquares = () => {
    setSquare((sq) => [...sq, red]);
  };
  const addBlueSquares = () => {
    setSquare((sq) => [...sq, blue]);
  };

  const removeSquares = () => {
    setSquare((sq) => sq.slice(sq.length));
  };

  return (
    <>
      <div className='kvc'>
        {square.map((sq, i) => (
          <div className='kv' key={i} style={{ backgroundColor: sq }}></div>
        ))}
      </div>
      <br />
      <button onClick={addRedSquares}>Add RED</button>
      <button onClick={addBlueSquares}>Add BLUE</button>
      <button onClick={removeSquares}>RESET</button>
    </>
  );
}

export default ChangeReset;
