import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
import Background from '../../../public/common/BoxBackground.png'
const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="flex flex-col w-auto mx-6 mb-20 mt-10 lg:flex-row lg:h-[85vh] lg:mb-0 2xl:w-[1200px] 2xl:mx-auto gap-4">
        <div className="w-full flex flex-row gap-4 items-center justify-center lg:flex-col lg:w-1/4 lg:items-end">
          <Image
            src="/landing-section/SocialMedia_Facebook.png"
            width={240}
            height={370}
            alt="Facebook Digital Marketing"
            className="object-cover rounded-lg"
            loader={imageLoader}
            priority={true}
          />
          <Image
            src="/landing-section/SocialMedia_Instagram.png"
            width={240}
            height={370}
            alt="Instagram Digital Marketing"
            className="object-cover rounded-lg"
            loader={imageLoader}
            priority={true}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center lg:w-3/4">
          <div className="h-auto mx-auto my-5 lg:ml-28 lg:my-0">
            <h1 className="text-2xl mb-5 font-semibold break-words md:text-4xl text-neutral lg:tracking-wide xl:text-5xl">
              <span className="text-primary">বুস্টিং</span> করুন{' '}
              <span className="text-secondary">সহজে</span>
            </h1>
          </div>
          <div className="w-full h-auto flex items-center flex-col gap-4 lg:flex-row">
            <div className="flex justify-center">
              <Image
                src="/landing-section/SocialMedia_Likes.png"
                width={310}
                height={400}
                alt="Facebook Digital Marketing"
                className="max-w-full object-cover rounded-lg"
                loader={imageLoader}
                priority={true}
              />
            </div>
            <div className="w-full">
              <p className="max-w-fit text-neutral lg:w-1/2">
                বুস্ট করুন আপনার পছন্দের সোশ্যাল মিডিয়া প্ল্যাটফর্মে কোনরকম ক্রেডিট কার্ড ছাড়াই।
                বিকাশ, নগদ, ডেবিট কার্ড কিংবা ব্যাংক ট্রান্সফারের মাধ্যমে আপনার সকল সোশ্যাল মিডিয়া
                প্ল্যাটফর্ম যেকোনো পোস্ট প্রমোট করতে পারবেন BoostnBoom অ্যাপ থেকে।
              </p>
              <div className="mt-4 w-full flex flex-col items-center gap-4  lg:w-3/4 lg:flex-row lg:ml-4 xl:ml-0">
                <div className="">
                  <Link href="login">
                    <a>
                      <button className="btn btn-primary normal-case px-12 text-white rounded-full">
                        Get Started
                      </button>
                    </a>
                  </Link>
                </div>
                <div className="">
                  <Link href="contact">
                    <a>
                      <button className="btn btn-primary normal-case px-12 text-primary rounded-full bg-white hover:bg-transparent">
                        Contact Us
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 lg:h-[100px] lg:w-[500px] ">
        <Image
          src={Background}
          width={500}
          height={100}
          alt="BoostnBoom's Background"
          className="max-w-full h-auto rounded-lg"
          loader={imageLoader}
        />
      </div>
    </div>
  )
}

export default Hero
