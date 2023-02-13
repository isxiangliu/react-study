import React, { Component } from 'react'

class Navbar extends Component {
    state={
        childText:'子组件'
    }
    render() {
        // let {childText} =this.props
        return (
            <div style={{ background: "red" }}>
                <button onClick={()=>{this.props.father(this.state.childText)}}>click</button>
                <span>Navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{ background: "yellow", width: '200px' }}>
                <ul>
                    <li>1111</li>
                    <li>1111</li>
                </ul>
            </div>
        )
    }
}



export default class App extends Component {
    state = {
        isshow: false
    }
    father(val){
        this.setState({
            isshow:!this.state.isshow
        })
        console.log(val);
    }
    render() {
        return (
            <div>
                <Navbar father={this.father.bind(this)} />
                {this.state.isshow && <Sidebar />}
            </div>
        )
    }
}
