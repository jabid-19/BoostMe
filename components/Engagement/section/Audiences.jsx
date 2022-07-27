import React from 'react'
const Audiences = () => {
  return (
    <div className="w-auto mx-6 mt-12 lg:min-h-screen lg:mt-0 2xl:w-[1400px] 2xl:mx-auto">
      {/* section div */}
      <div className="flex flex-col w-full md:flex-row">
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
          <button className="btn btn-wide mt-10 btn-primary mx-auto rounded-full text-white normal-case md:mx-0">
            Start 14 Days Free Trial
          </button>
        </div>

        <div data-aos="fade-up-left" className="w-[95%] mx-auto flex lg:w-1/2 ">
          <video autoPlay playsInline loop muted>
            <source src="/engagement-section/EngagementVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Audiences
