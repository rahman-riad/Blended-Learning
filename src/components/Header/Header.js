import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
import { Container } from 'react-bootstrap';

const Header = () => {
    const activeStyle = { backgroundColor: "black", color: "white" };
    return (
        <div className="header-container">
            <Container>
                <div className="nav-bar">
                    <div className="nav-logo">
                        <img src={logo} alt="Site Logo" />
                        <h2>Blended Learning</h2>
                    </div>
                    <div className="nav-menu">
                        <NavLink activeStyle={activeStyle} className="nav-item" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav-item" to="/about">About</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav-item" to="/services">Services</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav-item" to="/custom">Custom</NavLink>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;