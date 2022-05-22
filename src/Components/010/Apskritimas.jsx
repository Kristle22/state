import { useState } from 'react';

function Apskritimas({ color }) {
  const [radius, setRadius] = useState(50);
  const changeRadius = () => {
    setRadius((r) => (r === 50 ? 3 : 50));
  };

  return (
    <>
      <div
        className='circle'
        style={{ borderRadius: radius, backgroundColor: color }}
      ></div>
      <button onClick={changeRadius}>Change</button>
    </>
  );
}

export default Apskritimas;
