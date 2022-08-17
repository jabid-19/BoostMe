import Image from 'next/image'
import React from 'react'
const Four = ({ formData }) => {
  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="">
        <Image
          src={formData?.media[0]}
          width={500}
          height={1000}
          alt="logo"
          className="object-cover"
        />
      </div>
      <div className="grid-rows-3">
        <div className="h-1/3">
          <Image
            src={formData?.media[1]}
            width={500}
            height={320}
            alt="logo"
            className="object-cover"
          />
        </div>
        <div className="h-1/3">
          <Image
            src={formData?.media[2]}
            width={500}
            height={320}
            alt="logo"
            className="object-cover"
          />
        </div>
        <div className="h-1/3 relative">
          <Image
            src={formData?.media[3]}
            width={500}
            height={320}
            alt="logo"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Four
