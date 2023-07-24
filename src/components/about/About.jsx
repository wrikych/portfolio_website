import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {BsFillCalculatorFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="pic-of-me" />
          </div>
        </div>
        
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaGraduationCap className='academics'/>
              <h3>Academics</h3>
              <h5>University of Houston - Downtown</h5>
              <small>Pursuing a BS in Data Science</small>
              <h5>Purdue University</h5>
              <small>Physics (2016-2020) </small>
            </article>
            <article className='about__card'>
              <BsFillBriefcaseFill className='employment'/>
              <h3>Employment</h3>
              <h5>Cram Crew</h5>
              <small>(2022 - ) Academic Consultant, Mock Exam Coordinator</small>
            </article>
            <article className='about__card'>
              <BsFillCalculatorFill className='experience-icon'/>
              <h3>Interests</h3>
              <small>data analysis, statistical inference, predictive modeling</small>
            </article>
          </div>

          <h2>
            What fascinates me about data is the same thing that fascinates me about life. 
          </h2>
          <p>
            I grew up in a household that nurtured a love for numbers through mathematics and music. Originally majoring in physics at Purdue University, I had my eyes set on academia.
            However, a set of disruptive circumstances forced to me to shift my perspective to more immediate responsibilities, and so I found myself in the data science stream. I am also an
            avid musician well versed in Eastern and Western music theory. I mention physics and music theory because I believe both gave me a unique scope for pattern recognition, which I've found
            is the core logic behind data science. Taking a bunch of noise and discerning a pattern from it - whether it be interpolating a function from a feature distribution or engineering
            variables to fit the constraints of a model - is something I've done my entire life. 
          </p>
          <p>
            Information, matter, life, causality in the universe: everything that governs our reality shares the same paradoxical phenomenon. Each can be reduced to 
            permutations of the same building blocks, and yet each changes inconceivably over time. Much like its biological counterpart, evolution, I have always felt that machine
            learning and data in general follow the same trend. I approach my work in much the same way. Whether developing a scaling algorithm on paper or building a full-scale model ready
            for deployment, I strive to break down my problem into its smallest parts, and build everything back up again. 
          </p>
  
          <a href="#contact" className='btn btn-primary'>Wanna Talk?</a>
        </div>
      </div>
    </section>
  )
}

export default About