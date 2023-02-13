import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    a = 100
    mytext = React.createRef()
    state = {
        list: [
            { text: 'aa', isChecked: false },
            { text: 'bb', isChecked: false },
        ]
    }
    handleClick() {
        console.log('222', this.a);
    }
    handleClicks = (evt) => {
        console.log('333', this.a, evt);
    }
    handleClick4() {
        console.log('444', this.a);
        let newlist = [...this.state.list]
        newlist.push({
            isChecked:false,
            text:this.mytext.current.value
        })
        this.setState({
            list: newlist,
        })
        this.mytext.current.value = ''
    }
    del(item, index) {
        let newlist = [...this.state.list]
        newlist.splice(index, 1)
        this.setState({
            list: newlist
        })
    }
    handleChecked(index){
        console.log(index);
        let newlist = [...this.state.list]
        newlist[index].isChecked=!this.state.list[index].isChecked
        this.setState({
            list:newlist
        })
    }
    render() {
        return (
            <div>
                <input ref={this.mytext} />
                <button onClick={() => {
                    console.log('111', this.a, this.mytext.current.value);

                }}>add1</button>
                <button onClick={this.handleClick.bind(this)}>add2</button>
                <button onClick={this.handleClicks}>add3</button>
                <button onClick={() => { this.handleClick4() }}>add4最推荐写法</button>

                <div>{
                    this.state.list.length == 0 ? '暂无数据' : <ul>
                        {
                            this.state.list.map((item, index) => {
                                return <li key={index} style={{textDecoration:item.isChecked?'line-through':''}}>
                                    <input type="checkbox" checked={item.isChecked} onChange={()=>{this.handleChecked(index)}}/>
                                    {item.text}
                                    <button onClick={() => { this.del(item, index) }}>del</button>
                                </li>

                            })
                        }
                    </ul>
                }</div>

                {/* {如果前面为真、执行后面} */}
                {this.state.list.length == 0 && '暂无数据'}

                <div className={this.state.list.length != 0 ? 'hidden' : ''}>暂无数据</div>

                {/* 富文本展示 */}
                <span dangerouslySetInnerHTML={
                    {
                        __html: `<p>666</p>`
                    }
                }></span>
            </div>
        )
    }
}

/* 
call,改变this,自动执行函数
apply,改变this,自动执行函数
bind,改变this,不会自动执行函数、手动加括号执行函数

react跟原生绑定有什么区别
React并不会真正的绑定事件到每一个具体dom的元素上，而是采用事件代理的模式：
*/

var obj1 = {
    name: "obj1",
    getName() {
        console.log(this.name)
    }
}
var obj2 = {
    name: "obj2",
    getName() {
        console.log(this.name)
    }
}

// obj1.getName.bind(obj2)()
// obj2.getName()

