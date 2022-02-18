/* **************** Imports **************** */
import React from 'react'
import { Link } from 'react-router-dom'

/* **************** Variables **************** */

/* **************** Functions **************** */
const HeroImage = () => {
  return (
    <div className='hero-image'>
      <div className='hero-image-container'>
        <div className='hero-image-content'>
          <h1>Pedro's Pizzeria</h1>
          <p>Pizza to fit any taste.</p>
          <Link to='/404'>
            <button className='btn btn-primary'>Order Now...</button>
          </Link>
          {/* -> nota: lo hice para que puedan ver la pagina 404 */}
        </div>
      </div>
    </div>
  )
}

/* **************** Code Execution **************** */
export default HeroImage
