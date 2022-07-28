import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
import BrandLogo from '../../../public/landing-section/BrandLogo.png'
import BrandLogo2 from '../../../public/landing-section/BrandLogo2.png'
import Kraftriket from '../../../public/landing-section/Kraftriket.png'
import Neovotech from '../../../public/landing-section/Neovotech.png'
import Unanitech from '../../../public/landing-section/Unanitech.png'
const Brand = () => {
  return (
    <div className="w-auto bg-primary mt-24">
      <div className="h-[250px] mt-8 mb-20 flex items-center justify-around flex-wrap md:h-[200px] 2xl:mx-auto">
        <div data-aos="zoom-in" className="flex items-center px-3">
          <Image src={Neovotech} width={63} height={77} alt="Neovotech Logo" loader={imageLoader} />
        </div>
        <div data-aos="zoom-in" className="flex items-center px-3">
          <Image
            src={Kraftriket}
            width={200}
            height={77}
            alt="Kraftriket Logo"
            loader={imageLoader}
          />
        </div>
        <div data-aos="zoom-in" className="flex items-center px-3">
          <Image src={Unanitech} width={80} height={77} alt="Unanitech Logo" loader={imageLoader} />
        </div>
        <div data-aos="zoom-in" className="flex items-center px-3">
          <Image src={BrandLogo} width={80} height={77} alt="Brand Logo" loader={imageLoader} />
        </div>
        <div data-aos="zoom-in" className="flex items-center px-3">
          <Image src={BrandLogo2} width={80} height={77} alt="Brand Logo" loader={imageLoader} />
        </div>
      </div>
    </div>
  )
}

export default Brand
