/* **************** Imports **************** */
import React from 'react'
import useForm from '../../hooks/useForm'
import Loader from '../Loader/Loader'
import MessageError from '../Messages/MessageError'
import MessageSuccess from '../Messages/MessageSuccess'

/* **************** Variables **************** */
const initialFormState = {
  name: '',
  email: '',
  message: ''
}

/* **************** Functions **************** */
const validations = (form) => {
  const errors = {}

  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  const regexComments = /^.{1,255}$/

  if (!form.name.trim()) {
    errors.name = 'The field name is required'
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'The field name only accepts letters and spaces'
  }

  if (!form.email.trim()) {
    errors.email = 'The field email is required'
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'The field email is invalid'
  }

  if (!form.message.trim()) {
    errors.message = 'The field message is required'
  } else if (!regexComments.test(form.message.trim())) {
    errors.message = 'The field message only accepts letters and spaces'
  }

  return errors
}

const ContactForm = () => {
  const {
    form,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    loading,
    response
  } = useForm(initialFormState, validations)

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          className='form-control'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <MessageError msg={errors.name} />}
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          className='form-control'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <MessageError msg={errors.email} />}
      </div>
      <div className='form-group'>
        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          id='message'
          className='form-control'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.message}
          required
        />
        {errors.message && <MessageError msg={errors.message} />}
      </div>
      <input type='submit' value='Send' className='btn btn-primary' />
      {loading && <Loader />}
      {response && <MessageSuccess msg={response} />}
    </form>
  )
}

/* **************** Code Execution **************** */
export default ContactForm
