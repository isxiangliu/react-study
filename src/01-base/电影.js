import React, { Component } from 'react'
import './css/电影.css'
import Film from './childComponents/Film'
import Cinema from './childComponents/Cinema'
import Center from './childComponents/Center'

export default class App extends Component {
    state = {
        list: [
            {
                id: 1,
                text: '电影'
            },
            {
                id: 2,
                text: '影院'
            },
            {
                id: 3,
                text: '我的'
            },
        ],
        currentindex: 0
    }
    liClick(item, index) {
        this.setState({
            currentindex: index
        })
    }
    which() {
        switch (this.state.currentindex) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null    
        }
    }
    render() {
        return (
            <div>
                {/* {
            this.state.currentindex===0&&<Film></Film>
        }
        {
            this.state.currentindex===1&&<Cinema></Cinema>
        }
        {
            this.state.currentindex===2&&<Center></Center>
        } */}
                {
                    this.which()
                }
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li onClick={() => { this.liClick(item, index) }}
                                className={this.state.currentindex === index ? 'active' : ''}
                                key={item.id}>
                                {item.text}
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
