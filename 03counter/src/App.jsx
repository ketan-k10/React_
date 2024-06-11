
import { useState } from 'react'
import './App.css'

function App(){
  
  function addValue(){
    if(counter<20) setCounter(counter + 1);
    console.log(counter);
  }
  
  function removeValue(){
    if(counter>0) setCounter(counter - 1);
    console.log(counter);

  }
  let [counter,setCounter] = useState(0);
  
    return (
    <>
    <h1>Self Project</h1>
    <h2>counter :- {counter} </h2>
    <button onClick={addValue}>Add Value </button>
  
    <button onClick={removeValue}>Remove Value</button>
    </>
    )
}

export default App