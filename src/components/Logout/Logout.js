import { Link } from 'react-router-dom'
import useToken from '../Dashboard/useToken'
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function Logout() {

  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <div className="app">
      <div className="login-form">
        <div className="logout--title">You are now logged out.</div>
        <a href="/">Click Here to Return to the Map</a>
      </div>
    </div>
  )
}