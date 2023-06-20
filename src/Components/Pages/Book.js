import React, { useState } from 'react'
import { Container, Row, Col,Form,Image,Button } from 'react-bootstrap'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';

 const Book = ({ books,getComms,addComms,index }) => {

  const [rating,setRating] = useState(null);
  const [valueMes,setUpdateMes] = useState('');
  const [value, setValue] = useState('')

  const ratePosts = (ratingValue) => {
    ratingValue+=1;
   setRating(ratingValue);
  };

  return (
    <Container className='post'>
      <Row>
        <Col>
          <h1>
            {books[index].title}
          </h1>
          <p>
            Автор:{books[index].author} | Дата:{books[index].date}
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Image
            width={500}
            height={400}
            src={books.src} fluid />
          {[...Array(5)].map((_, i) => (
            <IconButton
              key={i}
              onClick={() => ratePosts(i)}
              style={{ color: (i < rating) ? 'yellow' : 'black' }}
            >
              <StarIcon />
            </IconButton>
          ))}
        </Col>
      </Row>

      <Row>
        <Col>
          <p>
            {books[index].description}
          </p>
        </Col>
      </Row>

      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Залишити коментар:</Form.Label>
          <Form.Control as="textarea"
            rows={3}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={() =>addComms(value)}>Відправити</Button>
      </Form>

      <div className='message-main'>
        {getComms() && getComms().map((comment) =>
          <div className="message-block" key={comment.id}>
            <textarea readOnly id="myTextarea" className='text-message' onChange={e => setUpdateMes(e.target.value)}>{comment.comment}</textarea>
            {/* <Button className="me-2" onClick={() => deleteMessage(comment.id)}> */}
              <DeleteIcon />
            {/* </Button> */}
            {/* <Button onClick={() => updateMessage(comment.id, valueMes)}> */}
              <EditIcon />
            {/* </Button> */}
          </div>
        )}
      </div>
    </Container>
  )
}
export default Book;
