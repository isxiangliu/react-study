import React, { Component } from 'react'

class Child extends Component {
    state = {
        title: '11111'
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps-----触发了', this.props.myname, nextProps);
        // 最先获得父组件传来的属性， 可以利用属性进行ajax或者逻辑处理。
        // 把属性转化成孩子自己的状态。
        this.setState({
            title: nextProps.myname
        })
    }
    componentWillUnmount() {
        console.log('componentWillUnmount--------销毁了');
        window.onresize=null
        clearInterval(this.timer)
    }
    componentDidMount(){
        window.onresize=()=>{
            console.log('resize');
        }
        this.timer = setInterval(()=>{
            console.log('111');
        },1000)
    }

    render() {
        return (
            <div>
                {this.state.title}
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        myname: 'liuxiang',
        show: true
    }
    UNSAFE_componentWillMount() {
        console.log('componentWillMount-------------Dom挂载中');  //可以访问、并修改state
    }
    componentDidMount() {
        console.log('componentDidMount---------------真实Dom已挂载');
        //数据请求
        //订阅函数调用
        //setInterval
        //基于创建的完的dom进行  初始化...., BetterScroll
    }
    UNSAFE_componentWillUpdate() {
        //没有更新最新的dom
        console.log(document.getElementById('myname').innerHTML, 'componentWillUpdate-------------老数据');
    }
    componentDidUpdate(props, state) {
        console.log(props, state);
        //更新最新的dom    缺点：执行多次render更新
        console.log(document.getElementById('myname').innerHTML, 'componentDidUpdate-------------数据更新了');
    }
    shouldComponentUpdate(props, state) {   //控制render是否更新 提高性能
        // return true; //应该更新
        //老的状态！==新的状态
        // JSON.stringify(this.state)!==JSON.stringify(state)
        if (this.state.myname !== state.myname) {
            return true
        }
        return false
    }
    render() {
        console.log('render');
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: 'zhangsan'
                    })
                }}>click</button>
                <span id='myname'>{this.state.myname}</span>
                <Child myname={this.state.myname}></Child>
                <hr />
                <button onClick={() => {
                    this.setState({
                        show: !this.state.show
                    },()=>{
                        console.log(this.state);
                    })
                    console.log('222');
                }}>click</button>
                {this.state.show && <Child />}
            </div>
        )
    }
}

/*

1.初始化阶段
componentWillMount: render之前最后一次修改状态
render:只能访问this.props和this.state，不允许修改状态和DOM输出
componentDidMount：成功render并渲染完成真实DOM之后触发，可以修改DOM

2. 运行中阶段
componentWillReceiveProps:父组件修改属性触发
shouldComponentUpdate:返回false会阻止render调用
componentWillUpdate:不能修改属性和状态
render：只能访问this.props和this.state，不允许修改状态和DOM输出
componentDidUpdate:可以修改DOM

3. 销毁阶段
componentWillUnmount: 在删除组件之前进行清理操作，比如计时器和事件监听器

*/


