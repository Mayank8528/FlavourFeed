import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'

const AuthLanding = () => {
  return (
    <div className="auth-wrap">
      <div className="auth-card" role="region" aria-labelledby="auth-landing-title">
        <header className="auth-header">
          <h1 id="auth-landing-title" className="auth-title">Welcome to FlavourFeed</h1>
          <p className="auth-subtitle">Choose how you want to sign up.</p>
        </header>

        <div className="auth-form" style={{gap:16}}>
          <Link className="button" to="/user/register">Register as normal user</Link>
          <Link className="button" to="/food-partner/register">Register as food partner</Link>
        </div>

        <hr className="sep" />
        <div className="auth-footer">
          Already registered? <Link className="link" to="/user/login">User sign in</Link> ·{' '}
          <Link className="link" to="/food-partner/login">Partner sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default AuthLanding
