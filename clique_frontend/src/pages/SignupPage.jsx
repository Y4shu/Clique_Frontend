import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './styles/signuppage.css';

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setformdata] = useState({
    firstName: '', lastName: '', email: '',
    password: '', confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setformdata(prev => ({ ...prev, 
      [e.target.name]: e.target.value }));
  };

  const handleGoogle = () => {
//gauth eheh sounds like goth
    console.log('Google signup bulaya');
    navigate('/profile');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!formData.firstName || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {//neeche bs sample ke liye tha
      // const res = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || 'Signup failed');
      }
      const data = await res.json();
      console.log('Signup success', data);
      navigate('/profile');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="login-container">
      <div className="loginform-container">
        <button className="backb" onClick={() => navigate('/')}>
          <ArrowLeft size={20} /><span>Back to Home</span>
        </button>

        <div className="logo"><div className="logotext">CLIQUE</div></div>
        <h1 className="logintitle">Create Account</h1>

        <button className="googleb" onClick={handleGoogle}>

          Continue with Google
        </button>

        <div className="divider">
          <div className="dividerline" />
          <span className="dividertext">OR</span>
          <div className="dividerline" />
        </div>

        {error && <div className="errormsg">{error}</div>}

        <form className="loginform" onSubmit={handleSubmit}>
          <div className="formgrp">
            <input name="firstName" placeholder="First Name" required
              value={formData.firstName} onChange={handleChange}
              className="inputfield" />
          </div>
          <div className="formgrp">
            <input name="lastName" placeholder="Last Name"
              value={formData.lastName} onChange={handleChange}
              className="inputfield" />
          </div>
          <div className="formgrp">
            <input name="email" type="email" placeholder="Email" required
              value={formData.email} onChange={handleChange}
              className="inputfield" />
          </div>
          <div className="formgrp">
            <input name="password" type="password" placeholder="Password" required
              value={formData.password} onChange={handleChange}
              className="inputfield" />
          </div>
          <div className="formgrp">
            <input name="confirmPassword" type="password" placeholder="Confirm Password" required
              value={formData.confirmPassword} onChange={handleChange}
              className="inputfield" />
          </div>

          <button type="submit" className="submitb">Create Account</button>
        </form>

        <div className="switchtext">
          Already have an account?{' '}
          <span className="switchlink" onClick={() => navigate('/login')}>Sign in</span>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
