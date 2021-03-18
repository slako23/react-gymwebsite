import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';


class Hero extends Component {
    render(){
        return(
            <div>
                <Jumbotron id="hero">
                    <div class="hero-text text-light">
                        <h1>Big Man Stan Fitness</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </div>   
                </Jumbotron>
            </div>
        )
    }
}

export default Hero;











