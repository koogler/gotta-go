import React, { useContext, useState } from "react";
import { LocationsContext } from '../../context/LocationsContext';
import LocationFind from '../../api/LocationFind';
import { useNavigate, Link } from "react-router-dom";

import "./Register.scss"

export default function Register() {

  const { addUsers } = useContext(LocationsContext)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await LocationFind.post("/userdata/adduser",
        {
          username,
          password
        })
      addUsers(res.data.data.database)
      navigate('/login')
    } catch (err) { }
  }

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Register Here!</div>
        <div><Link to="/login">Already signed up? Click here to log in.</Link></div>
      </div>


      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input
              value={username}
              onChange={event => setUsername(event.target.value)}
              type="text"
              className="form-control"
              placeholder="Username" />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input
              value={password}
              onChange={event => setPassword(event.target.value)}
              type="text"
              className="form-control"
              placeholder="Password" />
          </div>
          <button className="button" onClick={handleSubmit} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );

}