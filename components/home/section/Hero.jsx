import Image from 'next/image'
import React from 'react'
import { BsPlayBtn } from 'react-icons/bs'
const Hero = () => {
  return (
    <>
      <div className="flex flex-col min-h-full md:flex-row gap-x-8">
        <div className="flex justify-between gap-x-20 md:flex-col md:gap-8">
          <div className="w-[260px]">
            <Image
              width={260}
              height={380}
              src="/landing-section/Group 8.png"
              alt="Landing"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div>
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
          <div className="h-20 md:h-52">
            <h1 className="text-2xl text-center md:text-5xl md:font-semibold md:text-neutral md:tracking-wide md:ml-48">
              Build your <span className="text-primary">audience</span> and{' '}
              <span className="text-secondary">grow</span> your brand
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row">
            <div className="w-1/3">
              <Image
                width={100}
                height={100}
                src="/landing-section/Group 10.png"
                alt="Landing"
                className="max-w-sm rounded-lg shadow-2xl"
              />
            </div>
            <div className="pl-16 w-2/3">
              <p className="py-6 text-neutral">
                Plan and publish your content for Instagram, TikTok, Facebook, Twitter, Pinterest,
                and LinkedIn, all from one simple dashboard.
              </p>
              <div>
                <button className="btn btn-primary btn-wide rounded-3xl text-white">
                  Get Started
                </button>
                <button className="btn btn-primary btn-wide rounded-3xl ml-3 bg-transparent text-primary hover:bg-transparent">
                  <BsPlayBtn /> <span className="ml-3">Watch Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hidden lg:block lg:fixed lg:bottom-20 lg:right-0">
        <Image
          width={500}
          height={117}
          src="/landing-section/Frame 10.png"
          alt="Landing"
          className="max-w-sm rounded-lg shadow-2xl"
        />
      </div> */}
    </>
  )
}

export default Hero
