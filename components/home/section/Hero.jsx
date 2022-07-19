import Image from 'next/image'
import React from 'react'
import { BsPlayBtn } from 'react-icons/bs'
import styles from '../../../styles/Home.module.css'
const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="flex lg:flex-row md:flex-col sm:flex-col">
        <div className="flex lg:flex-col md:flex-row sm:flex-row lg:w-max">
          <div className={styles.hero}>
            <Image
              width={260}
              height={380}
              src="/landing-section/Group 8.png"
              alt="Landing"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <Image
              width={260}
              height={380}
              src="/landing-section/Group 9.png"
              alt="Landing"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-52">
            <h1 className="text-5xl font-semibold text-neutral tracking-wide ml-48">
              Build your <span className="text-primary">audience</span> and{' '}
              <span className="text-secondary">grow</span> your brand
            </h1>
          </div>
          <div className="flex align-start justify-start p-4 gap-4 flex-col lg:flex-row">
            <div className={styles.hero}>
              <Image
                width={260}
                height={380}
                src="/landing-section/Group 10.png"
                alt="Landing"
                className="max-w-sm rounded-lg shadow-2xl"
              />
            </div>
            <div className="pl-16">
              <p className="py-6 text-neutral">
                Plan and publish your content for Instagram, TikTok, Facebook, Twitter, Pinterest,
                and LinkedIn, all from one simple dashboard.
              </p>
              <div>
                <button className="btn btn-primary btn-wide rounded-3xl text-white">
                  Get Started
                </button>
                <button className="btn btn-primary btn-wide rounded-3xl ml-3 bg-transparent text-primary hover:bg-transparent">
                  <BsPlayBtn /> <span className="ml-3">Watch Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hidden lg:block lg:fixed lg:bottom-20 lg:right-0">
        <Image
          width={500}
          height={117}
          src="/landing-section/Frame 10.png"
          alt="Landing"
          className="max-w-sm rounded-lg shadow-2xl"
        />
      </div> */}
    </div>
  )
}

export default Hero
