import React, { Component } from "react"
import ReactLoading from 'react-loading'
import "bootstrap/dist/css/bootstrap.css"

export default class Loading extends Component {

  render() {

    return (
        <div className = "bg-dim loading-screen">
            <ReactLoading type={"bars"} color={"white"}></ReactLoading>
        </div>
    )
  }
}