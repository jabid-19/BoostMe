import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
const CommentsCheck = () => {
  return (
    <div className="flex items-center w-auto mx-6 mb-20 lg:min-h-[70vh] 2xl:w-[1400px] 2xl:mx-auto">
      {/* section div */}
      <div className="flex flex-col gap-10 w-full md:flex-row">
        <div data-aos="fade-right" className="w-[95%] mx-auto flex lg:w-1/2 ">
          <Image
            src="/engagement-section/multitask.webp"
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
            <span className="text-primary">সবকিছু</span> থাকুক{' '}
            <span className="text-secondary">এক</span> জায়গায়
            {/* Build a loyal and <span className="text-primary">audience</span> on
            <br />
            <span className="text-secondary">social media</span> */}
          </h1>
          <p className="text-neutral text-center text-base mt-10 md:text-start max-w-sm">
            তা হোক কমেন্ট, মেসেজ, ইনস্টাগ্রাম স্টরির রিপ্লাই, অথবা আপনার ফেসবুক পেজের আপনার
            ফলোয়ারদের করা পোস্ট, আমাদের সোশ্যাল ইনবক্স থেকে সব প্লাটফর্মের মেসেজ এর রিপ্লাই দিন
            সহজেই৷
            {/* See all of your comments, stay on top of important <br /> interactions, and turn
            followers into fans <br /> using Buffer. */}
          </p>
          {/* <button className="btn btn-wide rounded-full mt-10 btn-primary mx-auto text-white normal-case md:mx-0">
            Start 14 Days Free Trial
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default CommentsCheck
