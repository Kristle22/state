import { useState } from 'react'
import './App.css'
import randColor from './FUNCTIONS/randColor'
import Apskritimas from './Components/010/Apskritimas'
import RandomNumbers from './Components/010/RandomNumbers'
import PlusMinus from './Components/010/PlusMinus'
import AddSquares from './Components/010/AddSquares'
import ChangeReset from './Components/010/ChangeReset'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
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
  )
}

export default App
