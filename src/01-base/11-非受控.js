import React, { Component } from 'react'

export default class App extends Component {
  myUsername=React.createRef()

  state={
      useName:'liuxiang'
  }
  render() {
    let {useName}=this.state
    return (
        // React要编写一个非受控组件,可以 使用 ref 来从DOM 节点中获取表单数据,就是非受控组件。 
      <div>
          {/* 非受控组件 */}
          <h1>登录页</h1>
        <input type="text" ref={this.myUsername} defaultValue="liuxiang"/>
        <button onClick={()=>{
            console.log(this.myUsername.current.value);
        }}>登录</button>
        <button onClick={()=>{
            this.myUsername.current.value=''
        }}>重置</button>
        
        <hr/>

        {/* 受控组件 */}
        <h1>登录页</h1>
        <input type="text" value={this.state.useName} onChange={(e)=>{
           console.log(e.target.value);
           this.setState({
            useName: e.target.value
           })
        }}/>
        <button onClick={()=>{
           console.log(useName);
        }}>登录</button>
        <button onClick={()=>{
            this.setState({
                useName:''
            })
        }}>重置</button>

    {/* 方便传值 */}
    {/* <Child myValue={useName}/> */}
    
      </div>
    )
  }
}
