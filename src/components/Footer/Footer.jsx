/* **************** Imports **************** */
import React from 'react'
import Copyright from '../SVG/Copyright'
import Custom from '../SVG/Custom'
import Facebook from '../SVG/Facebook'
import Instagram from '../SVG/Instagram'
import PolitePrivacy from '../SVG/PolitePrivacy'
import Twitter from '../SVG/Twitter'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content footer-center'>
        <div className='social-media'>
          <li>
            <h5>Faceebok</h5>
            <Facebook />
          </li>
          <li>
            <h5>Instagram</h5>
            <Instagram />
          </li>
          <li>
            <h5>Twitter</h5>
            <Twitter />
          </li>
        </div>
        <hr />
        <div className='copyright'>
          <li>
            <h5>Copyright</h5>
            <Copyright />
          </li>
          <li>
            ;<h5>Custom Hooks</h5>
            <Custom />
          </li>
          <li>
            <h5>Polite Privacy</h5>
            <PolitePrivacy />
          </li>
        </div>
      </div>
    </footer>
  )
}

/* **************** Code Execution **************** */
export default Footer
