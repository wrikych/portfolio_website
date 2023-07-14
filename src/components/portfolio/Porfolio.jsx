import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-1.jpg'
import IMG2 from '../../assets/portfolio-2.jpg'
import IMG3 from '../../assets/portfolio-3.jpg'
import writeup from '../../assets/writeup.pdf'

/*Fetch from github*/
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The effects of COVID-19 on Academic Decathlon (R, RMarkdown)',
    github: 'https://github.com/wrikych/AD_EDA',
    writeup: 'https://wrikych.github.io/AD_EDA/',
    
  },
  {
    id: 2,
    image: IMG2,
    title: "A Puncher's Chance: Classification and MMA (Python, Data Cleaning, Classification)",
    github: 'https://github.com/wrikych/MMA_Predictive_Modeling',
    writeup: writeup,
    
  },
  { 
    id: 3,
    image: IMG3,
    title: 'TLDR Text Summarizer (T5 Transformer, NLP, tf-IDF)',
    github: 'https://github.com/wrikych/tldr_tkinter_app',
    writeup: 'https://wrikych.github.io/tldr_demo/',
     }
]

const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Current Highlights</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, writeup}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Code</a>
                  <a href={writeup} className='btn' target='_blank'>Writeup</a>
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