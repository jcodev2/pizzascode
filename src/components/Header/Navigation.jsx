/* **************** Imports **************** */
import React from 'react'
import { NavLink } from 'react-router-dom'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Navigation = () => {
  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <nav className='navigation'>
      <NavLink onClick={onClick} to='/'>
        Home
      </NavLink>
      <NavLink onClick={onClick} to='/menu'>
        Menu
      </NavLink>
      <NavLink onClick={onClick} to='/about'>
        About
      </NavLink>
      <NavLink onClick={onClick} to='/contact'>
        Contact
      </NavLink>
    </nav>
  )
}

/* **************** Code Execution **************** */
export default Navigation
