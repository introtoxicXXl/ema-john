import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import google from './google-icon.svg';

const Login = () => {
  return (
    <div className='form-container'>
      <div>
      <form>
        <h2 className='form-title'>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" placeholder='Your Email' />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" placeholder='Your Password' />
        </div>
        <input className='input-submit' type="submit" value="Login" />
        <p>New to Ema-john? <Link to="/signup">Create New Account</Link></p>
      </form>
      <p className='or'>or</p>
      <button> <img src={google} alt="" /> Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;