/* **************** Imports **************** */
import React from 'react'
import logo from './assets/img/logo.png'
import Footer from './components/Footer/Footer'
import GoTop from './components/GoTop'
import Header from './components/Header/Header'
import Router from './components/Router'
import goTop from './utilities/functions/goTop'
import onScroll from './utilities/functions/onScroll'

/* **************** Variables **************** */

/* **************** Functions **************** */

function App() {
  return (
    <>
      {/* Header */}
      <Header logo={logo} title='Pizzas' />
      {/* Routes */}
      <Router />
      {/* go top */}
      <GoTop onClick={goTop} onScroll={onScroll} />
      {/* Footer */}
      <Footer />
    </>
  )
}

/* **************** Code Execution **************** */
export default App
