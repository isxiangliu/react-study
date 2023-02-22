import React, { memo, useMemo, useState } from 'react'

export default function App() {
    console.log('App');
    const [count, setCount] = useState(0)
    const [name, setName] = useState('rose')
    const data = useMemo(()=>{
        return {
            name
        }
    },[name])
    return (
        <div>
            <div>
                {count}
                <button onClick={()=>setCount(count+1)}>update count </button>
                <Child data={data}/>
            </div>
        </div>
    )
}

const Child=memo((props)=> {
    console.log('Child');
    const {name}=props.data
  return (
    <div>
      {name}
    </div>
  )
})


// 1、useCallback优化针对于子组件渲染，返回值是函数。
// 2、useMemo优化针对于当前组件高开销的计算。返回值是缓存的变量。
