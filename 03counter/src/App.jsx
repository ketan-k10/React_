import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  const addValue = () => {
    console.log("Value added");
    console.log(counter);
    if(counter < 20){
      setCounter(counter +1);
    }
  }
  
  const removeValue = () => {
    console.log("Value removed");
    console.log(counter);
    if(counter > 0){
      setCounter(counter - 1);
    }
  }
  // let counter =10;
  let [counter,setCounter] =useState(15);
  return (
    <>
       <h1>Ketan Joshi</h1>
       <h3>Counter value: {counter}</h3>
       <button onClick={addValue}>Add value</button>
       <button onClick={removeValue}>  Remove value</button>
    </>
  )
}

export default App
