import Image from 'next/image'
import React from 'react'
import { BsPlayBtn } from 'react-icons/bs'
const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-cover place-items-start bg-center hero place-items-center">
      <div className="flex flex-col justify-center gap-4 h-3/5 items-center lg:flex-row">
        <div className="flex justify-around items-center gap-4 lg:flex-col">
          <Image
            src="/landing-section/Group 8.png"
            width={240}
            height={270}
            alt="Landing"
            class="max-w-full h-auto rounded-lg"
          />
          <Image
            src="/landing-section/Group 9.png"
            width={240}
            height={270}
            alt="Landing"
            class="max-w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-start lg:items-start">
          <div className="h-40 lg:mb-10">
            <h1 className="text-2xl font-semibold break-words md:text-center md:text-4xl text-neutral lg:tracking-wide py-14 xl:text-5xl">
              Build your <span className="text-primary">audience</span> and
              <br />
              <span className="text-secondary">grow</span> your brand
            </h1>
          </div>
          {/* complex */}
          <div className="h-auto flex flex-col items-center justify-center lg:flex-row lg:items-start">
            <div>
              <Image
                src="/landing-section/Group 10.png"
                width={240}
                height={270}
                alt="Landing"
                class="max-w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <div className="flex flex-col items-center md:flex-row md:justify-around">
                <p className="w-2/3 lg:w1/4">
                  Plan and publish your content for Instagram, <br /> TikTok, Facebook, Twitter,
                  Pinterest, and LinkedIn, all from one simple dashboard.
                </p>
              </div>
              <div className="flex flex-col mt-4 items-center md:flex-row md:justify-around ">
                <div className="flex gap-4 md:flex-row">
                  <div className="mb-4 md:mr-4 md:mb-0">
                    <button className="btn btn-primary text-white rounded-2xl">Get Started</button>
                  </div>
                  <div>
                    <button className="btn btn-primary  text-primary rounded-2xl bg-white hover:bg-transparent">
                      <BsPlayBtn />
                      <span className="ml-2">Watch Video</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xl:block xl:flex xl:justify-end xl:items-end">
            <Image
              src="/landing-section/Frame 10.png"
              width={500}
              height={100}
              alt="Landing"
              class="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
