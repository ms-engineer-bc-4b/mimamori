// LoginForm.tsx
"use client"
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


import type { AppProps } from 'next/app'
import { AuthProvider } from '@/context/AuthContext';
import UserAuth from '@/components/userAuth/UserAuth';
const API_ENDPOINT = 'http://localhost:5000/api/family/login';
const LoginForm = () => {
  const navigate = useNavigate();
  const [family_email, setEmail] = useState('');
  const [family_password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          family_email: family_email,
          family_password: family_password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setIsLoggedIn(true);

        // Redirect to the desired page
        navigate('/login/daily_family');
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || 'Login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Network error occurred.');
    } finally {
      setIsLoading(false);
    }
  };


///
  return (
    

  
  <div>
    
   
  
   
        <h2>ログインフォーム</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="family_email">Email:</label>
            <input
              type="email"
              id="family_email"
              name="family_email"
              value={family_email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="family_password">パスワード:</label>
            <input
              type="password"
              id="family_password"
              name="family_password"
              value={family_password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div>
            <button type="submit">ログイン</button>
          </div>
        </form>
        <p>{message}</p>
       
      </div>

  );
};

export default LoginForm ;
