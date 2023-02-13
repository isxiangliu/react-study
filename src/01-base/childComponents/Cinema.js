import React, { Component } from 'react'
import axios from 'axios'
import BScroll from 'better-scroll'

export default class Cinema extends Component {
    constructor() {
        super()
        // axios.get('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3211318').then(res=>{
        //     console.log(res,'11');
        // })

        this.state = {
            CinemaList: [],
            myText: ''
        }

        //请求方式不写默认get
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3211318',
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16737861022410438725730305", "bc": "110100" }',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((res) => {
            // console.log(res.data);
            this.setState({
                CinemaList: res.data.data.cinemas
            })
            console.log(this.state.CinemaList);
            console.log(document.querySelectorAll('.nav'));
            new BScroll('.nav')
        })
    }
    // input = (e) => {
    //     console.log(e.target.value);
    //     let newlist = this.state.CinemaList.filter((v) => {
    //         return v.name.toUpperCase().includes(e.target.value.toUpperCase()) ||
    //             v.address.toUpperCase().includes(e.target.value.toUpperCase())
    //     })
    //     console.log(newlist);
    //     this.setState({
    //         CinemaList: newlist
    //     })
    //     console.log(this.state.CinemaList);
    // }

    getCinemaList() {
        return this.state.CinemaList.filter((v) => {
            return v.name.toUpperCase().includes(this.state.myText.toUpperCase()) ||
                v.address.toUpperCase().includes(this.state.myText.toUpperCase())
        })
    }
    render() {
        let { myText } = this.state
        return (
            <div>
                {/* <input onInput={this.input} /> */}
                <input value={myText} onChange={(e) => {
                    this.setState({
                        myText: e.target.value
                    })
                }} />
                <div className='nav' style={{ height: '500px', backgroundColor: 'yellow', overflow: 'hidden' }}>
                    <div>
                        {
                            this.getCinemaList().map((item, index) => {
                                return <div key={index} className='list'>
                                    <div>
                                        {item.name}
                                        <br></br>
                                        <span style={{ fontSize: '10px', color: 'grey' }}>{item.address}</span>
                                    </div>
                                    <div>{item.lowPrice.toFixed(2)}</div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
