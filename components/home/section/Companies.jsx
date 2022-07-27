import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
import BrandLogo from '../../../public/landing-section/BrandLogo.png'
import BrandLogo2 from '../../../public/landing-section/BrandLogo2.png'
import Kraftriket from '../../../public/landing-section/Kraftriket.png'
import Neovotech from '../../../public/landing-section/Neovotech.png'
import Unanitech from '../../../public/landing-section/Unanitech.png'
const Companies = () => {
  return (
    <main className="w-full bg-primary">
      <div className="w-[90%] mx-auto flex flex-wrap justify-between items-center py-[30px] md:w-[90%] lg:w-[90%] xl:w-[1200px]">
        <div data-aos="zoom-in" className="flex items-center">
          <Image src={Neovotech} width={63} height={77} alt="Neovotech Logo" loader={imageLoader} />
        </div>
        <div data-aos="zoom-in" className="flex items-center">
          <Image
            src={Kraftriket}
            width={200}
            height={77}
            alt="Kraftriket Logo"
            loader={imageLoader}
          />
        </div>
        <div data-aos="zoom-in" className="flex items-center">
          <Image src={Unanitech} width={80} height={77} alt="Unanitech Logo" loader={imageLoader} />
        </div>
        <div data-aos="zoom-in" className="flex items-center">
          <Image src={BrandLogo} width={80} height={77} alt="Brand Logo" loader={imageLoader} />
        </div>
        <div data-aos="zoom-in" className="flex items-center">
          <Image src={BrandLogo2} width={80} height={77} alt="Brand Logo" loader={imageLoader} />
        </div>
      </div>
    </main>
  )
}

export default Companies
