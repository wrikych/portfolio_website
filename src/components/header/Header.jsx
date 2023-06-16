import React from 'react'
import './header.css'
import CTA from './CTA'
import FOUNDATION from '../../assets/foundation-logo.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Greetings, Earthling! My name is</h5>
        <h1>Wrik Chakrabarti</h1>
        <h5 className='text-light'>Machine Learning, Data Analysis</h5>
        <CTA />
        <HeaderSocials />

        <div className='foundation'>
          <img src={FOUNDATION} alt='foundation-logo'/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header