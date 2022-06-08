import { useState, useReducer } from 'react';
import './App.css';
import randColor from './FUNCTIONS/randColor';
import rand from './FUNCTIONS/randNumbers';
import Apskritimas from './Components/010/Apskritimas';
import RandomNumbers from './Components/010/RandomNumbers';
import PlusMinus from './Components/010/PlusMinus';
import AddSquares from './Components/010/AddSquares';
import ChangeReset from './Components/010/ChangeReset';

import shapeReducer from './Reducers/shapeReducer';
import numberReducer from './Reducers/numberReducer';
import squaresReducer from './Reducers/squaresReducer';
import counterReducer from './Reducers/counterReducer';
import colSquaresReducer from './Reducers/colSquaresReducer';

function App() {
  // Apskritimas
  const [shape, dispachShape] = useReducer(shapeReducer, 50);

  const changeToCircle = () => {
    const action = {
      type: 'toCircle',
    };
    dispachShape(action);
  };

  // Random numbers
  const [number, dispachNumber] = useReducer(numberReducer, rand(0, 30));

  const changeNumber = () => {
    const action = {
      type: 'randomNumber',
      payload: rand(5, 25),
    };
    return dispachNumber(action);
  };

  // Add squares
  const [squares, dispachSquares] = useReducer(squaresReducer, []);

  const addSquares = () => {
    const action = {
      type: 'add',
      payload: rand(10, 20),
    };
    return dispachSquares(action);
  };

  // plus & minus
  const [counter, dispachCounter] = useReducer(counterReducer, 0);

  const plusCount = () => {
    const action = {
      type: 'plus',
    };
    return dispachCounter(action);
  };
  const minusCount = () => {
    const action = {
      type: 'minus',
    };
    return dispachCounter(action);
  };

  // change & reset
  const [colSquares, dispachColSquares] = useReducer(colSquaresReducer, []);

  const addRedSquares = () => {
    const action = {
      type: 'add_red',
    };
    return dispachColSquares(action);
  };

  const addBlueSquares = () => {
    const action = {
      type: 'add_blue',
    };
    return dispachColSquares(action);
  };

  const reset = () => {
    const action = {
      type: 'reset',
    };
    return dispachColSquares(action);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div
          className='circle'
          style={{ borderRadius: shape, background: randColor() }}
        >
          {number}
        </div>
        <button onClick={changeToCircle}>Change shape with Reducer</button>
        <button onClick={changeNumber}>Change number with Reducer</button>
        <div className='kvc'>
          {squares.map((sq, i) => (
            <div key={i} className='kv' style={{ background: sq.color }}>
              {sq}
            </div>
          ))}
        </div>
        <button onClick={addSquares}>Add squares with Reducer</button>
        <h2>{counter}</h2>
        <button onClick={plusCount}>PLUS with Reducer</button>
        <button onClick={minusCount}>MINUS with Reducer</button>
        <div className='kvc'>
          {colSquares.map((sq, i) =>
            sq ? (
              <div key={i} className='kv' style={{ background: sq }}>
                {sq}
              </div>
            ) : null
          )}
        </div>
        <button onClick={addRedSquares}>ADD RED with Reducer</button>
        <button onClick={addBlueSquares}>ADD BLUE with Reducer</button>
        <button onClick={reset}>RESET with Reducer</button>
        <br />
        <Apskritimas color={randColor()} />
        <br />
        <RandomNumbers wh='20px' c='20px' />
        <PlusMinus />
        <br />
        <AddSquares color='blue' />
        <br />
        <ChangeReset red='red' blue='blue' />
      </header>
    </div>
  );
}

export default App;
