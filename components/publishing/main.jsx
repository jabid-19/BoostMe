import React from 'react'
import Background from './section/Background'
import Banner from './section/Banner'
import BrandBuild from './section/BrandBuild'
import Hero from './section/Hero'
import LearnMore from './section/LearnMore'

const PublishingMain = () => {
  return (
    <div className="w-full relative">
      <Hero />
      <Banner />
      <LearnMore />
      <BrandBuild />
      <Background />
    </div>
  )
}

export default PublishingMain
