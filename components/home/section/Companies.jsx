import Image from 'next/image'
import React from 'react'
const Companies = () => {
  return (
    <main className="w-full bg-primary">
      <div className="w-[90%] mx-auto flex flex-wrap justify-between items-center py-[30px] md:w-[90%] lg:w-[90%] xl:w-[1200px]">
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
    </main>
  )
}

export default Companies
