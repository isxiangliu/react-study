import React, { useRef } from 'react'

export default function App() {
    const inputRef=useRef()
    const click=()=>{
        console.log(inputRef.current.value);
    }
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={()=>{click()}}>click</button>
    </div>
  )
}
