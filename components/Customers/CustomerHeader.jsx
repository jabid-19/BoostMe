import React from 'react'
import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import firstPattern from '../../public/customers-section/patternpad1.png'
import secondPattern from '../../public/customers-section/patternpad2.png'

const CustomerHeader = () => {
  return (
    <div>
      <div data-aos="fade-down-right" className="pr-16 sm:pr-48">
        <Image
          layout="responsive"
          width={1000}
          height={130}
          src={firstPattern}
          alt=""
          loader={imageLoader}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-end md:items-center justify-center sm:justify-between">
        <div data-aos="fade-up-right" className="pr-48 sm:pr-4">
          <Image width={600} height={145} src={secondPattern} alt="" loader={imageLoader} />
        </div>
        <div
          data-aos="fade-up-left"
          className="flex flex-col items-center sm:items-end mx-8 mt-4 sm:mt-0">
          <h4 className="text-secondary text-xs sm:text-sm md:text-md lg:text-lg">
            YOU&apos;RE IN GOOD COMPANY
          </h4>
          <h1 className=" text-xl md:text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl">
            Our <span className="text-primary">Featured Customers</span>
          </h1>
          <p className="text-neutral text-center sm:text-right text-xs md:text-md lg:text-lg">
            See how big brands and growing businesses find social media success with BoostMe
          </p>
        </div>
      </div>
    </div>
  )
}

export default CustomerHeader
