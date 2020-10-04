import React, { useState } from 'react'
import './App.css'

export default function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={()=>setCount((prevCount)=> count >= 10 ? 0 : prevCount + 1)} >Increment Counter</button>
            <button onClick={()=>setCount((prevCount)=> count <= 0 ? 0 : prevCount - 1)} >Decrement Counter</button>
            <button onClick={()=>setCount(()=> 0)} >Reset Counter</button>
        </div>
    );
}