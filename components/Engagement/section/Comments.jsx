import Image from 'next/image'
import React from 'react'

const Comments = () => {
  return (
    <div className="flex flex-col items-center w-auto mb-10 mx-6 lg:h-screen 2xl:w-[1400px] 2xl:mx-auto">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold break-words text-neutral lg:tracking-wide xl:text-5xl">
          Build your <span className="text-primary">audience</span> and
          <br />
          <span className="text-secondary">grow</span> your brand
        </h1>
        <p className="max-w-md mt-10 text-neutral">
          View your unanswered comments in one simple dashboard. Buffer will highlight the most
          important ones for you.
        </p>
      </div>
      <div>
        <Image
          src="/engagement-section/engagement-dashboard.png"
          width={1200}
          height={700}
          alt="Engagement"
        />
      </div>
    </div>
  )
}

export default Comments
