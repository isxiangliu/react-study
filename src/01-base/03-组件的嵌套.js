import React, { Component } from 'react'
import './css/01-index.css'

class Navbar extends Component {
    render() {
        let myName="刘响"
        let obj={
            color:'red',
            backgroundColor:'grey'
        }
        return (
            <div>
                Navbar{10+20}-{myName}-{10>20?'aaa':'bbb'}
                <div style={obj}>样式</div>
                <div style={{color:'red'}}>样式</div>
                <div className='active'>1111111111111</div>
                <Child />
            </div>
        )
    }
}
class Child extends Component {
    render() {
        return (
            <div>
                Child
            </div>
        )
    }
}
function Swiper() {
    return (
        <div>
            Swiper
        </div>
    )

}
const Tabbar = () => <div>Tabbar</div>

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}
