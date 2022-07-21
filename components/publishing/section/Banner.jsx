import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div className="w-full flex flex-col items-center md:w-1/2">
        <h1 className="text-2xl md:text-3xl mb-6 lg:mb-[40px] text-center font-semibold break-words text-neutral lg:tracking-wide lg:text-5xl">
          Build your <span className="text-primary">audience</span> and
          <br />
          <span className="text-secondary">grow</span> your brand
        </h1>
        <p className="text-neutral text-center w-full lg:w-2/4">
          Plan and publish your content for Instagram, TikTok, Facebook, Twitter, Pinterest, and
          LinkedIn, all from one simple dashboard.
        </p>
      </div>
      <div className="mt-28 w-full">
        <Image
          src="/landing-section/Rectangle 7.png"
          alt="Banner"
          width="100%"
          height={28}
          objectFit="contain"
          layout="responsive"
        />
      </div>
    </div>
  )
}

export default Banner
