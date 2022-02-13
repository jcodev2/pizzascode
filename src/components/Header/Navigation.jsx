/* **************** Imports **************** */
import React from 'react'
import { NavLink } from 'react-router-dom'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Navigation = () => (
  <nav className='navigation'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/menu'>Menu</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/contact'>Contact</NavLink>
  </nav>
)

/* **************** Code Execution **************** */
export default Navigation
