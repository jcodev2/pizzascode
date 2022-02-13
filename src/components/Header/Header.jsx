/* **************** Imports **************** */
import React from 'react'
import Navigation from './Navigation'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Header = ({ logo, title }) => (
  <header className='header'>
    <div className='header-container center-items'>
      <div className='header-logo'>
        <img src={logo} alt='logo' />
        <span>{title}</span>
      </div>
      <Navigation />
    </div>
  </header>
)

/* **************** Code Execution **************** */
export default Header
