import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
// import SmallBusiness from '../../../public/start-page/SmallBusiness.png'
const Customization = () => {
  return (
    <div className="flex items-center w-auto mx-6 mb-20 lg:mb-24 mt-10 lg:mt-36 2xl:w-[1400px] 2xl:mx-auto">
      {/* section div */}
      <div className="flex flex-col-reverse lg:flex-row gap-10 w-full md:flex-row">
        <div
          data-aos="fade-down-right"
          className="w-[90%] mx-auto flex flex-col justify-center item-center lg:w-1/2 ">
          <h1 className="text-4xl text-center font-semibold break-words text-neutral md:text-start lg:tracking-wide xl:text-5xl">
            পোস্ট <span className="text-primary">কাস্টমাইজ </span>
            {/* Build a loyal and <span className="text-primary">audience</span> on
            <br />
            <span className="text-secondary">social media</span> */}
          </h1>
          <p className="text-neutral text-center text-base mt-10 md:text-start max-w-sm">
            {/* See all of your comments, stay on top of important <br /> interactions, and turn
            followers into fans <br /> using Buffer. */}
            ছবি, ভিডিও, জিআইএফ, ট্যাগ এবং আরও অনেক কিছু সহ প্রতিটি সোশ্যাল মিডিয়া প্ল্যাটফর্মের
            জন্য কাস্টমাইজড পোস্ট তৈরি এবং শিডিউল করুন সহজেই৷ সর্বচ্চ 500টি পর্যন্ত পোস্ট বাল্ক
            শিডিউল করতে পারেন BoostnBoom প্লাটফর্ম থেকে।
          </p>
          {/* <button className="btn btn-wide rounded-full mt-10 btn-primary mx-auto text-white normal-case md:mx-0">
            Create Your Page For Free
          </button> */}
        </div>
        <div data-aos="fade-down-left" className="w-[95%] mx-auto flex lg:w-1/2 ">
          <Image
            src="/start-page/customize.webp"
            width={650}
            height={600}
            alt="BoostnBoom's Social Media Post Customization"
            loader={imageLoader}
          />
        </div>
      </div>
    </div>
  )
}

export default Customization
