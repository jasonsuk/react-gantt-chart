import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg" className="px-4">
                <LinkContainer to="/">
                    <Navbar.Brand>Gantt chart</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/">
                            <Nav.Link to="/">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link to="/">About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;
