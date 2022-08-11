import React from 'react'
import Audience from './section/Audience'
import Banner from './section/Banner'
import Companies from './section/Companies'
import Hero from './section/Hero'
import LearnMore from './section/LearnMore'
import Testimonials from './section/Testimonials'

// import { useEffect } from 'react'
// import axios from '../../axios'

export const HomeMain = () => {
  // API call to change language on loading. Please check and update
  //-------------------------------------------------------------
  // useEffect(() => {
  //   const fetchLanguageData = async () => {
  //     const res = await axios.get('/content/landing')
  //     console.log(res.data)
  //   }

  //   fetchLanguageData()
  // }, [])

  return (
    <>
      <Hero />
      <Audience />
      <Companies />
      <LearnMore />
      <Banner />
      <Testimonials />
    </>
  )
}
