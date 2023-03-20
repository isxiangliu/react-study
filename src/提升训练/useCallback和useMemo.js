import React, { memo, useCallback, useMemo, useState } from 'react'

export default function useCallback和useMemo() {
    //useMemo
    //   const [personalInfon,setPersonalInfo]=useState({
    //       name:'xiang liu',
    //       gender:'man',
    //   })
    //   function formatGender(gender) {
    //     console.log('---调用了翻译性别的方法---')
    //     return gender === 'man' ? '男' : '女'
    //   }
    //   let gender=useMemo(()=>{
    //       return formatGender(personalInfon.gender)
    //   },[personalInfon.gender])

    //   return (
    //     <div>
    //       姓名：{personalInfon.name} -- 性别:  { gender } <br/>
    //       <button onClick={()=>{
    //           setPersonalInfo({
    //             name:'Will you'
    //           })
    //       }}>点击修改名字</button>
    //     </div>
    //   )

    // useCallback
    const [parentState, setParentState] = useState(0);  //父组件的state

    //需要传入子组件的函数
    const toChildFun = useCallback(() => {
        console.log("需要传入子组件的函数");
    },[])

    return (
        <div>
            <button onClick={() => setParentState(val => val + 1)}>
                点击我改变父组件中与Child组件无关的state
            </button>
            {/* 将父组件的函数传入子组件 */}
            <Child fun={toChildFun}></Child>
            {/* <Child fun='111'></Child> */}
        </div>
    )
}


const Child = memo(() => {
    console.log("我被打印了就说明子组件重新构建了",)
    return (
        <div></div>
    )
})
//React.memo()是通过校验props中的数据是否改变的来决定组件是否需要重新渲染的一种缓存技术

// memo 如果父组件是传值 可以阻止子组件重新构建 传函数会重新构建（旧函数销毁，新函数创建，等于更新了函数地址）

// useCallBack不要每个函数都包一下，否则就会变成反向优化，useCallBack本身就是需要一定性能的
// useCallBack并不能阻止函数重新创建,它只能通过依赖决定返回新的函数还是旧的函数,从而在依赖不变的情况下保证函数地址不变
// useCallBack需要配合React.memo使用