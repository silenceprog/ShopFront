import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import  HarryPotter from "../img/booksImage/garr-potter-proklyate-ditya.png";
import  PravilaDor  from "../img/booksImage/pravila-dorozhnogo-ruhu.jpg";
import  Toreadori  from "../img/booksImage/toreadori-z-vasyuk-vki.jpg";

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src={HarryPotter}
                    alt="Balloons"/>
                    <Carousel.Caption>
                        <h3>Balloons image</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src={PravilaDor}
                    alt="Forest"/>
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src={Toreadori}
                    alt="Mountain"/>
                    <Carousel.Caption>
                        <h3>Mountain image</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* <Carousel.Item>
                    <img
                    height={800}
                    className="d-block w-100"
                    // src={Scenery}
                    alt="Scenery"/>
                    <Carousel.Caption>
                        <h3>Scenery image</h3>
                        <p> </p>
                    </Carousel.Caption>
                </Carousel.Item> */}

            </Carousel>
        );
    }
}

export default CarouselBoxHk;
