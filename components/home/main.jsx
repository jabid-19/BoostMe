import React from 'react'
import Audience from './section/Audience'
import Banner from './section/Banner'
import Companies from './section/Companies'
import LearnMore from './section/LearnMore'
import Testimonials from './section/Testimonials'

const HomeMain = () => {
  return (
    <>
      {/* <Hero /> */}
      <Audience />
      <Companies />
      <LearnMore />
      <Banner />
      <Testimonials />
    </>
  )
}

export default HomeMain
