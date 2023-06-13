import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
// import Balloons from '../img/balloons.jpg';
// import Forest from '../img/forest.jpg';
// import Mountain from '../img/mountain.jpg';
// import Scenery from '../img/scenery.jpg';

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    height={800}
                    className="d-block w-100"
                    // src={Balloons}
                    alt="Balloons"/>
                    <Carousel.Caption>
                        <h3>Balloons image</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    height={800}
                    className="d-block w-100"
                    // src={Forest}
                    alt="Forest"/>
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    height={800}
                    className="d-block w-100"
                    // src={Mountain}
                    alt="Mountain"/>
                    <Carousel.Caption>
                        <h3>Mountain image</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    height={800}
                    className="d-block w-100"
                    // src={Scenery}
                    alt="Scenery"/>
                    <Carousel.Caption>
                        <h3>Scenery image</h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}

export default CarouselBoxHk;
