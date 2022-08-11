import React from 'react'
import Traffic from '../StartPage/section/Traffic'
import Background from './section/Background'
import Banner from './section/Banner'
import BrandBuild from './section/BrandBuild'
import Hero from './section/Hero'
import LearnMore from './section/LearnMore'

const PublishingMain = () => {
  const trafficHeading = {
    titleStart: '',
    titlePrimary: 'এনালাইসিস',
    titleMiddle: 'এবং',
    titleSecondary: 'রিপোরটিং ',
    titleLast: '',
    description:
      'আপনার সামাজিক মিডিয়া স্ট্রাটেজির জন্য সঠিক সিদ্ধান্ত নিতে আপনার প্রয়োজনীয় সমস্ত সামারি এবং ডেটা পাবেন BoostMe প্লাটফর্ম থেকে। আপনার রিপোর্ট ডাউনলোড করুন বা ইমেলের মাধ্যমে আপনার টিমের কিংবা ক্লায়েন্টদের সাথে শেয়ার করা যাবে।',
  }
  return (
    <div className="w-full relative">
      <Traffic trafficHeading={trafficHeading} />
      <Hero />
      <Banner />
      <LearnMore />
      <BrandBuild />
      <Background />
    </div>
  )
}

export default PublishingMain
