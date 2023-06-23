import React from 'react'
import './testimonials.css'
import PIC1 from '../../assets/nightwing.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: PIC1,
    name: 'GDA Certification Capstone',
    review: 'https://wrikych.github.io/GoogleCapstone_BellaBeatEDA/'
  },
  {
    avatar: PIC1,
    name: 'Ur mom',
    review: 'No u'
  },
  {
    avatar: PIC1,
    name: 'Ur mom',
    review: 'No u'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>B-side</h5>
      <h2>Past Projects</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}>
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide className='testimonial'>
              <div className='pic__1'>
                <img src={avatar} alt='nightwing' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials