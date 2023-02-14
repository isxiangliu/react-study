import React, { Component } from 'react'
import axios from 'axios'

var bus ={
   list:[],
   //订阅
   subscribe(val){
       this.list.push(val)
   },
   //发布
   publish(text){
       console.log(this.list,text);
       this.list.forEach(callback=>{
           callback&&callback(text)
       })
   }
}
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            fileList: [],
        }
        axios.get('/test.json').then((res) => {
            console.log(res.data.films);
            this.setState({
                fileList: res.data.films
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.fileList.map(item => {
                        return <FilmItem key={item.filmId} {...item}></FilmItem>
                    })
                }
                <FilmDetail ></FilmDetail>
            </div>
        )
    }
}


class FilmItem extends Component {
    render() {
        const { name, poster,text } = this.props
        return (
            <div style={{background:'red'}} onClick={()=>{
                //  console.log(text);
                bus.publish(text)
            }}>
                <img src={poster} alt={name}/>
                <h4>{name}</h4>
            </div>
        )
    }
}


class FilmDetail extends Component {
    constructor(){
        super()
        this.state={
            info:''
        }
        bus.subscribe((info)=>{
            console.log('我在FilmDetail中定义',info);
            this.setState({
                info
            })
        })
    }
  render() {
    return (
      <div style={{width:'200px',height:'200px',background:"yellow"}}>
        {this.state.info}
      </div>
    )
  }
}

