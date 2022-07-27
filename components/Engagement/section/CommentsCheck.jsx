import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
const CommentsCheck = () => {
  return (
    <div className="flex items-center w-auto mx-6 mb-20 mt-10 lg:min-h-screen lg:mb-0 2xl:w-[1400px] 2xl:mx-auto">
      {/* section div */}
      <div className="flex flex-col gap-10 w-full md:flex-row">
        <div data-aos="fade-right" className="w-[95%] mx-auto flex lg:w-1/2 ">
          <Image
            src="/engagement-section/engage-comment.png"
            width={700}
            height={600}
            alt="Social Media Engagement"
            loader={imageLoader}
          />
        </div>
        <div
          data-aos="fade-left"
          className="w-[90%] mx-auto flex flex-col justify-center item-center lg:w-1/2 ">
          <h1 className="text-4xl text-center font-semibold break-words text-neutral md:text-start lg:tracking-wide xl:text-5xl">
            Build a loyal and <span className="text-primary">audience</span> on
            <br />
            <span className="text-secondary">social media</span>
          </h1>
          <p className="text-neutral text-center text-base mt-10 md:text-start">
            See all of your comments, stay on top of important <br /> interactions, and turn
            followers into fans <br /> using Buffer.
          </p>
          <button className="btn btn-wide rounded-full mt-10 btn-primary mx-auto text-white normal-case md:mx-0">
            Start 14 Days Free Trial
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommentsCheck
