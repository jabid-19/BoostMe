import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
import Engagement from '../../../public/engagement-section/engagement.webp'
const Audiences = () => {
  return (
    <div className="max-w-7xl mx-6 mt-12 lg:min-h-[60vh] lg:mt-28 2xl:w-[1400px] 2xl:mx-auto">
      {/* section div */}
      <div className="flex flex-col w-full md:flex-row">
        <div
          data-aos="fade-right"
          className="w-[90%] mx-auto flex flex-col justify-center item-center lg:w-1/2 ">
          <h1 className="text-4xl text-center font-semibold break-words text-neutral md:text-start lg:tracking-wide xl:text-5xl">
            <span className="text-primary">এনগেজমেন্ট</span>
            {/* Build a loyal and <span className="text-primary">audience</span> on
            <br />
            <span className="text-secondary">social media</span> */}
          </h1>
          <p className="text-neutral text-center text-base mt-10 md:text-start">
            আমাদের সহজ এবং কার্যকর সোশ্যাল ইনবক্সের সাথে কথোপকথন কন্টিনিউ রাখুন৷ আপনার অডিয়ান্সের
            সাথে কানেক্টেড থাকুন এবং ইনস্টাগ্রাম এবং Facebook-এর চ্যাটএর ট্র্যাক রাখুন৷
            {/* See all of your comments, stay on top of important <br /> interactions, and turn
            followers into fans <br /> using Buffer. */}
          </p>
          <button className="btn btn-wide mt-10 btn-primary mx-auto rounded-full text-white normal-case md:mx-0">
            Start 14 Days Free Trial
          </button>
        </div>

        <div data-aos="fade-left" className="w-[95%] mx-auto flex lg:justify-end lg:w-1/2 ">
          <Image
            data-aos="fade-left"
            src={Engagement}
            width={740}
            height={537}
            className="max-w-sm rounded-lg shadow-2xl object-fill"
            alt="Digital Marketing Dashboard"
            loader={imageLoader}
          />
          {/* <video autoPlay playsInline loop muted>
            <source src="/engagement-section/EngagementVideo.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
    </div>
  )
}

export default Audiences
