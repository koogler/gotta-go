import { Link } from 'react-router-dom'


export default function Middle() {

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Thank you for your submission!</div>
        <a href="/">Return to main page.</a>
        <Link to="/locationadd">Add another location.</Link>
      </div>
    </div>
  )
}