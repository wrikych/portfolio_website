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
              <p>Google Data Analytics Certification (completed 2022)</p>
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
              <p>Data Visualization and Dashboarding</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Natural Language Processing</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Model Deployment</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Clustering</p>
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
              <p>Statistical Inference</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Numerical Interpolation</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Predictive Modeling</p>
            </li>
            <li>
              <SiCheckmarx className='service__list-icon' />
              <p>Feature Engineering</p>
            </li>
          </ul>
        </article>
        {/*END OF LIST 1*/}
      </div>
    </section>
  )
}

export default Services