import React, { forwardRef, useImperativeHandle, useRef } from "react"

// function Child(props) {
const Child = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => {
        return {
            childMethods,
        }
    })
    const { msg, passMsg } = props
    const childMsg = '我是子组件值'
    function childMethods() {
        console.log('父组件调用子组件方法');
    }
    return (
        <div>
            {msg}
            <button onClick={() => passMsg(childMsg)}>pass给父组件</button>
        </div>
    )
})
// }

function App() {
    // 函数的内部是可以使用 useRef 钩子来获取组件内的 DOM 元素。
    const ChildRef = useRef()
    const msg = "我是父组件值"
    function getSonData(val) {
        console.log(val);
        // onRef父组件调用子组件
        ChildRef.current.childMethods()
        console.log(ChildRef.current);
    }
    return (
        <div>
            <Child msg={msg} passMsg={getSonData} ref={ChildRef}></Child>
        </div>
    )
}

/*
16.8之前  //无状态组件
16.8之后  react hooks
*/
export default App