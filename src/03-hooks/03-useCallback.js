import React, { useCallback, useState } from 'react'

export default function App() {
    const [count, setcount] = useState(0)
    const [name, setName] = useState('liuxiang')
    const click=useCallback(()=>{
        setName('11')
       console.log(name);
    },[name])
    return (
        <div>
            <button onClick={() => {
                setcount(count + 1)
            }}>click+1</button>
            {count}

            <hr />
            {name}
            <button onClick={()=>click()}>click</button>
        </div>
    )
}

// useCallback(记忆函数)
// 防止因为组件重新渲染，导致方法被重新创建，起到缓存作用，只有第二个参数 变化了，才重新声明一次


//只有name改变后， 这个函数才会重新声明一次，
//如果传入空数组, 那么就是第一次创建后就被缓存, 如果name后期改变了,拿到的还是老的name。
//如果不传第二个参数，每次都会重新声明一次，拿到的就是最新的name.
