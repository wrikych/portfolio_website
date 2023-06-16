import React from 'react'
import test_resume from '../../assets/test_resume.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={test_resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me!</a>
    </div>
  )
}

export default CTA