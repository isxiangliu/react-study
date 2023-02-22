import React, { useCallback, useState } from 'react'

export default function App() {
    const [name,setName]=useState('liuxiang')
    const [age,setAge]=useState(18)
    const [text,setText]=useState('')
    const [list,setList]=useState([11,22,33])
    // const inputChange=(e)=>{
    //       console.log(e.target.value);
    //       setText(e.target.value)
    // }
    // const add=()=>{
    //     console.log(text);
    //     setList([...list,text])
    //     setText('')
    // }
    // const del=(index)=>{
    //     console.log(index);
    //     let newList=[...list]
    //     newList.splice(index,1)
    //     setList(newList)
    // }

    const inputChange=useCallback((e)=>{
        setText(e.target.value)
    },[])
    const add=useCallback(()=>{
        console.log(text);
        setList([...list,text])
        setText('')
    },[text,list])
    const del=useCallback((index)=>{
        console.log(index);
        let newList=[...list]
        newList.splice(index,1)
        setList(newList)
    },[list])
  return (
    <div>
      app-{name}-{age}
      <button onClick={()=>{
        setName('xiaoming')
        setAge(20)
      }}>click</button>
      <hr />
      <input type="text" onChange={inputChange} value={text}/>
      <button onClick={add}>add</button>
      <ul>
          {
              list.map((item,index)=>{
                return <li key={item}>
                    {item}-{index}
                    <button onClick={()=>del(index)}>del</button>
                </li>
              })
          }
      </ul>
      {
          !list.length && '暂无'
      }
    </div>
  )
}
