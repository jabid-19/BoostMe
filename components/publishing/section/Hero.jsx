import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="flex flex-col">
        <div data-aos="fade-down-right" className="hidden lg:block lg:absolute lg:left-0 lg:top-0">
          <Image src="/landing-section/Frame 10.png" width={500} height={100} alt="publishing" />
        </div>
        <div data-aos="fade-down" className="hidden lg:block lg:absolute lg:left-[500px] top-0">
          <Image src="/landing-section/Frame 10.png" width={500} height={100} alt="publishing" />
        </div>
        <div
          data-aos="fade-up-right"
          className="hidden lg:block lg:absolute lg:left-0 lg:top-[100px]">
          <Image src="/landing-section/Frame 10.png" width={500} height={100} alt="publishing" />
        </div>
        <h1
          data-aos="fade-left"
          className="hidden lg:block lg:mb-[100px] text-end font-semibold break-words text-neutral lg:tracking-wide lg:text-[40px] xl:text-5xl z-10">
          Build your <span className="text-primary">audience</span> and
          <br />
          <span className="text-secondary">grow</span> your brand
        </h1>
        <div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              data-aos="fade-up"
              src="/landing-section/Rectangle 5.png"
              width={423}
              height={460}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="Landing"
            />
            <div
              data-aos="fade-down"
              className="flex flex-col justify-center items-center lg:items-start">
              <h1 className="text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide py-14 xl:text-5xl">
                Build your <span className="text-primary">audience</span> and{' '}
                <span className="text-secondary">grow</span> your brand
              </h1>
              <p className="py-4 text-neutral w-full lg:w-1/2">
                Plan and publish your content for Instagram, TikTok, Facebook, Twitter, Pinterest,
                and LinkedIn, all from one simple dashboard.
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
      </div>
    </div>
  )
}

export default Hero
