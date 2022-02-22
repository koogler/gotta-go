import React, { useContext, useState, useEffect } from 'react';
import './Login.scss';
import PropTypes from 'prop-types';
import { LocationsContext } from '../../context/LocationsContext';
import LocationFind from '../../api/LocationFind';



export default function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { database, setDatabase } = useContext(LocationsContext)

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

  console.log(database)

  const handleSubmit = (event) => {

    event.preventDefault();

    let { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
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
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

