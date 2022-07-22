import React from 'react'

const Traffic = () => {
  return (
    <div className="flex items-center flex-col justify-center w-auto mx-6 mt-12 mb-20 lg:h-screen lg:mt-0 2xl:w-[1400px] 2xl:mx-auto">
      <div className="w-[90%] lg:w-2/3">
        <h1 className="text-4xl text-center font-semibold break-words text-neutral lg:tracking-wide xl:text-5xl">
          Build a loyal and <span className="text-primary">engaged</span> audience on
          <br />
          <span className="text-secondary">social media</span>
        </h1>
      </div>
      <div className="w-[90%] flex flex-col items-center lg:w-2/4">
        <p className="text-neutral text-center text-base mt-10">
          Start Page is a simple, beautiful, flexible link in bio page that brings together all of
          your best content in one place. Share it in your bios on Instagram, YouTube, TikTok, or
          any other social profiles.
        </p>
        <button className="btn btn-wide mt-10 btn-primary mx-auto rounded-full text-white md:mx-0">
          Start 14 days Free Trial
        </button>
      </div>
    </div>
  )
}

export default Traffic
