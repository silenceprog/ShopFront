import React, { Component, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { ShopCard } from './ShopCard';

export const BackConnection = () => {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [books, setBooks] = useState([]);

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   fetch("http://localhost:8080/books/create", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" }
  //     body: JSON.stringify()
  //   })
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setBooks(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }

  useEffect(() => {
    fetch("http://localhost:8080/books/all")
      .then(res => res.json())
      .then((result) => {
        setBooks(result);
      }
      )
    }, [])

  return (
    <>
     {books.map((item, index) => (
        <ShopCard 
        key={item.id}
        title={item.title} 
        author={item.author}
        price={item.price}
        />
        ))}
    </>
  );
}

