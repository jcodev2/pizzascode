/* **************** Imports **************** */
import React from 'react'

/* **************** Variables **************** */

/* **************** Functions **************** */
const CardMenu = ({ name, description, price, image, rating }) => {
  // console.table({ id, name, description, price, image, rating })

  return (
    <>
      <div className='card-menu'>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </>
  )
}

/* **************** Code Execution **************** */
export default CardMenu
