import React, { useState } from 'react'

const UserContext = React.createContext()
export default function App() {
    const [name,setName]=useState('xiangliu')
    const click=()=>{
        setName('yangzhang')
    }
    return (
        <UserContext.Provider value={name}>
            <div>
                <ComponentC />
                <button onClick={click}>点击所有子组件重新渲染</button>
            </div>
        </UserContext.Provider>

    )
}

function ComponentC() {
    console.log('111');
    return (
        <ComponentE />
    )
}

function ComponentE() {
    console.log('222');
    return (
        <div>
            <ComponentF />
        </div>
    )
}
function ComponentF() {
    console.log('333');
    let name=React.useContext(UserContext)
    return (
        <div>
            {/* color在父组件改变-子组件会重新渲染 */}
            穿透-{name}
        </div>
    )
}


// 
