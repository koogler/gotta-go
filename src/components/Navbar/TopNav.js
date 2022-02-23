import React from "react"
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import "./TopNav.scss"

function TopNav() {
  return (
    <Navbar bg="dark" variant="dark" className="header">
      <Container>
        <section className="home">
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </section>
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <Link to="/locationadd" className="click">Add a new location!</Link>
        </Nav>    
      </Container>
    </Navbar>
  )

}

export default TopNav