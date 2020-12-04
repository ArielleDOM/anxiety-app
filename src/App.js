
import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Breath from './components/Breath'
import Landing from './components/Landing'
import Particles from './components/Particles'
import Nav from './components/Nav'
import './App.css';

function App () {
  return (
    <div>
        <Nav/>
       <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path = "/breath" component = {Breath}/>
          <Route path = "/distract/snow" component = {Particles}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
