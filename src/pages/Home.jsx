/* **************** Imports **************** */
import React from 'react'
import { Helmet } from 'react-helmet'
import Card from '../components/Card/Card'
import Container from '../components/Container/Container'
import HeroImage from '../components/HeroImage/HeroImage'
import data from '../helpers/data/data.json'
import getImage from '../utilities/functions/getImage'

/* **************** Variables **************** */
const locationImages = {
  1: getImage('location-1'),
  2: getImage('location-2'),
  3: getImage('location-3'),
  4: getImage('location-4')
}

/* **************** Functions **************** */
const Home = () => {
  const { location } = data

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Home page' />
      </Helmet>
      <HeroImage />
      <Container>
        <div className='location'>
          <h2 className='title'>Location</h2>
          <span className='line' />
          <p className='subtitle'>
            Find us at our best restaurants in the city, located at:
          </p>
        </div>
        <div className='location-list'>
          {location.map(({ id, address, description }) => (
            <Card
              key={address}
              addres={address}
              description={description}
              image={locationImages[id]}
            />
          ))}
        </div>
      </Container>
    </>
  )
}

/* **************** Code Execution **************** */
export default Home
