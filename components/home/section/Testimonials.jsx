import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className="min-h-screen mt-16">
      <div>
        {/* text div head */}
        <div className="flex justify-around">
          <div className="hidden lg:block lg:flex items-center lg:-ml-40">
            <Image src="/landing-section/Frame 11.png" width={400} height={100} alt="Landing" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide py-14 xl:text-5xl">
              Business <span className="text-primary">all over the world</span> <br />
              <span className="text-secondary">trust</span> us to build the brand
            </h1>
          </div>
        </div>

        {/* card design */}
        <div></div>
      </div>
    </div>
  )
}

export default Testimonials
