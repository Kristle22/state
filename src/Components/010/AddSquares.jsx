import { useState } from 'react';

function AddSquares({ color }) {
  const [square, setSquares] = useState([]);

  const addSquares = () => {
    setSquares((sq) => [...sq, sq]);
  };

  return (
    <>
      <div className='kvc'>
        {square.map((_, i) => (
          <div className='kv' key={i} style={{ backgroundColor: color }}></div>
        ))}
      </div>
      <br />
      <button onClick={addSquares}>ADD</button>
    </>
  );
}

export default AddSquares;
