import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Missions from '../components/Missions'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = ({ setCurrentPage }) => {
  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />
      <About />
      <Services />
      <Missions />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home