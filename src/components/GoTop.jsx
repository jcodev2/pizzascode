/* **************** Imports **************** */
import React from 'react'
import AngleUp from './SVG/AngleUp'

/* **************** Variables **************** */

/* **************** Functions **************** */
const GoTop = ({ onClick, onScroll }) => {
  onScroll()

  return (
    <div className='go-top' onClick={onClick}>
      <AngleUp />
    </div>
  )
}

/* **************** Code Execution **************** */
export default GoTop
