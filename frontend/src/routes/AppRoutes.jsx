import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserRegister from './UserRegister.jsx'
import UserLogin from './UserLogin.jsx'
import FoodPartnerRegister from './FoodPartnerRegister.jsx'
import FoodPartnerLogin from './FoodPartnerLogin.jsx'
import AuthLanding from './AuthLanding.jsx'
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLanding />} />

        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
      
      </Routes>
    </Router>
  )
}

export default AppRoutes
