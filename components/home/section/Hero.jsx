import Image from 'next/image'
import React from 'react'
import { BsPlayBtn } from 'react-icons/bs'
import imageLoader from '../../../helper/imageLoader'
import Background from '../../../public/common/BoxBackground.png'
const Hero = () => {
  return (
    <div className="min-h-[85vh] w-full bg-cover bg-center hero place-items-center mt-12 mb-12 lg:mb-0">
      <div className="flex flex-col justify-center gap-4 h-3/5 items-center lg:flex-row">
        <div data-aos="fade-right" className="flex justify-around items-center gap-4 lg:flex-col">
          <Image
            src="/landing-section/SocialMedia_Facebook.png"
            width={240}
            height={270}
            alt="Facebook Digital Marketing"
            className="max-w-full h-auto rounded-lg"
            loader={imageLoader}
            priority={true}
          />
          <Image
            src="/landing-section/SocialMedia_Instagram.png"
            width={240}
            height={270}
            alt="Instagram Digital Marketing"
            className="max-w-full h-auto rounded-lg"
            loader={imageLoader}
            priority={true}
          />
        </div>
        <div className="flex flex-col items-center justify-start lg:items-center lg:justify-start">
          <div
            data-aos="fade-left"
            className="h-auto text-center lg:text-left mb-10 max-w-fit z-20">
            <h1 className="text-2xl font-semibold break-words md:text-4xl text-neutral lg:tracking-wide xl:text-5xl">
              <span className="text-primary">বুস্টিং করুন সহজে</span>
              {/* Build your <span className="text-primary">audience</span> and
              <br />
              <span className="text-secondary">grow</span> your brand */}
            </h1>
          </div>
          <div className="h-auto flex flex-col items-center justify-center lg:flex-row lg:items-start z-20">
            <div data-aos="fade-up">
              <Image
                src="/landing-section/SocialMedia_Likes.png"
                width={240}
                height={270}
                alt="Social Media Likes"
                className="max-w-full h-auto rounded-lg"
                loader={imageLoader}
                priority={true}
              />
            </div>
            <div data-aos="fade-left">
              <div className="flex flex-col items-center justify-center lg:justify-start lg:flex-row lg:ml-8 lg:items-start text-center lg:text-left">
                <p className="w-full lg:w-3/4 max-w-fit text-neutral">
                  বুস্ট করুন আপনার পছন্দের সোশ্যাল মিডিয়া প্ল্যাটফর্মে কোনরকম ক্রেডিট কার্ড ছাড়াই।
                  বিকাশ, নগদ, ডেবিট কার্ড কিংবা ব্যাংক ট্রান্সফারের মাধ্যমে আপনার সকল সোশ্যাল
                  মিডিয়া প্ল্যাটফর্ম যেকোনো পোস্ট প্রমোট করতে পারবেন BoostMe অ্যাপ থেকে।
                  {/* Plan and publish your content for Instagram, <br /> TikTok, Facebook, Twitter,
                  Pinterest, and LinkedIn,
                  <br /> all from one simple dashboard. */}
                </p>
              </div>
              <div className="flex flex-col mt-4 items-center justify-center lg:justify-start md:flex-row lg:ml-8">
                <div className="flex flex-col items-center md:flex-row">
                  <div className="mb-4 md:mr-4 md:mb-0">
                    <button className="btn btn-primary normal-case px-12 text-white rounded-full">
                      Get Started
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary normal-case px-10 text-primary rounded-full bg-white hover:bg-transparent">
                      <BsPlayBtn />
                      <span className="ml-2">Watch Video</span>
                    </button>
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
              alt="BoostMe's Background"
              className="max-w-full h-auto rounded-lg"
              loader={imageLoader}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
