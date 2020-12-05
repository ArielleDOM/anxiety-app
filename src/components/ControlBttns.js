import React from "react"
import Toggle from 'react-toggle'
import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"
import "react-toggle/style.css"

export default function ControlBttns(props){
  
    const {handleStart, handleToggle, handleVideo} = props
    const {start, darkMode, closePlayer} = props.state
    const labelBttn = start ? "STOP" : "START"
    const typeBttn = start ? "danger" : "success"

    const lightText = {"color": 'black'}
    const darkText = {"color": 'white'}

    return (
      <div>
              <div className = "control-bttns">
                <div className = "option-bttns">
                  <Button className = "open-bttn" onClick = {handleVideo} style = {{display: `${closePlayer ? 'block' : 'none'}`}}>Open Video</Button>
                  <Button className = 'start-bttn' variant= {typeBttn} onClick = {handleStart} >{labelBttn}</Button>
                </div>
                <div className = 'toggle-bttn'>
                  <span style = {darkMode ? darkText: lightText}>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  <label>
                    <Toggle
                      defaultChecked={darkMode}
                      className = "light-switch"
                      icons={{
                        checked: null,
                        unchecked: null,
                      }}
                      onChange={handleToggle} />
                    </label>
                </div>
              </div>
        </div>
    )
}
  
