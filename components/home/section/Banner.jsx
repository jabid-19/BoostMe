import React from 'react'
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url('/common/BackgroundBanner.png')` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div data-aos="zoom-in" className="max-w-full">
          <h1 className="mb-5 text-5xl font-bold">
            Build your audience and <br /> grow your brand{' '}
          </h1>
          <button className="btn btn-primary normal-case px-12 text-white rounded-full mt-12">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
