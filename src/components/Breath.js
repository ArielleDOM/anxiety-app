import React, { Component } from "react"
import {Spring} from 'react-spring/renderprops'
import {TweenMax, Power3} from 'gsap'

export default class Breath extends Component {

  render() {
    return (
      <div className = 'circle-container'>
        <div className = "circle"></div>

      </div>
    )
  }
}