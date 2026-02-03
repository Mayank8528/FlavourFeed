import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'
import client from '../api/client'

const UserLogin = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email?.value?.trim();
    const password = e.target.password?.value;

    try{
      const path= '/auth/user/login';
      const res = await client.post(path , {email, password});  // post in (this path , {this payload})
      if(res.status >= 200){
        alert('log in successful');
      }
      else{
        alert('Login failed');
      }
    }
    catch(err){
      logger.error(err);
      alert(err?.response?.data?.message || 'Registration failed. Please try again.');
    }






  };

  return (
    <div className="auth-wrap">
      <div className="auth-card" role="region" aria-labelledby="user-login-title">
        <header className="auth-header">
          <h1 id="user-login-title" className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">Sign in to continue to FlavourFeed.</p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="label" htmlFor="email">Email</label>
          <input className="input" id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />

          <label className="label" htmlFor="password">Password</label>
          <input className="input" id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />

          <button className="button" type="submit">Sign in</button>
        </form>

        <hr className="sep" />
        <div className="auth-footer">
          New here?{' '}
          <Link className="link" to="/user/register">Create an account</Link>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
