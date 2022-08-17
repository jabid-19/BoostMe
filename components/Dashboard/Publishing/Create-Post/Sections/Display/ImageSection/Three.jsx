import Image from 'next/image'
import React from 'react'
const Three = ({ formData }) => {
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
      <div className="grid-rows-2 h-full">
        <div className="h-1/2">
          <Image
            src={formData?.media[1]}
            width={500}
            height={500}
            alt="logo"
            className="object-cover"
          />
        </div>
        <div className="h-1/2">
          <Image
            src={formData?.media[2]}
            width={500}
            height={500}
            alt="logo"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Three
