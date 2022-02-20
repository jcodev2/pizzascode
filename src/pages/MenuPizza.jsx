/* **************** Imports **************** */
import React from 'react'
import data from '../helpers/data/data.json'
import { Link, useParams } from 'react-router-dom'
import getImage from '../utilities/functions/getImage'
import StarRating from '../components/Star/StarRating'
import ArrowLeft from '../components/SVG/ArrowLeft'
import { Helmet } from 'react-helmet'

/* **************** Variables **************** */

/* **************** Functions **************** */
const MenuPizza = () => {
  const { id } = useParams()
  const { menuFood } = data
  const menuFoodItem = menuFood[id - 1]
  const { name, description, price, rating } = menuFoodItem

  return (
    <>
      <Helmet>
        <title>{name}</title>
        <meta name='author' content='Jcode' />
        <meta name='description' content={description} />
        <meta
          name='keywords'
          content='pizza, pizza delivery, pizza delivery in kiev, pizza delivery in kyiv, pizza delivery in ukraine, pizza delivery in ukr'
        />
      </Helmet>
      <div className='menu-pizza'>
        <Link to='/menu'>
          <div className='return-button'>
            <ArrowLeft />
          </div>
        </Link>
        <div className='menu-pizza-image'>
          <img src={getImage(`pizza-hd-${id}`)} alt={name} loading='lazy' />
        </div>
        <div className='menu-pizza-content'>
          <div className='menu-pizza-title'>
            <h3>{name}</h3>
          </div>
          <div className='menu-pizza-description'>
            <p>{description}</p>
          </div>
          <div className='menu-pizza-price'>
            <p>Price:</p>
            <p>${price}</p>
          </div>
          <div className='menu-pizza-rating'>
            <p>Rating:</p>
            <StarRating rating={rating} />
          </div>
        </div>
      </div>
    </>
  )
}

/* **************** Code Execution **************** */
export default MenuPizza
