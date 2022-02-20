/* **************** Imports **************** */

/* **************** Variables **************** */

/* **************** Functions **************** */
const onScroll = () => {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    const goTop = document.querySelector('.go-top')
    if (scrollTop > 100) {
      goTop.classList.remove('hidden')
    } else {
      goTop.classList.add('hidden')
    }
  })
}

/* **************** Code Execution **************** */
export default onScroll
