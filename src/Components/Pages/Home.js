import React from 'react';
import CarouselBoxHk from "../CarouselBoxHk";
import { Container, Button, Card } from "react-bootstrap";
import HarryPotter from "../../img/booksImage/garr-potter-proklyate-ditya.png";
import PravilaDor from "../../img/booksImage/pravila-dorozhnogo-ruhu.jpg";
import Toreadori from "../../img/booksImage/toreadori-z-vasyuk-vki.jpg";
import { Link } from 'react-router-dom';



const Home = ({ books, getBook,getNewBook }) => {
    if (!books || !Array.isArray(books)) {
        return null;
    }

    const massImg = [HarryPotter, PravilaDor, Toreadori]

    return (
        <Container>
            <CarouselBoxHk />
            <h2 className="text-center m-4">Книги</h2>
            <div className="row">
                <Button variant="primary" onClick={getNewBook}>new</Button>
                {books && books?.map((item, index) => (
                    <div className="col" key={index}>
                        <Card className="m-4 text-center" bg="light">
                            <Card.Img
                                style={{ width: '200px', height: '200px' }}
                                src={massImg[index]}
                            />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.author}</Card.Text>

                                {/* <Button variant="primary" onClick={deleteBook}>Delete</Button> */}
                                {/* <Button variant="primary" onClick={() => getBook(item.id)}>
                                    <Link to={"/books/" + item.id} style={{ color: 'white' }}>Добавить в корзину</Link>
                                </Button> */}
                            </Card.Body>
                            <Card.Footer>{item.price} грн.</Card.Footer>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>

    );
}
export default Home;
