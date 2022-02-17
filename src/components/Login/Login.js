import React, { useState } from 'react';
import './Login.scss';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div className="login-wrapper">
      <h1 className="heading">Please Log In</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input className="form--input" type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input className="form--input" type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button className="form--submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}