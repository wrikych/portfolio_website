import React from 'react'
import './services.css'
import {SiCheckmarx} from 'react-icons/si'

const Services = () => {
  return (
    <section id='services'>
      <h5>Services and Knowledge</h5>
      <h2>Areas of Expertise</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>
              Certified
            </h3>
          </div>

          <ul className='service__list'>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Ur mom</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Ur dad</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Ur grandparents</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Ur ancestors</p>
            </li>
          </ul>
        </article>
        {/*END OF LIST 1*/}
        <article className='service'>
          <div className="service__head">
            <h3>
              Applied
            </h3>
          </div>

          <ul className='service__list'>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Ok actually tho what do I put here</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Idk, I'll figure it out at some point I guess</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>The actual THINGS I can do</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Wow I was so dumb to be </p>
            </li>
          </ul>
        </article>
        {/*END OF LIST 1*/}
        <article className='service'>
          <div className="service__head">
            <h3>
              Subject Matter
            </h3>
          </div>

          <ul className='service__list'>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Ideas for a list</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Juvenile Remarks</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Overstatements</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Understatements</p>
            </li>
          </ul>
        </article>
        {/*END OF LIST 1*/}
      </div>
    </section>
  )
}

export default Services