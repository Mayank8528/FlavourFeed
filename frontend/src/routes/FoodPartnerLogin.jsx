import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'

const FoodPartnerLogin = () => {
  return (
    <div className="auth-wrap">
      <div className="auth-card" role="region" aria-labelledby="fp-login-title">
        <header className="auth-header">
          <h1 id="fp-login-title" className="auth-title">Partner sign in</h1>
          <p className="auth-subtitle">Access your FlavourFeed partner dashboard.</p>
        </header>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
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
