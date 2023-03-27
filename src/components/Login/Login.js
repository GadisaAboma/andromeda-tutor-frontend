import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
export default class Login extends Component {
  render() {
    return (
<div className="auth-wrapper">
            <div className="auth-inner">
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        
      
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <div className='mt-2'>

        <p className="forgot-password text-right">
          Already registered <Link to="/sign-up">sign up</Link>
        </p>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
      </div>
      </div>

    )
  }
}