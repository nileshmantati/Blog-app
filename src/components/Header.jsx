import React from 'react';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({ onOpenModal }) {
    return (
        <div>
            <Navbar expand="lg" className=" bg-body-secondary">
                <Container>
                    <Navbar.Brand href="#home">BlogApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='' onClick={() => {
                                onOpenModal();
                            }}>Create Blog</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default Header
