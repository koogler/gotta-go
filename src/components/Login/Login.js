import React, { useContext, useState, useEffect } from 'react';
import './Login.scss';
import PropTypes from 'prop-types';
import { LocationsContext } from '../../context/LocationsContext';
import LocationFind from '../../api/LocationFind';
import { Link } from 'react-router-dom'
import useToken from '../Dashboard/useToken'

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


export default function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { database, setDatabase } = useContext(LocationsContext)
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await LocationFind.get("/userdata")
        setDatabase(res.data.data.users)
      } catch (err) { }
    }
    fetchData()
  }, [])

  // User Login info

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const { token, setToken } = useToken();

  const handleSubmit = async (event) => {

    event.preventDefault();

    let { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    const token = await loginUser({
      username,
      password
    });



    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        setToken(token);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>

        <div className="input-container">
          <label>Username </label>
          <input className="form--input" type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input className="form--input" type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <button className="button">
          Login
        </button>
      </form>
      <div><Link to="/register">Don't have an account? Click here to sign up.</Link></div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>
          <div className='user-info'>User is successfully logged in</div>
          <a className='user-info' href='/'>Click here to return to the home page.</a>
        </div> : renderForm}
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}