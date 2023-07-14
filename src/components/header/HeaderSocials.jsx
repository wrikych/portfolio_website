import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaKaggle} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/wrikych/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/wrikych/" target="_blank"><BsGithub/></a>
        <a href="https://www.kaggle.com/wrikchakrabarti" target="_blank"><FaKaggle/></a>
    </div>
  )
}

export default HeaderSocials