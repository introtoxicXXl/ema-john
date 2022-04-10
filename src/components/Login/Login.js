import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='form-container'>
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
        <p>New to Ema-john?<span className='form-'>Create New Account</span></p>
      </form>
    </div>
  );
};

export default Login;