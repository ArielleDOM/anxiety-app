import React, { Component } from "react"
import Particles from 'react-particles-js'
import particlesConfig from './particlesjs-config'
import Sound from 'react-sound';
import Loading from './Loading'
import music from '../images/Dolphin-esque-Godmode.mp3'

export default class Landing extends Component {
    constructor(){
      super()
      this.state = {
        play:true,
        done: undefined
      }

    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({ done: true });
        }, 2000);
    }

    render(){

    return (
        
        <div>
            {!this.state.done ? (
          <Loading />
        ) : (
            <div className= 'bg-dim landing-page'>
                <div className = 'snow-container'>
                <Sound
                    url={music}
                    playStatus={Sound.status.PLAYING}
                    volume = {30}
                    loop = {true}
                    />
                    <Particles params={particlesConfig} />
                </div>  
            </div>
            )}
        </div>
        )
    }   
}