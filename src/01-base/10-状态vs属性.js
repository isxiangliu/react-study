import React, { Component } from 'react'

class Child extends Component{
    render(){
        return <div>
            Child-{this.props.text}
        </div>
    }
}

export default class App extends Component {
    state={
        text:'111111111'
    }
    change(){
        this.setState({
            text:'2222222'
        })
    }
  render() {
    return (
      <div>
          <button onClick={()=>{this.change()}}>Child-父</button>
        <Child text={this.state.text}/>
      </div>
    )
  }
}
