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
const ogImage = getImage('hero-image')

/* **************** Functions **************** */
const Home = () => {
  const { location } = data

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Home page' />
        <meta
          property='keywords'
          content='home, pizza, pizza delivery, pizza delivery service'
        />
        <meta property='og:title' content='Home' />
        <meta property='og:description' content='Home page' />
        <meta property='og:image' content={ogImage} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content='Home page' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:secure_url' content={ogImage} />
        <meta property='og:image:url' content={ogImage} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://pizzascode.vercel.app' />
        <meta property='og:site_name' content='Pizzas Code' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Home' />
        <meta name='twitter:description' content='Home page' />
        <meta name='twitter:image' content={ogImage} />
        <meta name='twitter:image:alt' content='Home page' />
        <meta name='twitter:image:width' content='1200' />
        <meta name='twitter:image:height' content='630' />
        <meta name='twitter:image:secure_url' content={ogImage} />
        <meta name='twitter:image:url' content={ogImage} />
        <meta name='twitter:site' content='@pizzascode' />
        <meta name='twitter:creator' content='@pizzascode' />
        <meta name='twitter:domain' content='https://pizzascode.vercel.app' />
        <meta name='twitter:app:name:iphone' content='Pizzas Code' />
        <meta name='twitter:app:id:iphone' content='id123' />
        <meta name='twitter:app:name:ipad' content='Pizzas Code' />
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
