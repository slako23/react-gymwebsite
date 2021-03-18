import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Navigation extends Component {
    render(){
        return(
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">BMS Fitness</Navbar.Brand>
                    <Nav className="mr-auto" id="header-nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;