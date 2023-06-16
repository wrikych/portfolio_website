import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port-pic-3.jpg'
import writeup from '../../assets/writeup.pdf'
import tldr from '../../assets/tldr_code.pdf'

/*Fetch from github*/
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The effects of COVID-19 on Academic Decathlon (R, RMarkdown)',
    github: 'https://github.com/wrikych/AD_EDA',
    demo: 'https://wrikych.github.io/AD_EDA/',
    
  },
  {
    id: 2,
    image: IMG1,
    title: 'Classification techniques and MMA (Python, Data Cleaning, Classification)',
    github: 'https://example.com',
    demo: writeup,
    
  },
  { 
    id: 3,
    image: IMG1,
    title: 'Spotify Astrology (API, Python, Clustering)',
    github: 'https://example.com',
    demo: tldr,
     }
]

const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Current Highlights</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo, breakdown}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Code</a>
                  <a href={demo} className='btn' target='_blank'>Demonstration</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Porfolio