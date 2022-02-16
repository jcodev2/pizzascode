/* **************** Imports **************** */
import React from 'react'
import CardMenu from '../components/Card/CardMenu'
import Container from '../components/Container/Container'
import data from '../helpers/data/data.json'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Menu = () => {
  const { menuFood } = data

  // console.log(menuFood)

  return (
    <>
      <Container>
        <div className='center-flex'>
          <h2 className='title'>Menu</h2>
          <span className='line' />
          <div className='menu'>
            {menuFood.map(({ id, name, description, price, image, rating }) => (
              <CardMenu
                key={id}
                id={id}
                name={name}
                description={description}
                price={price}
                image={image}
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
