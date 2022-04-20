/* **************** Imports **************** */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
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
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<h2>404 🥵🥵🥵🥵🥵🥵</h2>} />
    </Routes>
  )
}

/* **************** Code Execution **************** */
export default Router
