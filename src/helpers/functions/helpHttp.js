/* **************** Imports **************** */

/* **************** Variables **************** */

/* **************** Functions **************** */
const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defultHeaders = {
      accept: 'application/json'
    }

    const controller = new AbortController()
    options.signal = controller.signal

    options.method = options.method || 'GET'
    options.headers = options.headers
      ? { ...defultHeaders, ...options.headers }
      : defultHeaders

    options.body = JSON.stringify(options.body) || false

    if (!options.body) delete options.body

    setTimeout(() => controller.abort(), 3000)

    return fetch(endpoint, options)
      .then((response) => {
        response.ok
          ? response.json()
          : // eslint-disable-next-line prefer-promise-reject-errors
            Promise.reject({
              error: true,
              status: response.status || 500,
              message: response.statusText || 'Internal Server Error'
            })
      })
      .catch((error) => error)
  }

  const get = (url, options = {}) => customFetch(url, options)

  const post = (url, options = {}) => {
    options.method = 'POST'
    return customFetch(url, options)
  }

  const put = (url, options = {}) => {
    options.method = 'PUT'
    return customFetch(url, options)
  }

  const del = (url, options = {}) => {
    options.method = 'DELETE'
    return customFetch(url, options)
  }

  return {
    get,
    post,
    put,
    del
  }
}

/* **************** Code Execution **************** */
export { helpHttp }
