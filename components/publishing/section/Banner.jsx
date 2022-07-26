import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
import SocialMediaBanner from '../../../public/landing-section/SocialMediaBanner.png'
const Banner = () => {
  return (
    <div className="sm:min-h-[75vh]  flex justify-center items-center flex-col md:min-h-screen">
      <div data-aos="flip-up" className="w-full flex flex-col items-center md:w-1/2">
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
      <div data-aos="zoom-in" className="mt-10 md:mt-28 w-full">
        <Image
          alt="BoostMe's Marketing Banner"
          src={SocialMediaBanner}
          width="100%"
          height={28}
          objectFit="contain"
          layout="responsive"
          loader={imageLoader}
        />
      </div>
    </div>
  )
}

export default Banner
