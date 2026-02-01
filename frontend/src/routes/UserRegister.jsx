import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'
import client from '../api/client.js';

const UserRegister = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = e.target.name?.value?.trim();
    const email = e.target.email?.value?.trim();
    const password = e.target.password?.value;

    if (!fullName || !email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const registerPath = import.meta.env.VITE_REGISTER_PATH || '/user/register';
      let res = await client.post(registerPath, { fullName, email, password });

      // If 404, try a common alternative
      if (res.status === 404) {
        const altPath = '/users/register';
        console.warn(`Endpoint ${registerPath} returned 404. Trying ${altPath}...`);
        res = await client.post(altPath, { fullName, email, password });
      }

      if (res.status >= 200 && res.status < 300) {
        alert('Registration successful!');
        console.log('User registered:', res.data);
      } else {
        const message = res?.data?.message || `Registration failed (status ${res.status}).`;
        alert(message);
        console.error('Registration error response:', res);
      }
    } catch (err) {
      console.error('Registration error:', err);
      alert(err?.response?.data?.message || 'Registration failed. Please try again.');
    }
  }



  return (
    <div className="auth-wrap">
      <div className="auth-card" role="region" aria-labelledby="user-register-title">
        <header className="auth-header">
          <h1 id="user-register-title" className="auth-title">Create your account</h1>
          <p className="auth-subtitle">Sign up to start exploring FlavourFeed.</p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="label" htmlFor="name">Full name</label>
          <input className="input" id="name" name="name" type="text" placeholder="Jane Doe" autoComplete="name" />

          <label className="label" htmlFor="email">Email</label>
          <input className="input" id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />

          <label className="label" htmlFor="password">Password</label>
          <input className="input" id="password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" />

          <button className="button" type="submit">Sign up</button>
        </form>

        <hr className="sep" />
        <div className="auth-footer">
          Already have an account? <Link className="link" to="/user/login">Sign in</Link>
          {' '}· Prefer to register as partner? <Link className="link" to="/food-partner/register">Food partner</Link>
        </div>
      </div>
    </div>
  )
}

export default UserRegister
