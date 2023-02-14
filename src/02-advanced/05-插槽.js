import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>
        我是子组件
        {this.props.children}
        {this.props.children[0]}
      </div>
    )
  }
}


export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
            <div>1111</div>    
            <div>2222</div>
        </Child>
      </div>
    )
  }
}
