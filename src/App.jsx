/* **************** Imports **************** */
import React from 'react'
import logo from './assets/img/logo.png'
import Footer from './components/Footer/Footer'
import GoTop from './components/GoTop'
import Header from './components/Header/Header'
import Router from './components/Router'
// import getImage from './utilities/functions/getImage'

/* **************** Variables **************** */

/* **************** Functions **************** */
const onClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
const onScroll = () => {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    const goTop = document.querySelector('.go-top')
    if (scrollTop > 100) {
      goTop.classList.remove('hidden')
    } else {
      goTop.classList.add('hidden')
    }
  })
}

function App() {
  return (
    <>
      {/* Header */}
      <Header logo={logo} title='Pizzas' />
      {/* Routes */}
      <Router />
      {/* go top */}
      <GoTop onClick={onClick} onScroll={onScroll} />
      {/* Footer */}
      <Footer />
    </>
  )
}

/* **************** Code Execution **************** */
export default App
