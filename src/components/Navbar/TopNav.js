import React from "react"
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function TopNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/dashboard">Dashboard</Link>
        </Nav>
        <Nav>
          <Link to="/locationadd">Add a new location!</Link>
        </Nav>
      </Container>
    </Navbar>
  )

}

export default TopNav