import React, { useState } from 'react';
import './App.scss';
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Login from '../Login/Login';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/dashboard">Dashboard</Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;
