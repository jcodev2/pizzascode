/* **************** Imports **************** */
import React from 'react'
import StarRating from '../Star/StarRating'

/* **************** Variables **************** */

/* **************** Functions **************** */
const CardMenu = ({ name, description, price, image, rating }) => {
  // console.table({ id, name, description, price, image, rating })9

  return (
    <div className='card-menu'>
      <div className='card-menu-image'>
        <img src={image} alt={name} loading='lazy' />
      </div>
      <div className='card-menu-content'>
        <div className='card-menu-title'>
          <h3>{name}</h3>
        </div>
        <div className='card-menu-description'>
          <p>{description}</p>
        </div>
        <div className='card-menu-price'>
          <p>Price:</p>
          <p>${price}</p>
        </div>
        <div className='card-menu-rating'>
          <p>Rating:</p>
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  )
}

/* **************** Code Execution **************** */
export default CardMenu
