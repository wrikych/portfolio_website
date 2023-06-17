import React from 'react'
import './footer.css'
import {AiFillFacebook,AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Wrik Chakrabarti</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Expertise</a></li>
        <li><a href="#testimonials">More</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="htpps://facebook.com"><AiFillFacebook/></a>
        <a href="htpps://instagram.com"><AiFillInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Wrik Chakrabarti. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer