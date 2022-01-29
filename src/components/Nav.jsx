import React from 'react';
import { Navbar, Container, Nav as Navy } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <Navbar bg="light" expand="lg" className='mb-5'>
        <Container>
            <Navbar.Brand>| PHP | REACT | AXIOS | MYSQL |</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Navy className="me-auto">
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/users">Users</Link>
            </Navy>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Nav;
