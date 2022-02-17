/* **************** Imports **************** */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import MenuPizza from '../pages/MenuPizza'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/menu/:id' element={<MenuPizza />} />
      <Route path='/about' element={<h2>About</h2>} />
      <Route path='/contact' element={<h2>Contact</h2>} />
      <Route path='*' element={<h2>404</h2>} />
    </Routes>
  )
}

/* **************** Code Execution **************** */
export default Router
