import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
// import Dashboard from '../../../public/landing-section/Dashboard.png'
import Payment from '../../../public/landing-section/payment.webp'

const Audience = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          data-aos="fade-left"
          src={Payment}
          width={423}
          height={460}
          className="max-w-sm rounded-lg shadow-2xl object-fill"
          alt="Digital Marketing Dashboard"
          loader={imageLoader}
        />
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center items-center lg:items-start lg:max-w-3xl">
          <h1 className="text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide py-6 lg:py-0 lg:mb-6 xl:text-5xl text-center lg:text-left">
            বুস্ট করুন <span className="text-primary">পেমেন্ট</span> এর{' '}
            <span className="text-secondary">ঝামেলা</span> ছাড়াই
            {/* Build your <span className="text-primary">audience</span> and{' '}
            <span className="text-secondary">grow</span> your brand */}
          </h1>
          <p className="py-4 text-neutral w-full lg:w-1/2 text-center lg:text-left">
            আপনি শুধু আপনার কোম্পানির ব্র্যান্ডের প্রমোশনের জন্য চিন্তা করবেন পেমেন্ট রিলেটেড এবং
            অন্য সমস্যা ভাবনা শুধুমাত্র BoostMe এর।
            {/* Plan and publish your content for Instagram, TikTok, Facebook, Twitter, Pinterest, and
            LinkedIn, all from one simple dashboard. */}
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="mb-4 md:mr-4 md:mb-0">
              <button className="btn btn-primary normal-case px-12 text-white rounded-full">
                Get Started
              </button>
            </div>
            <div>
              <button className="btn btn-primary normal-case px-12 text-primary rounded-full bg-white hover:bg-transparent">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Audience
