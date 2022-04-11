import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import google from './google-icon.svg';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const handelEmailBlur = event => {
    setEmail(event.target.value);
  };
  const handelPasswordBlur = event => {
    setPassword(event.target.value);
  };
  const handelConfirmPasswordBlur = event => {
    setConfirmPassword(event.target.value);
  };
  const handelCreateUser = event =>{
    event.preventDefault();
    
  }
  return (
    <div className='form-container'>
      <div>
        <form onSubmit={handelCreateUser}>
          <h2 className='form-title'>Sign Up</h2>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handelEmailBlur} type="email" name="email" id="" placeholder='Your Email' />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handelPasswordBlur} type="password" name="password" id="" placeholder='Your Password' />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onBlur={handelConfirmPasswordBlur} type="password" name="confirm-password" id="" placeholder='Your Password' />
          </div>
          <input className='input-submit' type="submit" value="Sign Up" />
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
        <p className='or'>or</p>
        <button> <img src={google} alt="" /> Continue with Google</button>
      </div>
    </div>
  );
};

export default SignUp;