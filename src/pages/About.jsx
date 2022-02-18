/* **************** Imports **************** */
import React from 'react'
import Container from '../components/Container/Container'
import getImage from '../utilities/functions/getImage'

/* **************** Variables **************** */
const memeBanner = getImage('meme-banner')

/* **************** Functions **************** */
const About = () => {
  return (
    <>
      <div className='hero-image hero-image-about'>
        <div className='hero-image-overlay' />
      </div>
      <Container>
        <h2 className='title'>Location</h2>
        <span className='line' />
        <div className='about-content'>
          <div className='about-content-text'>
            <p>
              Our history dates back to 1935, when our dear Mrs. Amy opened the
              first pizzeria located on Av. Juan Avellaneda
            </p>
          </div>
          <div className='about-content-text'>
            <p>
              Our history dates back to 1935, when our dear Mrs. Amy opened the
              first pizzeria located on Av. Juan Avellaneda
            </p>
          </div>
          <div className='about-content-text'>
            <p>
              Our history dates back to 1935, when our dear Mrs. Amy opened the
              first pizzeria located on Av. Juan Avellaneda
            </p>
          </div>
        </div>
        <div className='about-content-image'>
          <img src={memeBanner} alt='meme' />
        </div>
      </Container>
    </>
  )
}

/* **************** Code Execution **************** */
export default About
