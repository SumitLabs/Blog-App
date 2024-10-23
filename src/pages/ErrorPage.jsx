import React from 'react'
import './error.css'
import { NavLink } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className="error_page">
      <h3>404</h3>
      <p>Page Not Found</p>
      <NavLink to="/">Go Back</NavLink>
    </div>
  )
}
