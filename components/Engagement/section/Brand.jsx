import Image from 'next/image'
import React from 'react'
const Brand = () => {
  return (
    <div className="w-auto bg-primary">
      <div className="h-[250px] mt-8 mb-20 flex items-center justify-around flex-wrap md:h-[200px] 2xl:mx-auto">
        <div data-aos="zoom-in" className="flex items-center px-3">
          <Image src="/landing-section/Image 7.png" width={63} height={77} alt="Landing" />
        </div>
        <div data-aos="zoom-in" className="flex items-center px-3">
          <Image src="/landing-section/Kraftriket.png" width={200} height={77} alt="Landing" />
        </div>
        <div data-aos="zoom-in" className="flex items-center px-3">
          <Image src="/landing-section/Unanitech.png" width={80} height={77} alt="Landing" />
        </div>
        <div data-aos="zoom-in" className="flex items-center px-3">
          <Image src="/landing-section/Black_White.png" width={80} height={77} alt="Landing" />
        </div>
        <div data-aos="zoom-in" className="flex items-center px-3">
          <Image src="/landing-section/Black_White2.png" width={80} height={77} alt="Landing" />
        </div>
      </div>
    </div>
  )
}

export default Brand
