// components/LoginForm.js
'use client';

import React, { useState, useEffect } from 'react';
import './form.css';
import { useTheme } from '@/context/ThemeContext';
import { useRouter } from 'next/navigation';
export default function LoginForm() {
  const [styleInput, setStyleInput] = useState('input-form-auth');
  const { isDarkMode } = useTheme();
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert('Login successful');
      // Save the user session
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      router.push('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-authentication'>
      {error && <p className="error-message">{error}</p>}
      <div className='form-group'>
        <label htmlFor="username">Username</label>
        <input
          className={styleInput}
          placeholder='Enter Username'
          type="text"
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label htmlFor="password">Password</label>
        <input
          className={styleInput}
          placeholder='Enter Password'
          type="password"
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className='sign-btn-Css'>Sign In</button>
    </form>
  );
}
