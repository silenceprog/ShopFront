import React, { useState, useEffect } from "react";
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button,
    Modal
} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


import avatar from "./img/avatar.png"
import  Book  from "./Components/Pages/Book";

export default function Header() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [books, setBooks] = useState([]);
    const [comments, setComms] = useState([]);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [nameError, setNameError] = useState('Nickname не може бути порожнім')
    const [emailError, setEmailError] = useState('Email не може бути порожнім')
    const [passwordError, setPasswordError] = useState('Пароль не може бути порожнім')
    const [formValid, setFormValid] = useState(false)
    let bookId = 0;
    let userId = 1;

    const nameHandler = (e) => {
        setName(e.target.value)
        if (!e.target.value) {
            setNameError('Nickname не може бути порожнім')
        } else {
            setNameError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Некоректний email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Пароль повинен мати не менше 3 і не більше 8 символів')
            if (!e.target.value) {
                setPasswordError('Пароль не може бути порожнім')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, emailError, passwordError])

    useEffect(() => {
        fetch("http://localhost:8080/books/all")
            .then(res => res.json())
            .then((result) => {
                setBooks(result);
                console.log(result);
            }
            )
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        const user = { name, email, password }
        fetch("http://localhost:8080/users/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
            .then((response) => {
                console.log("New Student added");
            })

        setIsButtonClicked(true);
    }

    const getBook = (id) => {
        bookId = id;
        fetch("http://localhost:8080/books/" + bookId)
            .then(res => res.json())
            .then((result) => {
                setBooks(result);
                console.log(result);
            }
            )
    }


    const getNewBook = () => {
        fetch("http://localhost:8080/books/all/new")
            .then(res => res.json())
            .then((result) => {
                setBooks(result);
                console.log(result)
            }
            )
    }

    const getComms = () => {
        fetch("http://localhost:8080/comments/all")
            .then(res => res.json())
            .then((result) => {
                setComms(result);
            }
            )
        return comments;
    }

    const addComms = (value) => {
        const comm = [value, userId, bookId, 0, 0];
        fetch("http://localhost:8080/comments/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comm)
        })
    }

    const setUser = () => {

    }

    return (
        <>
            <Navbar static="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={avatar}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /> React Site
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav claccName="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>

                        <Form className="d-flex justify-content-md-end" >
                            {isButtonClicked ? (
                                <Navbar.Text>{name}</Navbar.Text>
                            ) : (
                                <Button className="ms-2" onClick={handleShow}>SignIn</Button>
                            )}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group controlId="fromBasicName">
                            <Form.Label>Nickname</Form.Label>
                            {(nameError && nameDirty) && <div style={{ color: "red" }}>{nameError}</div>}
                            <Form.Control onChange={e => nameHandler(e)} name="name"
                                value={name} onBlur={e => blurHandler(e)} type="text" placeholder="Enter nickname">
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
                            <Form.Control onChange={e => emailHandler(e)} name="email" value={email}
                                onBlur={e => blurHandler(e)} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            {(passwordError && passwordDirty) && <div style={{ color: "red" }}>{passwordError}</div>}
                            <Form.Control onChange={e => passwordHandler(e)} name="password"
                                value={password} onBlur={e => blurHandler(e)} type="password" placeholder="Enter password">
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>

                        <Button disabled={!formValid}  variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>


            <Router>
                <Routes>
                    <Route path="/" element={<Home
                        books={books}
                        getBook={getBook}
                        getNewBook={getNewBook}
                        
                    />} />
                    <Route path={"/books/:id"} element={<Book
                        books={books}
                        getComms={getComms}
                        addComms={addComms}
                        index={bookId}
                    />} />
                    {/* <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/blog" element={<Blog/>}/> */}

                </Routes>
            </Router>

        </>


    )
}