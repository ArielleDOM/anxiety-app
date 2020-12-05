import React, { Component } from "react"
import Toggle from 'react-toggle'
import Loading from './Loading'
import ReactPlayer from "react-player"
import ControlsBttns from './ControlBttns'
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
      videoPlayer: "open",
      darkMode: false,
      start: false,
      done: undefined,
      closePlayer: false,
      url: "https://youtu.be/vPhg6sc1Mk4"
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.handleVideo = this.handleVideo.bind(this)
    
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

  handleResize(event){
    event.preventDefault()
    if(window.innerWidth < 415){
      this.setState({
        closePlayer: true
      })
    }
  }

  handleVideo (event){
    event.preventDefault()
    this.setState({
      videoPlayer: this.state.closePlayer ? "open" : "close" ,
      closePlayer: !this.state.closePlayer
    })
  }

  render() {
    const {start, darkMode, url, closePlayer} = this.state
    const labelBttn = start ? "STOP" : "START"
    const typeBttn = start ? "danger" : "success"
    const displayState = start ? 'block' : 'none'

    const lightCircle = {"backgroundColor": "#e7c52d"}
    const darkCircle = {"backgroundColor": "#9c9c9c",}
    const innerLightCircle = {"backgroundColor": "#ff8a14", "display": `${displayState}`}
    const innerDarkCircle = {"backgroundColor": "#3868c2", "display": `${displayState}`}
    const lightModeBG = {"backgroundImage": `url(${ocean})`}
    const darkModeBG = {"backgroundImage": `url(${night})`}
    const lightText = {"color": 'black'}
    const darkText = {"color": 'white'}

    window.addEventListener('resize', this.handleResize)

    console.log(this.state)

    return (
      <div>
        {!this.state.done ? (
          <Loading />
        ) :(
            <div className= 'bg-dim breath-page' style = {this.state.darkMode ? darkModeBG: lightModeBG}>
              <ControlsBttns state = {this.state} handleStart = {this.handleStart} handleToggle = {this.handleToggle} handleVideo = {this.handleVideo}/>
              {/* <div className = "control-bttns">
                <div className = "option-bttns">
                  <Button className = "open-bttn" onClick = {this.handleVideo} style = {{display: `${closePlayer ? 'block' : 'none'}`}}>Open Video</Button>
                  <Button className = 'start-bttn' variant= {typeBttn} onClick = {this.handleStart} >{labelBttn}</Button>
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
              </div> */}
              <div className = "content">
                    <Form className = {`video-player ${this.state.videoPlayer}`}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label style  = {{color: 'white'}}>Search Video</Form.Label>
                        <Form.Control type="url" placeholder="Enter URL" name = 'url' onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                      </Form.Group>
                      <ReactPlayer className = 'video' url={url} controls = {true} volume = {0.2}  width = "100%" height = "100%"/>
                      <br></br>
                      <Button className = "close-bttn" variant="secondary" onClick = {this.handleVideo} >Close</Button>
                  </Form>
                  <div className = 'circle-container'>
                    <div className = "circle" style = {this.state.darkMode ? darkCircle : lightCircle}>
                      <div className = {`circle ${this.state.classNames}`}
                        style = {darkMode ? innerDarkCircle: innerLightCircle}/>
                    </div>
                    <div className = {`directions ${this.state.classNames}`}></div>
                  </div>
                    {/* <div className = 'empty-div'></div> */}
                </div>
              </div>
          )}
      </div>
    )
  }
}
