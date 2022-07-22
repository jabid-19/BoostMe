import Image from 'next/image'
import React from 'react'
const Brand = () => {
  return (
    <div
      className="w-auto mt-8 flex items-center bg-primary justify-around flex-wrap h-[200px]  2xl:mx-auto mb-40"
      style={{ border: '1px solid red' }}>
      <div className="flex items-center">
        <Image src="/landing-section/Image 7.png" width={63} height={77} alt="Landing" />
      </div>
      <div className="flex items-center">
        <Image src="/landing-section/Kraftriket.png" width={200} height={77} alt="Landing" />
      </div>
      <div className="flex items-center">
        <Image src="/landing-section/Unanitech.png" width={80} height={77} alt="Landing" />
      </div>
      <div className="flex items-center">
        <Image src="/landing-section/Black_White.png" width={80} height={77} alt="Landing" />
      </div>
      <div className="flex items-center">
        <Image src="/landing-section/Black_White2.png" width={80} height={77} alt="Landing" />
      </div>
    </div>
  )
}

export default Brand
