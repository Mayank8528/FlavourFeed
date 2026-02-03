import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'
import client from '../api/client.js';

const FoodPartnerLogin = () => {
  const handleSubmit = async(e) =>{
    e.preventDefault();

    const email = e.target.email?.value?.trim();
    const password = e.target.password?.value;

    try{
      const path= '/auth/food-partner/login';
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
  }

  return (
    <div className="auth-wrap">
      <div className="auth-card" role="region" aria-labelledby="fp-login-title">
        <header className="auth-header">
          <h1 id="fp-login-title" className="auth-title">Partner sign in</h1>
          <p className="auth-subtitle">Access your FlavourFeed partner dashboard.</p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="label" htmlFor="email">Email</label>
          <input className="input" id="email" name="email" type="email" placeholder="contact@tastehub.com" autoComplete="email" />

          <label className="label" htmlFor="password">Password</label>
          <input className="input" id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />

          <button className="button" type="submit">Sign in</button>
        </form>

        <hr className="sep" />
        <div className="auth-footer">
          New partner?{' '}
          <Link className="link" to="/food-partner/register">Create account</Link>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerLogin
