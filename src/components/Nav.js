import React, { Component } from "react"
import { Navbar,Nav,NavDropdown} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"

export default class NavigationBar extends Component {

    render() {
      return (
          <div>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                    <Navbar.Brand href="#home">Anxiety Helper</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Options" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/breath">Breath</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Videos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Distract</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Resources</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
          </div>
      )
    }
  }
