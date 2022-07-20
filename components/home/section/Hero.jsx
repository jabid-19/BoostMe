import Image from 'next/image'
import React from 'react'
import { BsPlayBtn } from 'react-icons/bs'
const Hero = () => {
  return (
    <div className="w-full h-[100vh] min-h-[800px]">
      <div className="flex flex-col justify-center min-h-fit md:flex-row gap-x-8 mt-12 relative">
        <div className="flex justify-between gap-x-20 md:flex-col md:gap-8">
          <div className="w-full">
            <Image
              width={260}
              height={380}
              src="/landing-section/Group 8.png"
              alt="Landing"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-full">
            <Image
              width={260}
              height={380}
              src="/landing-section/Group 9.png"
              alt="Landing"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="">
            <h1 className="text-2xl text-center font-semibold break-words lg:text-4xl lg:text-neutral lg:tracking-wide py-14 xl:text-5xl">
              Build your <span className="text-primary">audience</span> and{' '}
              <span className="text-secondary">grow</span> your brand
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row">
            <div className="w-max-full flex items-center justify-center md:w-1/3">
              <Image
                width={260}
                height={380}
                src="/landing-section/Group 10.png"
                alt="Landing"
                className="max-w-sm rounded-lg shadow-2xl max-w-full"
              />
            </div>
            <div className="pl-2 w-2/3">
              <p className="py-6 text-neutral">
                Plan and publish your content for Instagram, TikTok, Facebook, Twitter, Pinterest,
                and LinkedIn, all from one simple dashboard.
              </p>
              <div className="flex flex-col md:flex-row">
                <button className="btn btn-primary rounded-3xl text-white">Get Started</button>
                <button className="btn btn-primary rounded-3xl mt-4 bg-transparent text-primary hover:bg-transparent md:ml-3 md:mt-0">
                  <BsPlayBtn /> <span className="ml-3">Watch Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-48 absolute right-3">
        <Image width={500} height={117} src="/landing-section/Frame 10.png" alt="Landing" />
      </div>
    </div>
  )
}

export default Hero
