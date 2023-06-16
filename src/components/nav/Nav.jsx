import React from 'react'
import './nav.css'
import {IoMdHome} from 'react-icons/io'
import {FcAbout} from 'react-icons/fc'
import {TbNotebook} from 'react-icons/tb'
import {BsPencil} from 'react-icons/bs'
import {AiOutlineProject} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoMdHome className="nav-icon"/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcAbout className="nav-icon"/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><TbNotebook className="nav-icon"/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BsPencil className="nav-icon"/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineProject className="nav-icon"/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact className="nav-icon"/></a>
    </nav>
  )
}

export default Nav