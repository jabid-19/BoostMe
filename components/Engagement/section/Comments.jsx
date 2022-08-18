import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../helper/imageLoader'
// import EngagementDashboard from '../../../public/engagement-section/engagement-dashboard.png'
const Comments = () => {
  return (
    <div className="flex flex-col items-center w-auto mb-10 mx-6 lg:min-h-[70vh] 2xl:w-[1400px] 2xl:mx-auto">
      <div data-aos="fade-down" className="flex flex-col items-center text-center mb-10">
        <h1 className="max-w-2xl text-4xl font-semibold break-words text-neutral lg:tracking-wide xl:text-5xl">
          Build your <span className="text-primary">audience</span> and
          <br />
          <span className="text-secondary">grow</span> your brand
        </h1>
        <p className="max-w-md mt-10 text-neutral">
          View your unanswered comments in one simple dashboard. Buffer will highlight the most
          important ones for you.
        </p>
      </div>
      <div data-aos="fade-up">
        <Image
          src="/engagement-section/audience.png"
          width={700}
          height={700}
          alt="BoostMe's Digital Marketing Dashboard"
          loader={imageLoader}
        />
      </div>
    </div>
  )
}

export default Comments
