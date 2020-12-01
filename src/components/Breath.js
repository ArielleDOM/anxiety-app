import React, { Component } from "react"
import Loading from './Loading'
import "bootstrap/dist/css/bootstrap.css"
import ocean from '../images/backgrounds/cloud-ocean.jpg'
import night from '../images/backgrounds/night-sky.jpg'

export default class Breath extends Component {
  constructor(){
    super()
    this.state = {
      classNames: "",
      darkMode: false,
      start: false,
      done: undefined
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleStart = this.handleStart.bind(this)
    
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ done: true }));
    }, 1500);
  }

  handleStart (event){
    event.preventDefault()
    this.setState({
      classNames: this.state.classNames ? "" : "animation" ,
      start:!this.state.start,
    })
  }

  handleToggle(event) {
    event.preventDefault()

    this.setState({
      darkMode: !this.state.darkMode,
    })
  }

  render() {
    const {start} = this.state
    const labelBttn = start ? "STOP" : "START"
    const displayState = start ? 'block' : 'none'

    const lightCircle = {"backgroundColor": "#e7c52d"}
    const darkCircle = {"backgroundColor": "#9c9c9c",}
    const innerLightCircle = {"backgroundColor": "#ff8a14", "display": `${displayState}`}
    const innerDarkCircle = {"backgroundColor": "#3868c2", "display": `${displayState}`}
    const lightModeBG = {"backgroundImage": `url(${ocean})`}
    const darkModeBG = {"backgroundImage": `url(${night})`}

    return (
      <div>
        {!this.state.done ? (
          <Loading />
        ) :(

            <div className= 'bg-dim breath-page' style = {this.state.darkMode ? darkModeBG: lightModeBG}>
            <div className = 'circle-container'>
              <div className = "circle" style = {this.state.darkMode ? darkCircle : lightCircle}>
                <div className = {`circle ${this.state.classNames}`}
                  style = {this.state.darkMode ? innerDarkCircle: innerLightCircle}/>
              </div>
    
              <div className = {`directions ${this.state.classNames}`}></div>
              
            </div>
    
            <div className = 'tst-bttn'>
              <button onClick = {this.handleStart}>{labelBttn}</button>
              <button onClick = {this.handleToggle}>DARKMODE</button>
            </div>
    
          </div>
        )}
      </div>
    )
  }
}