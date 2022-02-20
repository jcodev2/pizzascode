/* **************** Imports **************** */
import React from 'react'
import Container from '../components/Container/Container'
import ContactForm from '../components/Form/Form'
import { Helmet } from 'react-helmet'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | PizzasCode</title>
        <meta
          name='description'
          content='Contact us for any questions or inquiries'
        />
        <meta
          name='keywords'
          content='contact, pizzas, code, pizza, pizza code, pizza code contact'
        />
        <meta name='author' content='Jcode' />
      </Helmet>
      <Container>
        <h2 className='title'>Contact Us</h2>
        <span className='line' />
        <ContactForm />
      </Container>
    </>
  )
}

/* **************** Code Execution **************** */
export default Contact
