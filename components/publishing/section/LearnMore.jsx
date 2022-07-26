import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
import ContentWriting from '../../../public/landing-section/ContentWriting.png'

const LearnMore = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <Image
          data-aos="flip-left"
          src={ContentWriting}
          width={423}
          height={460}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Social Media Content Writing"
          loader={imageLoader}
        />
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide py-14 xl:text-5xl">
            Build your <span className="text-primary">audience</span> and{' '}
            <span className="text-secondary">grow</span> your brand
          </h1>
          <p className="py-4 text-neutral w-full lg:w-1/2">
            Plan and publish your content for Instagram, TikTok, Facebook, Twitter, Pinterest, and
            LinkedIn, all from one simple dashboard.
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="mb-4 md:mr-4 md:mb-0">
              <button className="btn btn-primary normal-case px-12 text-white rounded-full">
                Get Started
              </button>
            </div>
            <div>
              <button className="btn btn-primary normal-case px-12 text-primary rounded-full bg-white hover:bg-transparent">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnMore
