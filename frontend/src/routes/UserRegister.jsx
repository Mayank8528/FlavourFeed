import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'

const UserRegister = () => {
  return (
    <div className="auth-wrap">
      <div className="auth-card" role="region" aria-labelledby="user-register-title">
        <header className="auth-header">
          <h1 id="user-register-title" className="auth-title">Create your account</h1>
          <p className="auth-subtitle">Sign up to start exploring FlavourFeed.</p>
        </header>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
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
