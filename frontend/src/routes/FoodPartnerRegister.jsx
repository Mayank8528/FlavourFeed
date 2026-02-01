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

        <form
          className="auth-form"
          onSubmit={(e) => e.preventDefault()}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px' }}
        >
          <div className="field" style={{ display: 'flex', flexDirection: 'column', gridColumn: '1 / -1' }}>
            <label className="label" htmlFor="businessName">Business name</label>
            <input className="input" id="businessName" name="businessName" type="text" placeholder="Taste Hub" autoComplete="organization" />
          </div>

          <div className="field" style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="label" htmlFor="contactName">Contact Name</label>
            <input className="input" id="contactName" name="contactName" type="text" placeholder="Jane Doe" autoComplete="name" />
          </div>

          <div className="field" style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="label" htmlFor="phone">Phone</label>
            <input className="input" id="phone" name="phone" type="tel" placeholder="(555) 123-4567" autoComplete="tel" />
          </div>

          <div className="field" style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="label" htmlFor="email">Email</label>
            <input className="input" id="email" name="email" type="email" placeholder="contact@tastehub.com" autoComplete="email" />
          </div>

          <div className="field" style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="label" htmlFor="password">Password</label>
            <input className="input" id="password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" />
          </div>

          <div className="field" style={{ display: 'flex', flexDirection: 'column', gridColumn: '1 / -1' }}>
            <label className="label" htmlFor="address">Address</label>
            <input className="input" id="address" name="address" type="text" placeholder="123 Market St, City" autoComplete="street-address" />
          </div>

          <button className="button" type="submit" style={{ gridColumn: '1 / -1' }}>Create partner account</button>
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
