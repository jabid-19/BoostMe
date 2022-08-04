import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
const Selling = () => {
  return (
    <div className="flex items-center w-auto mx-6 mb-20 mt-10 2xl:w-[1400px] 2xl:mx-auto">
      {/* section div */}
      <div className="flex flex-col gap-10 w-full md:flex-row">
        <div data-aos="fade-right" className="w-[95%] mx-auto flex justify-center lg:w-1/2 ">
          <Image
            src="/start-page/calendar.webp"
            width={550}
            height={620}
            alt="Manage Social Media Businesses"
            loader={imageLoader}
          />
        </div>
        <div
          data-aos="fade-left"
          className="w-[90%] mx-auto flex flex-col justify-center item-center lg:w-1/2 ">
          <h1 className="text-4xl text-center font-semibold break-words text-neutral md:text-start lg:tracking-wide xl:text-5xl">
            <span className="text-secondary">শিডিউল</span> দেখুন{' '}
            <span className="text-primary">ক্যালেন্ডার</span>
            {/* Build a loyal and audience</span> on
            <br />
            <span className="text-secondary">social media</span> */}
          </h1>
          <p className="text-neutral text-center text-base mt-10 md:text-start">
            সোশ্যাল ক্যালেন্ডার আপনাকে আপনার সোশ্যাল মিডিয়া স্ট্রেটেজি এবং সম্পাদনের একটি ম্যাক্রো
            এবং একটি মাইক্রো ভিউ দেয়৷
            {/* See all of your comments, stay on top of important <br /> interactions, and turn
            followers into fans <br /> using Buffer. */}
          </p>
          <button className="btn btn-wide rounded-full mt-10 btn-primary mx-auto text-white normal-case md:mx-0">
            Create Your Page For Free
          </button>
        </div>
      </div>
    </div>
  )
}

export default Selling
