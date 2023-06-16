import React from 'react'
import './experience.css'
import {TbBarcode} from 'react-icons/tb'
import {FaPython} from 'react-icons/fa'
import {SiRstudio} from 'react-icons/si'
import {AiOutlineConsoleSql,AiOutlineLaptop} from 'react-icons/ai'
import {BsCode} from 'react-icons/bs'
import {DiJavascript1} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {BsMicrosoft} from 'react-icons/bs'
import {SiTableau} from 'react-icons/si'
import {FaAws} from 'react-icons/fa'
import {FaDocker} from 'react-icons/fa'

const Experience = () => { 
  return (
    <section id='experience'>
      <h2>Skills And Experience</h2>

      <div className="container experience__container">
        <div className='experience__languages'>
          <TbBarcode className='experience__languages-icon'/>
          <h3>Languages</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiRstudio className='experience__details-icon'/>
              <div>
                <h4>R</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineConsoleSql className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCode className='experience__details-icon'/>
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiReact className='experience__details-icon'/>
              <h4>React</h4>
              <small className='text-light'>Dabbled</small>
            </article>
          </div>
        </div>
        {/* END OF LANGUAGES */}

        <div className='experience__packages'>
          <AiOutlineLaptop className='experience__packages-icon'/>
          <h3>Packages and Technologies</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaPython className='experience__details-icon' />
              <div>
                <h4>NumPy</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaPython className='experience__details-icon'/>
              <div>
                <h4>Pandas</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaPython className='experience__details-icon'/>
              <div>
                  <h4>Sci-kit Learn</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaPython className='experience__details-icon'/>
              <div>
                  <h4>MatPlotLib</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaPython className='experience__details-icon'/>
              <div>
                  <h4>Seaborn</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaPython className='experience__details-icon'/>
              <div>
                  <h4>TensorFlow</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaPython className='experience__details-icon'/>
              <div>
                  <h4>NLTK</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiRstudio className='experience__details-icon'/>
              <div>
                  <h4>TidyR</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiRstudio className='experience__details-icon'/>
              <div>
                  <h4>DplyR</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiRstudio className='experience__details-icon'/>
              <div>
                  <h4>ggPlot</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiRstudio className='experience__details-icon'/>
              <div>
                  <h4>Plotly</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiRstudio className='experience__details-icon'/>
              <div>
                  <h4>Shiny</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiRstudio className='experience__details-icon'/>
              <div>
                  <h4>R Markdown</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsMicrosoft className='experience__details-icon'/>
              <div>
                  <h4>Microsoft Power BI</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiTableau className='experience__details-icon'/>
              <div>
                  <h4>Tableau</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaAws className='experience__details-icon'/>
              <div>
                  <h4>AWS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsMicrosoft className='experience__details-icon'/>
              <div>
                  <h4>Microsoft Azure</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaDocker className='experience__details-icon'/>
              <div>
                  <h4>Docker</h4>
              </div>
            </article>
            
          </div>
        </div>
        {/* END OF PACKAGES AND TECH */}

      </div>
    </section>
  )
}

export default Experience