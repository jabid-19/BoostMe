import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
import ContentWriting from '../../../public/landing-section/ContentWriting.png'

const LearnMore = () => {
  return (
    <div className="hero mt-20 md:mt-0 mb-10 lg:mt-28 lg:mb-28">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <Image
          data-aos="fade-right"
          src={ContentWriting}
          width={423}
          height={460}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="BoostnBoom's Social Media Content Writing"
          loader={imageLoader}
        />
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center items-center lg:items-start lg:max-w-3xl">
          <h1 className="text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide py-4 lg:py-14 xl:text-5xl text-center lg:text-left">
            <span className="text-primary">হোয়াইট-লেবেল</span> রিপোর্ট তৈরি এবং শেয়ার করুন
            {/* Build your <span className="text-primary">audience</span> and{' '}
            <span className="text-secondary">grow</span> your brand */}
          </h1>
          <p className="py-4 text-neutral w-full lg:w-1/2 text-center lg:text-left">
            আপনার ব্র্যান্ডিং সঙ্গে আপনার সোশ্যাল মিডিয়া রিপোর্ট কাস্টমাইজ করুন. শুধুমাত্র একটি
            ক্লিকের মাধ্যমে, আপনার রিপোর্ট PDF হিসাবে ডাউনলোড করার জন্য বা অটোমেটিকালি আপনার
            ক্লায়েন্ট এবং অন্যান্য স্টেকহোল্ডারদের সাথে ইমেইলের মাধ্যমে শেয়ার করার জন্য প্রস্তুত
            হবে মুহূর্তেই৷
            {/* Plan and publish your content for Instagram, TikTok, Facebook, Twitter, Pinterest, and
            LinkedIn, all from one simple dashboard. */}
          </p>
          {/* <div className="flex flex-col md:flex-row">
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
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default LearnMore
