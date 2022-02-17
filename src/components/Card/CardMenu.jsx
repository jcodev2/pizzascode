/* **************** Imports **************** */
import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from '../Star/StarRating'

/* **************** Variables **************** */

/* **************** Functions **************** */
const CardMenu = ({ id, name, description, price, image, rating }) => {
  const goTop = () => {
    window.scrollTo(0, 0)
  }

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
        <div className='card-menu-button'>
          <Link to={`/menu/${id}`} onClick={goTop}>
            Order
          </Link>
        </div>
      </div>
    </div>
  )
}

/* **************** Code Execution **************** */
export default CardMenu
