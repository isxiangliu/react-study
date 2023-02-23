import React, { useState } from 'react'


const useMyHooks=(val)=>{
    const [value,setValue]=useState(val||'')
    const onChange=(e)=>{
        setValue(e.target.value)
    }
    return {value,onChange}
}

export default function App() {
  const myHookValue=useMyHooks('xiangliu')
  console.log(myHookValue);
  return (
    <div>
      {/* {myHookValue}-{useMyHooks('xiaoming')} */}
      <p>{myHookValue.value}</p>
      <input type="text" value={myHookValue.value} onChange={myHookValue.onChange}/>
    </div>
  )
}
