import Image from 'next/image'
import React from 'react'

const Customization = () => {
  return (
    <div className="flex items-center w-auto mx-6 mb-20 mt-10 lg:h-screen lg:mb-0 2xl:w-[1400px] 2xl:mx-auto">
      {/* section div */}
      <div className="flex flex-col-reverse lg:flex-row gap-10 w-full md:flex-row">
        <div
          data-aos="fade-down-right"
          className="w-[90%] mx-auto flex flex-col justify-center item-center lg:w-1/2 ">
          <h1 className="text-4xl text-center font-semibold break-words text-neutral md:text-start lg:tracking-wide xl:text-5xl">
            Build a loyal and <span className="text-primary">audience</span> on
            <br />
            <span className="text-secondary">social media</span>
          </h1>
          <p className="text-neutral text-center text-base mt-10 md:text-start">
            See all of your comments, stay on top of important <br /> interactions, and turn
            followers into fans <br /> using Buffer.
          </p>
          <button className="btn btn-wide rounded-full mt-10 btn-primary mx-auto text-white normal-case md:mx-0">
            Create Your Page For Free
          </button>
        </div>
        <div data-aos="fade-down-left" className="w-[95%] mx-auto flex lg:w-1/2 ">
          <Image src="/start-page/customize-1.png" width={650} height={600} alt="Engagement" />
        </div>
      </div>
    </div>
  )
}

export default Customization
