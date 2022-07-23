import Image from 'next/image'
import React, { useState } from 'react'

const Showcase = () => {
  const [tabs, setTabs] = useState(1)

  return (
    <div className="flex items-center flex-col w-auto mx-6 lg:h-screen 2xl:w-[1400px] 2xl:mx-auto mb-20">
      <div data-aos="zoom-in" className="tabs mb-10">
        <a
          className={`tab tab-lg tab-lifted text-neutral ${
            tabs === 1 && 'tab-active text-primary'
          }`}
          onClick={() => setTabs(1)}>
          Small Business
        </a>
        <a
          className={`tab tab-lg tab-lifted text-neutral ${
            tabs === 2 && 'tab-active text-primary'
          }`}
          onClick={() => setTabs(2)}>
          Social Media
        </a>
        <a
          className={`tab tab-lg tab-lifted text-neutral ${
            tabs === 3 && 'tab-active text-primary'
          }`}
          onClick={() => setTabs(3)}>
          NFTs
        </a>
      </div>
      {tabs === 1 && (
        <div className="flex flex-col-reverse lg:flex-row gap-10 w-full md:flex-row">
          <div
            data-aos="fade-up-right"
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
          <div data-aos="fade-up-left" className="w-[95%] mx-auto flex lg:w-1/2 ">
            <Image src="/start-page/customize-1.png" width={650} height={600} alt="Engagement" />
          </div>
        </div>
      )}
      {tabs === 2 && (
        <div className="flex flex-col gap-10 w-full md:flex-row">
          <div data-aos="fade-up-right" className="w-[95%] mx-auto flex justify-center lg:w-1/2 ">
            <Image
              src="/start-page/Small-business-1.png"
              width={550}
              height={620}
              alt="Engagement"
            />
          </div>
          <div
            data-aos="fade-up-left"
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
        </div>
      )}
      {tabs === 3 && (
        <div className="flex flex-col-reverse gap-10 w-full md:flex-row">
          <div
            data-aos="fade-up-right"
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
          <div data-aos="fade-up-left" className="w-[95%] mx-auto flex justify-center lg:w-1/2 ">
            <Image src="/start-page/NFT-1.png" width={550} height={620} alt="Engagement" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Showcase
