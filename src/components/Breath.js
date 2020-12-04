import React, { Component } from "react"
import Toggle from 'react-toggle'
import Loading from './Loading'
import ReactPlayer from "react-player"
import {Form, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"
import "react-toggle/style.css"
import ocean from '../images/backgrounds/cloud-ocean.jpg'
import night from '../images/backgrounds/night-sky.jpg'

export default class Breath extends Component {
  constructor(){
    super()
    this.state = {
      classNames: "",
      darkMode: false,
      start: false,
      done: undefined,
      closePlayer: false,
      url: "https://youtu.be/vPhg6sc1Mk4"
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleWindow = this.handleWindow.bind(this)
    this.handleChange = this.handleChange.bind(this)
    
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ done: true });
    }, 1500);
  }

  

  handleStart (event){
    event.preventDefault()
    this.setState({
      classNames: this.state.classNames ? "" : "animation" ,
      start:!this.state.start,
    })
  }

  handleToggle() {
    this.setState({
      darkMode: !this.state.darkMode,
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleWindow(event){
    event.preventDefault()
    this.setState({
      closePlayer: !this.state.closePlayer
    })
  }

  render() {
    const {start, darkMode, url, closePlayer} = this.state
    const labelBttn = start ? "STOP" : "START"
    const displayState = start ? 'block' : 'none'

    const lightCircle = {"backgroundColor": "#e7c52d"}
    const darkCircle = {"backgroundColor": "#9c9c9c",}
    const innerLightCircle = {"backgroundColor": "#ff8a14", "display": `${displayState}`}
    const innerDarkCircle = {"backgroundColor": "#3868c2", "display": `${displayState}`}
    const lightModeBG = {"backgroundImage": `url(${ocean})`}
    const darkModeBG = {"backgroundImage": `url(${night})`}
    const lightText = {"color": 'black'}
    const darkText = {"color": 'white'}

    console.log(this.state.closePlayer)

    return (
      <div>
        {!this.state.done ? (
          <Loading />
        ) :(
            <div className= 'bg-dim breath-page' style = {this.state.darkMode ? darkModeBG: lightModeBG}>
              <Form className = 'video-player' style = {{display: `${!closePlayer ? 'block' : 'none'}`}}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label style  = {{color: 'white'}}>Search Video</Form.Label>
                  <Form.Control type="url" placeholder="Enter URL" name = 'url' onChange={this.handleChange}/>
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
                <ReactPlayer url={url} controls = {true} volume = {0.2}  width = "320px" height ="160px"/>
                <br></br>
                <Button variant="secondary" onClick = {this.handleWindow} >Close</Button>
            </Form>
            <div className = 'circle-container'>
              <div className = "circle" style = {this.state.darkMode ? darkCircle : lightCircle}>
                <div className = {`circle ${this.state.classNames}`}
                  style = {darkMode ? innerDarkCircle: innerLightCircle}/>
              </div>
    
              <div className = {`directions ${this.state.classNames}`}></div>
              
            </div>

            <div className = "control-bttns">
              <Button variant="primary" type="submit" onClick = {this.handleWindow} style = {{display: `${closePlayer ? 'block' : 'none'}`}}>Open Video</Button>
              <button onClick = {this.handleStart}>{labelBttn}</button>
            </div>
    
            <div className = 'toggle-bttn'>
            <span style = {darkMode ? darkText: lightText}>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              <label>
                <Toggle
                  defaultChecked={this.state.darkMode}
                  className = "light-switch"
                  icons={{
                    checked: null,
                    unchecked: null,
                  }}
                  onChange={this.handleToggle} />
                </label>
            </div>
          </div>
          )}
      </div>
    )
  }
}
