/* **************** Imports **************** */
import React from 'react'
import Star from '../SVG/Star'

/* **************** Variables **************** */

/* **************** Functions **************** */
const StarRating = ({ rating }) => {
  const stars = []

  for (let i = 0; i < rating; i++) {
    stars.push(<Star key={i} />)
  }

  return <div className='stars'>{stars}</div>
}

/* **************** Code Execution **************** */
export default StarRating
