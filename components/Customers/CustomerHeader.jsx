import React from 'react'
import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import firstPattern from '../../public/customers-section/patternpad1.png'
import secondPattern from '../../public/customers-section/patternpad2.png'

const CustomerHeader = () => {
  return (
    <div>
      <Image width={1000} height={117} src={firstPattern} alt="" loader={imageLoader} />
      <div className="flex flex-row">
        <Image width={500} height={117} src={secondPattern} alt="" loader={imageLoader} />
        <div className='flex flex-col items-end mx-8'>
          <h4 className='text-secondary'>YOU&apos;RE IN GOOD COMPANY</h4>
          <h1 className="text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide xl:text-5xl">
            Our <span className="text-primary">Featured Customers</span>
          </h1>
          <p className="text-neutral">
            See how big brands and growing businesses find social media success with BoostMe
          </p>
        </div>
      </div>
    </div>
  )
}

export default CustomerHeader
