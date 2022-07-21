import Image from 'next/image'
import React from 'react'

const BrandBuild = () => {
  return (
    <div className="hero min-h-screen relative">
      <div className="flex flex-col">
        <div className="hidden lg:block lg:absolute lg:left-0 lg:top-0">
          <Image src="/landing-section/Frame 10.png" width={500} height={100} alt="brandbuilding" />
        </div>
        <h1 className="text-3xl mb-[100px] text-center lg:text-end font-semibold break-words text-neutral lg:tracking-wide lg:text-3xl xl:text-5xl">
          Businesses <span className="text-primary">all over the world</span>
          <br />
          <span className="text-secondary">trust</span> us to build their brand
        </h1>
        <div className="flex flex-wrap justify-center items-center flex-col gap-8 lg:gap-x-16 md:flex-row">
          <div className="card card-compact w-64 border-4 border-secondary rounded-[25px]">
            <figure className="mb-4">
              <Image
                src="/landing-section/Clock.png"
                width={260}
                height={190}
                alt="Clock"
                className="object-cover mb-2"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-semibold text-primary">Scheduling</h2>
              <p>Create a preset publishing schedule for each social account</p>
            </div>
          </div>
          <div className="card card-compact w-64 border-4 border-secondary rounded-[25px]">
            <figure className="mb-4">
              <Image
                src="/landing-section/Clock.png"
                width={260}
                height={190}
                alt="Clock"
                className="object-cover mb-2"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-semibold text-primary">Tailored posts</h2>
              <p>Create a preset publishing schedule for each social account</p>
            </div>
          </div>
          <div className="card card-compact w-64 border-4 border-secondary rounded-[25px]">
            <figure className="mb-4">
              <Image
                src="/landing-section/Clock.png"
                width={260}
                height={190}
                alt="Clock"
                className="object-cover mb-2"
              />
            </figure>
            <div className="card-body">
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
