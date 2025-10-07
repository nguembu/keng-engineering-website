import React from 'react'
import About from '../components/About'
import Missions from '../components/Missions'
import Testimonials from '../components/Testimonials'

const AboutPage = () => {
  return (
    <div className="pt-20">
      <About />
      <Missions />
      <Testimonials />
    </div>
  )
}

export default AboutPage