import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
import BoxBackground from '../../../public/common/BoxBackground.png'
import Calender from '../../../public/landing-section/Calender.png'
import Clock from '../../../public/landing-section/Clock.png'
import Mobile from '../../../public/landing-section/Mobile.png'
const BrandBuild = () => {
  return (
    <div className="hero min-h-[90vh] relative mb-24 md:mt-32 md:mb-0">
      <div className="flex flex-col">
        <div data-aos="fade-down-right" className="hidden lg:block lg:absolute lg:left-0 lg:top-0">
          <Image
            src={BoxBackground}
            width={500}
            height={100}
            alt="BoostMe's Background"
            loader={imageLoader}
          />
        </div>
        <h1
          data-aos="fade-down-left"
          className=" lg:block lg:absolute lg:top-0 lg:right-28 text-3xl mb-[50px] mt-8 text-center lg:text-end font-semibold break-words text-neutral lg:tracking-wide lg:text-3xl xl:text-5xl lg:max-w-2xl">
          Businesses <span className="text-primary">all over the world</span>
          <br />
          <span className="text-secondary">trust</span> us to build their brand
        </h1>
        <div className="md:mt-16 flex flex-wrap justify-center items-center flex-col gap-8 lg:gap-x-16 md:flex-row">
          <div
            data-aos="flip-left"
            className="card card-compact w-64 border-4 border-secondary rounded-[25px]">
            <figure className="mb-4">
              <Image
                src={Clock}
                width={270}
                height={190}
                alt="Clock"
                className="object-none"
                loader={imageLoader}
              />
            </figure>
            <div className="card-body text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-primary">Scheduling</h2>
              <p>Create a preset publishing schedule for each social account</p>
            </div>
          </div>
          <div
            data-aos="flip-down"
            className="card card-compact w-64 border-4 border-secondary rounded-[25px]">
            <figure className="mb-4">
              <Image
                src={Mobile}
                width={270}
                height={190}
                alt="Clock"
                className="object-none mb-2"
                loader={imageLoader}
              />
            </figure>
            <div className="card-body text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-primary">Tailored posts</h2>
              <p>Create a preset publishing schedule for each social account</p>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="card card-compact w-64 border-4 border-secondary rounded-[25px]">
            <figure className="mb-4">
              <Image
                src={Calender}
                width={270}
                height={190}
                alt="Clock"
                className="object-none mb-2"
                loader={imageLoader}
              />
            </figure>
            <div className="card-body text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-primary">Calendar</h2>
              <p>Create a preset publishing schedule for each social account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandBuild
