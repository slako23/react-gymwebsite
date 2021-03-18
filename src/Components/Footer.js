import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';



class Footer extends Component {
    render(){
        return(
            <div>
                <footer className="bg-success text-light">
                <Container>
                    <Row>
                        <Col>
                            <h2>BMS Fitness</h2>
                        </Col>
                        <Col>
                            <Nav>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                         </Col>
                         <Col>
                         
                         </Col>
                    </Row>
                </Container>
                </footer>
            </div>
        );
    }
}

export default Footer;