/* **************** Imports **************** */
import React from 'react'
import logo from './assets/img/logo.png'
import Header from './components/Header/Header'
import Router from './components/Router'
// import getImage from './utilities/functions/getImage'

/* **************** Variables **************** */

/* **************** Functions **************** */
function App() {
  return (
    <>
      <Header logo={logo} title='Pizzas' />
      <Router />
    </>
  )
}

/* **************** Code Execution **************** */
export default App
