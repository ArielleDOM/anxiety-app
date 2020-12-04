import React, { Component } from "react"
import ParticleField from 'react-particles-webgl';
import "bootstrap/dist/css/bootstrap.css"

export default class Landing extends Component {

  render() {

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <ParticleField />
      </div>
    )
  }
}