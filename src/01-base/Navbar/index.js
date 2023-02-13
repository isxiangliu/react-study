import React, { Component } from 'react'
import propTypes from 'prop-types'
console.log(propTypes);

export default class Navbar extends Component {
    state={

    }
    //类属性
    static propTypes={
        title:propTypes.string,
        leftShow:propTypes.bool
     }
     //默认值
     static defaultProps={
         leftShow:true
     }
    //属性是父组件传来，this.props
  render() {
      console.log(this.props);
      let {title,leftShow}=this.props
    return (
      <div>
          {leftShow && <button >返回</button>}
        {title}
        <button >回家</button>
      </div>
    )
  }
}

//接受属性类型
// Navbar.propTypes={
//    title:propTypes.string,
//    leftShow:propTypes.bool
// }