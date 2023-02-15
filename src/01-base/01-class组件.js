// class Test{
//     constructor(){
//         this.a=1;
//     }
//     testa(){
//         console.log("testa");
//     }
// }

// class childTest extends Test{    //childTest继承Test所有属性
//     testb(){
//         console.log("testb");
//     }
// }


// var obj=new childTest()
// obj.testa()
// console.log(obj.a); 

import React from "react";

class Child extends React.Component {
    state={
        childMsg:'我是子组件值'
    }
    childMethods(){
        console.log('父组件调用了子组件方法');
    }
    render() {
        const { data } = this.props
        const { childMsg } = this.state
        return <div>
            {data.msg}
            <button onClick={()=>this.props.getMsg(childMsg)}>pass给父组件</button>
        </div>
    }
}

class App extends React.Component {
    Child=React.createRef()
    state = {
        msg: '我是父组件值',
        changMsg:'我没有改变'
    }
    childMsg(val) {
        console.log(val);
        this.setState({
            changMsg:val
        })
        // ref访问子组件方法
        this.Child.current.childMethods()
        // this.Child.childMethods()
    }
    render() {
        let {changMsg}=this.state
        return <div>
            {/* <Child data={this.state} getMsg={this.childMsg.bind(this)}></Child> */}
            <Child data={this.state} getMsg={(e)=>{this.childMsg(e)}} ref={this.Child}></Child>
            {/* <Child data={this.state} getMsg={(e)=>{this.childMsg(e)}} ref={node=> this.Child=node}></Child> */}
            {changMsg}
        </div>
    }
}
export default App