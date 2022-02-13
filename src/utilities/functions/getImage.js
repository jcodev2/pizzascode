/* **************** Imports **************** */

/* **************** Variables **************** */

/* **************** Functions **************** */
const getImage = (name) => {
  const path = `/src/assets/img/${name}.jpg`
  const module = import.meta.globEager('/src/assets/img/*.jpg')
  return module[path].default
}

/* **************** Code Execution **************** */
export default getImage
