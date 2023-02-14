import React, { Component } from 'react'
import axios from 'axios'

const GlobalContext = React.createContext()
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            fileList: [],
            text:'',
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
            <GlobalContext.Provider value={{
                call: "打电话",
                sms: "短信",
                text:this.state.text,
                changeTnfo:(val)=>{
                    this.setState({
                        text:val
                    })
                }
            }}>
                <div>
                    {
                        this.state.fileList.map(item => {
                            return <FilmItem key={item.filmId} {...item} ></FilmItem>
                        })
                    }
                    <FilmDetail></FilmDetail>
                </div>
            </GlobalContext.Provider>
        )
    }
}


class FilmItem extends Component {
    render() {
        const { name, poster, text } = this.props
        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        console.log(value);
                        return <div style={{ background: 'red' }} onClick={() => {
                            console.log(text);
                            value.changeTnfo(text)
                        }}>
                            <img src={poster} alt={name} />
                            <h4>{name}</h4>
                        </div>
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}


class FilmDetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        console.log(value);
                        return <div style={{ width: '200px', height: '200px', background: "yellow" }}>
                            {value.text}
                        </div>
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}

