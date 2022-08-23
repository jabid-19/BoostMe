import React from 'react'
import Customization from './section/Customization'
import FAQ from './section/FAQ'
import Selling from './section/Selling'
import Showcase from './section/Showcase'
import Traffic from './section/Traffic'

const StartPageMain = () => {
  const trafficHeading = {
    titleStart: '',
    titlePrimary: 'পাবলিশ ',
    titleMiddle: 'এবং',
    titleSecondary: 'শিডিউল ',
    titleLast: 'করুন সহজেই',
    description:
      'Facebook, Instragam, TikTok, Google Business Pages, YouTube সহ সকল সোশ্যাল মিডিয়া প্ল্যাটফর্মে সহজে পোস্ট শিডিউল করুন এবং পোস্ট করুন BoostnBoom থেকে সহজেই।',
  }

  return (
    <div className="w-full relative">
      <Traffic trafficHeading={trafficHeading} />
      <Customization />
      <Selling />
      <Showcase />
      <FAQ />
    </div>
  )
}

export default StartPageMain
