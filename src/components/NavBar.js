import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo_white.png"; 
import styles from "../styles/NavBar.module.css"

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
        <img src={logo} alt="logo" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link className="nav-link">
              <i>Home</i>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <i>Sign in</i>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <i>Sign up</i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;