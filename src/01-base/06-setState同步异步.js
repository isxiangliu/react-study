import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 1
    }
    add1 = () => {
        //setState 处在同步逻辑中、异步更新状态，更新真实dom
        this.setState({
            count: this.state.count + 1
        },()=>{
            console.log(this.state.count);
        })
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        })
    }
    add2 = () => {
        //setState 处在异步逻辑中、同步更新状态，同步更新真实dom   
        //setState 接受第二个参数：回调函数，状态和dom更新完后就会被触发
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            },()=>{
                console.log(this.state.count);
            })
            this.setState({
                count: this.state.count + 1
            })
            this.setState({
                count: this.state.count + 1
            })
        }, 0)
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.add1}>add1</button>
                <button onClick={this.add2}>add2</button>
            </div>
        )
    }
}
