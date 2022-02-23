import React from "react"
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import useToken from "../Dashboard/useToken";

import "./TopNav.scss"


function TopNav() {

  const { token, setToken } = useToken();

  return (
    <Navbar bg="dark" variant="dark" className="header">
      <Container>
        <section className="home">
          <Navbar.Brand href="/">Gotta Go</Navbar.Brand>
        </section>
        <Nav className="me-auto">
        </Nav>
        <Nav>
          {!token && (<Link to="/login" className="click">Login</Link>)}
          {!token && (<Link to="/register" className="click">Register</Link>)}
          {token && (<Link to="/logout" className="click">Logout</Link>)}
          {token && (<Link to="/locationadd" className="click">Add a new location!</Link>)}
        </Nav>
      </Container>
    </Navbar>
  )

}

export default TopNav