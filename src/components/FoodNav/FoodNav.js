import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodNav.css';

const FoodNav = () => {
    return (
        <div>
            <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto nav">
                    <Link to="/breakfast">Breakfast</Link>
                    <Link to="/lunch">Lunch</Link>
                    <Link to="/dinner">Dinner</Link>                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default FoodNav;