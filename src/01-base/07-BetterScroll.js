import React, { Component } from 'react'
import BetterScroll from 'better-scroll'
export default class App extends Component {
    state = {
        list: []
    }
    add = () => {
        let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 12, 34, 56, 45, 342, 123, 56]
        this.setState({
            list: list
        },()=>{
            new BetterScroll('.nav')
        })
        //获取不到dom
        console.log(this.state.list);
        console.log(document.querySelectorAll('li'));
        new BetterScroll('.nav')

        // setTimeout(()=>{
        //     let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 12, 34, 56, 45, 342, 123, 56]
        // this.setState({
        //     list: list
        // })
        // //获取到dom
        // console.log(this.state.list);
        // console.log(document.querySelectorAll('li'));
        // new BetterScroll('.nav')
        // },0)
    }
    render() {
        return (
            <div>
                <button onClick={this.add}>add</button>
                <div className='nav' style={{height:'200px',backgroundColor:'red',overflow:'hidden'}}>
                    <ul>
                        {
                            this.state.list.map((item, index) => {
                               return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
