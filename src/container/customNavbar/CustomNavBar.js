import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem,NavDropdown , Image} from 'react-bootstrap'

export default class CustomNavBar extends Component {
  render(){
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link eventKey={1} componentClass={Link} href="/"  to="/">Home</Nav.Link>
                <Nav.Link eventKey={2} componentClass={Link} href="/about"  to="/about">About</Nav.Link>
                <Nav.Link eventKey={3} componentClass={Link} href="/reacttodo"  to="/reacttodo">Telephone</Nav.Link>
                <Nav.Link eventKey={4} componentClass={Link} href="/reduxtodo"  to="/reduxtodo">reduxtodo</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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