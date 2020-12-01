import React, { Component } from "react"
import ocean from '../images/backgrounds/cloud-ocean.jpg'
import night from '../images/backgrounds/night-sky.jpg'

export default class Breath extends Component {
  constructor(){
    super()
    this.state = {
      classNames: "",
      darkMode: false,
      start:false,
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.hideOrShow = this.hideOrShow.bind(this)
    
  }

  handleStart (event){
    event.preventDefault()
    this.setState({
      classNames: this.state.classNames ? "" : "animation" ,
      start:!this.state.start,
    })
    console.log(this.state)
  }

  handleToggle(event) {
    event.preventDefault()

    this.setState({
      darkMode: !this.state.darkMode,
    })
  }

  hideOrShow(){
    if(this.state.start) return 'block'
    else return 'none'
  }


  render() {
    const {start} = this.state
    const labelBttn = start ? "STOP" : "START"
    const displayState = start ? 'block' : 'none'

    return (
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
    )
  }
}



const lightCircle = {
  "background-color": "#e7c52d"
}

const darkCircle = {
  "background-color": "#9c9c9c",
}

const innerLightCircle = {
  "background-color": "#ff8a14",
  "display": "block"
}

const innerDarkCircle = {
  "background-color": "#3868c2",
  "display": "block"
}

const lightModeBG = {
  "background-image": `url(${ocean})`,
}
const darkModeBG = {
  "background-image": `url(${night})`,
}