import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function App() {
    const [list, setlist] = useState([])
    const [name, setName] = useState("liuxiang")
    useEffect(() => {   //只会执行一次
        axios.get("/test.json").then(res => {
            console.log(res.data.films);
            setlist(res.data.films)
        })
        setName(name.substring(0, 1).toUpperCase() + name.substring(1))

    }, [name])
    return (
        <div>
            {
                list.map((item, index) => {
                    return <li key={item.filmId}>{item.name}</li>
                })
            }
            <span>{name}</span>
            <button onClick={() => {
                setName('xiaoming')
            }}>click</button>
            {
                name=='Liuxiang' && <Child></Child>
            }
        </div>
    )
}

function Child () {
    useEffect(() => {       //useLayoutEffect
        window.onresize = () => {
            console.log('size');
        }
        let timer= setInterval(() => {
            console.log('111');
        }, '1000')
        
        return ()=>{
            console.log('组件销毁');
            window.onresize=null
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
           Child
        </div>
    )
}

//官方建议使用useEffect

// useEffect和useLayoutEffect有什么区别？
// 简单来说就是调用时机不同, useLayoutEffect 和原来componentDidMount & componentDidupdate一致,
// 在react完成DOM更新后马上同步调用的代码,会阻塞页面渲染。
// 而 useEffect 是会在整个页面渲染完才会调用的代码。

// 在实际使用时如果想避免页面抖动（在 useEffect里修改DOM很有可能出现)的话,
// 可以把需要操作DOM的代码放在useLayoutEffect里。在这里做点dom操作,
// 这些dom修改会和react做出的更改一起被一次性渲染到屏幕上，只有一次回流、重绘的代价。

