import React from 'react'
import Customization from './section/Customization'
import FAQ from './section/FAQ'
import Selling from './section/Selling'
import Showcase from './section/Showcase'
import Traffic from './section/Traffic'

const StartPageMain = () => {
  return (
    <div className="w-full relative">
      <Traffic />
      <Customization />
      <Selling />
      <Showcase />
      <FAQ />
    </div>
  )
}

export default StartPageMain
