import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            fileList: [],
            text:''
        }
        axios.get('/test.json').then((res) => {
            console.log(res.data.films);
            this.setState({
                fileList: res.data.films
            })
        })
    }
    text(val){
        this.setState({
            text:val
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.fileList.map(item => {
                        return <FilmItem key={item.filmId} {...item} onEvent={(e)=>{this.text(e)}}></FilmItem>
                    })
                }
                <FilmDetail {...this.state}></FilmDetail>
            </div>
        )
    }
}


class FilmItem extends Component {
    render() {
        const { name, poster,text } = this.props
        return (
            <div style={{background:'red'}} onClick={()=>{
                this.props.onEvent(text)
            }}>
                <img src={poster} alt={name}/>
                <h4>{name}</h4>
            </div>
        )
    }
}


class FilmDetail extends Component {
  render() {
    return (
      <div style={{width:'200px',height:'200px',background:"yellow"}}>
        {this.props.text}
      </div>
    )
  }
}

