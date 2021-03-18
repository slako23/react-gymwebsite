import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




class Content extends Component {
    render(){
        return(
            <div>
                <Container>
                    <h2 className="text-center">Client Success Story:</h2>
                    <Row>
                        <Col>
                            <img src="oldman-workout.jpg" alt="man working out"></img>
                        </Col>
                        <Col>
                            <h2>Julius Motombo</h2>
                            <p>
                            There’s resilience and then there’s Julius. Julius endured a lifetime of trauma from escaping the Rwandan Genocide through all the way through being diagnosed with cancer. After years of chemo-therapy and beating cancer, Julius took the opportunity to take his life back. At 67, Julus is now in the best shape of his life and has found a loving and supportive community at BMS Fitness.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h2 className="text-center">Come Visit Us Today</h2>
                    <Row>
                        <Col>

                        </Col>
                        <Col>
                         
                         </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Content;











