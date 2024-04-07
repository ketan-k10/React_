import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("black")

  return (
    <>
      <div style={{backgroundColor: color}} className=' h-screen w-full pt-14 flex  items-start justify-center ' >
            <div className=' bg-white rounded-xl   flex items-center  ' >
              <button onClick={()=>{setcolor("Red")}} className=' p-2 bg-red-500 m-2 rounded-xl  '>Red</button>
              <button onClick={()=>{setcolor("violet")}} className=' p-2  bg-violet-700  m-2 rounded-xl  '>violate</button>
              <button onClick={()=>{setcolor("pink")}} className=' p-2 bg-pink-600   m-2 rounded-xl  '>pink</button>
              <button onClick={()=>{setcolor("blue")}} className=' p-2 bg-blue-600  m-2 rounded-xl  '>blue</button>
              <button onClick={()=>{setcolor("yellow")}} className=' p-2 bg-yellow-600  m-2 rounded-xl  '>yellow</button>
              <button onClick={()=>{setcolor("green")}} className=' p-2 bg-green-600  m-2 rounded-xl  '>green</button>
              <button onClick={()=>{setcolor("lavender")}} className=' p-2  bg-gray-300    m-2 rounded-xl  '>lavender</button>

            </div>
      </div>
    </>
  )
}

export default App
