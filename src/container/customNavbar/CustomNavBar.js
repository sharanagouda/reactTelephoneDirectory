import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem,NavDropdown , Image} from 'react-bootstrap'

export default class CustomNavBar extends Component {
  render(){
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link eventKey={1} componentClass={Link} href="/">Home</Nav.Link>
                <Nav.Link eventKey={2} componentClass={Link} href="/about" >About</Nav.Link>
                <Nav.Link eventKey={3} componentClass={Link} href="/reacttodo" >work</Nav.Link>
                <Nav.Link eventKey={4} componentClass={Link} href="/reduxtodo" >blog</Nav.Link>
                <NavDropdown title="Contact" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        
    )
  }
}