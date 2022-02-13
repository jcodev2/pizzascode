/* **************** Imports **************** */
import React from 'react'
import Card from '../components/Card/Card'
import Container from '../components/Container/Container'
import HeroImage from '../components/HeroImage/HeroImage'
import data from '../helpers/data/data.json'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Home = () => {
  const { location } = data

  // location.forEach((location) => console.log(location))

  return (
    <>
      <HeroImage />
      <Container>
        <div className='location'>
          <h2 className='title'>Location</h2>
          <span className='line' />
          <p>Find us at our best restaurants in the city, located at:</p>
        </div>
        <div className='location-list'>
          {location.map(({ address, description, image }) => (
            <Card
              key={address}
              addres={address}
              description={description}
              image={image}
            />
          ))}
        </div>
      </Container>
    </>
  )
}

/* **************** Code Execution **************** */
export default Home
