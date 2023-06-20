import React from 'react';
import { Button, Card } from "react-bootstrap";

export const ShopCard = ({title,author,price}) => {
    return (
        <div className="col">
            <Card className="m-4 text-center" bg="light">
                {/* <Card.Img
                    width={300}
                    height={400}
                    variant="top"
                    src={src}
                /> */}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {author}
                    </Card.Text>
                    {/* <Button variant="primary">Добавить в корзину</Button> */}
                    {/* <Button variant="primary" onClick={deleteBook}>Добавить в корзину</Button> */}
                </Card.Body>
                <Card.Footer>
                    {price} грн.
                </Card.Footer>
            </Card>
        </div>
    )
}
