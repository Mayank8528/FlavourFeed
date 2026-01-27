import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'

const FoodPartnerRegister = () => {
  return (
    <div className="auth-wrap">
      <div className="auth-card" role="region" aria-labelledby="fp-register-title">
        <header className="auth-header">
          <h1 id="fp-register-title" className="auth-title">Register your restaurant</h1>
          <p className="auth-subtitle">Join FlavourFeed as a food partner.</p>
        </header>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label className="label" htmlFor="restaurant">Restaurant name</label>
          <input className="input" id="restaurant" name="restaurant" type="text" placeholder="Taste Hub" autoComplete="organization" />

          <label className="label" htmlFor="email">Contact email</label>
          <input className="input" id="email" name="email" type="email" placeholder="contact@tastehub.com" autoComplete="email" />

          <label className="label" htmlFor="password">Password</label>
          <input className="input" id="password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" />

          <button className="button" type="submit">Create partner account</button>
        </form>

        <hr className="sep" />
        <div className="auth-footer">
          Already a partner? <Link className="link" to="/food-partner/login">Sign in</Link>
          {' '}· Want a normal user account? <Link className="link" to="/user/register">User register</Link>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
