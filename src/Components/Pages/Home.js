import React from 'react';
import CarouselBoxHk from "../CarouselBoxHk";
import { Container, Button, Card } from "react-bootstrap";



const Home = ({books}) => {
    if (!books || !Array.isArray(books)) {
        return null; 
      }

    return (
        <Container>
            <CarouselBoxHk />
            <h2 className="text-center m-4">Книги</h2>
            <div className="row">
                {books && books?.map((item, index) => (
                    <div className="col" key={index}>
                        <Card className="m-4 text-center" bg="light">
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.author}</Card.Text>
                                <Button variant="primary">Добавить в корзину</Button>
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
