import React, { Component } from 'react'

export default class App extends Component {
    a = 1
    //   state={
    //       myText:'收藏',
    //       myShow:true
    //   }
    constructor() {
        super()
        this.state = {
            myText: '收藏',
            myShow: true,
            name:'liuxiang',
            list:['11111','22222'],
        }
    }
    render() {
        const newlist=this.state.list.map((item,index)=>{
            return <li key={index}>{item}</li>
        })
        return (
            <div>
                <h1>欢迎来到react开发-{this.state.name}</h1>
                <button onClick={() => {
                    this.setState({
                        myShow: !this.state.myShow,
                        name:'1111'
                    })
                    if (this.state.myShow) {
                        console.log('收藏');
                    } else {
                        console.log('不收藏');
                    }
                }}>{this.state.myShow ? '收藏' : '取消收藏'}</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
                <ul>
                    {newlist}
                </ul>
            </div>
        )
    }
}
