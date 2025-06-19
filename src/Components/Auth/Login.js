import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function AuthForm({ setLoggedIn }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === 'signup' && password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const endpoint = mode === 'login' ? 'login' : 'register';
    try {
      const res = await fetch(`http://localhost:5000/api/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        sessionStorage.setItem('auth', 'true');
        sessionStorage.setItem('token', data.token);
        setLoggedIn(true);
        alert(`${mode === 'login' ? 'Login' : 'Signup'} successful!`);
        navigate('/');
      }
       else {
        alert(data.message || `${mode} failed`);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="tab-header">
          <span
            className={mode === 'login' ? 'active' : ''}
            onClick={() => setMode('login')}
          >
            Login
          </span>
          <span
            className={mode === 'signup' ? 'active' : ''}
            onClick={() => setMode('signup')}
          >
            Sign Up
          </span>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {mode === 'signup' && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button type="submit">{mode === 'login' ? 'Login' : 'Sign Up'}</button>
        <div className="forgot-link">
          <a href="/forgot-password">Forgot password?</a>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
