import React, { Component } from 'react'

export default class App extends Component {
    componentWillMount() {
        console.log('componentWillMount-------------Dom挂载中');  //可以访问、并修改state
    }
    componentDidMount() {
        console.log('componentDidMount---------------真实Dom已挂载');
        //数据请求
        //订阅函数调用
        //setInterval
        //基于创建的完的dom进行  初始化...., BetterScroll
    }
    render() {
        console.log('render');
        return (
            <div>

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
componentWillUnmount：在删除组件之前进行清理操作，比如计时器和事件监听器

*/


