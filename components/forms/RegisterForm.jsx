// components/RegisterForm.js
'use client'
import React, { useState, useEffect } from 'react';
import './form.css';
import { useTheme } from '@/context/ThemeContext';
import { useRouter } from 'next/navigation';

export default function RegisterForm({ onRegister }) {
  const [styleInput, setStyleInput] = useState('input-form-auth');
  const { isDarkMode } = useTheme();
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (isDarkMode) {
      setStyleInput('input-form-auth-dark');
    } else {
      setStyleInput('input-form-auth');
    }
  }, [isDarkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 3) {
      setError('Username must be at least 3 characters long');
      return;
    }
    if (password !== rePassword) {
      setError('Passwords do not match');
      return;
    }

    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('loggedInUser', JSON.stringify(user)); // Auto-login after registration
    alert('Registration successful');
    onRegister(user); // Notify parent component about successful registration
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className='form-authentication'>
      {error && <p className="error-message">{error}</p>}
      <div className='form-group'>
        <label htmlFor="username">Username</label>
        <input
          placeholder='Enter Username'
          className={styleInput}
          type="text"
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label htmlFor="password">Password</label>
        <input
          placeholder='Enter your password'
          className={styleInput}
          type="password"
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label htmlFor="re-pass">Confirm Password</label>
        <input
          placeholder='Confirm your password'
          className={styleInput}
          type="password"
          name='re-pass'
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
      </div>
      <button className='sign-btn-Css'>Sign Up</button>
    </form>
  );
}
