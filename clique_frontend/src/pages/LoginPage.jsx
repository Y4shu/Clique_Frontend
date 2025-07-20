import React, { useState } from 'react';
import { leftarrow } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './styles/loginpage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setformdata] = useState({
    email: '',
    password: ''
  });

  const changedinput = (e) => {
    setformdata({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submission = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      console.log('Logging in with', formData);
      navigate('/landing'); //moving to landing page after login but if u want we can change
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="login-container">
      <div className="loginform-container">
        <button 
          onClick={() => navigate('/')}
          className="backb"
        >
          <leftarrow size={20} />
          <span>Back to Home</span>
        </button>

        <div className="logo">
          <div className="logotext">CLIQUE</div>
        </div>

        <h1 className="logintitle">Welcome Back</h1>

        <form onSubmit={submission} className="loginform">
          <div className="formgrp">
            <label htmlFor="email" className="inputlabel">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={changedinput}
              required
              className="inputfield"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="formgrp">
            <label htmlFor="password" className="inputlabel">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={changedinput}
              required
              className="inputfield"
              placeholder="Your password"
            />
          </div>

          <button type="submit" className="submitb">
            LogIn
          </button>
        </form>

        <div className="switchtext">
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')} className="switchlink">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
