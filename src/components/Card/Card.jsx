/* **************** Imports **************** */
import React from 'react'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Card = ({ addres, description, image }) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={image} alt='pizza' loading='lazy' />
      </div>
      <div className='card-description'>
        <h3>{description}</h3>
        <p>{addres}</p>
      </div>
    </div>
  )
}

/* **************** Code Execution **************** */
export default Card
