import React from 'react'
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
    </div>
  )
}

export default PublishingMain
