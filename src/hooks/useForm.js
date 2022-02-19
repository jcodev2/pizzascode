/* **************** Imports **************** */
import { useState } from 'react'
import { helpHttp } from '../helpers/functions/helpHttp'

/* **************** Variables **************** */

/* **************** Functions **************** */
const useForm = (initialState, callback) => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }
  const handleBlur = (event) => {
    handleChange(event)
    setErrors(callback(form))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(callback(form))

    if (Object.keys(errors).length === 0) {
      setLoading(true)
      helpHttp()
        .post('https://formsubmit.co/ajax/jcode2006@gmail.com', {
          body: form,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        })
        .then((response) => {
          setLoading(false)
          setResponse(response || 'Data sent successfully')
          setForm(initialState)
          setTimeout(() => setResponse(null), 5000)
        })
    } else return false
  }

  return {
    form,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    loading,
    response
  }
}

/* **************** Code Execution **************** */
export default useForm
