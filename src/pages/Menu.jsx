/* **************** Imports **************** */
import React from 'react'
import CardMenu from '../components/Card/CardMenu'
import Container from '../components/Container/Container'
import data from '../helpers/data/data.json'
import getImage from '../utilities/functions/getImage'

/* **************** Variables **************** */
const pizzasImage = {
  1: getImage('pizza-1'),
  2: getImage('pizza-2'),
  3: getImage('pizza-3'),
  4: getImage('pizza-4'),
  5: getImage('pizza-5'),
  6: getImage('pizza-6'),
  7: getImage('pizza-7'),
  8: getImage('pizza-8'),
  9: getImage('pizza-9'),
  10: getImage('pizza-10')
}

/* **************** Functions **************** */
const Menu = () => {
  const { menuFood } = data

  return (
    <>
      <Container>
        <div className='center-flex'>
          <h2 className='title'>Menu</h2>
          <span className='line' />
          <p className='subtitle'>Find your favorite pizza</p>
          <div className='menu'>
            {menuFood.map(({ id, name, description, price, rating }) => (
              <CardMenu
                key={id}
                id={id}
                name={name}
                image={pizzasImage[id]}
                description={description}
                price={price}
                rating={rating}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

/* **************** Code Execution **************** */
export default Menu
