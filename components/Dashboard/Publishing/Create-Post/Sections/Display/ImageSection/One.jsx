import Image from 'next/image'
import React from 'react'
const One = () => {
  return (
    <div className="grid grid-cols-2 gap-1 h-full">
      <div className="">
        <Image
          src={formData?.media[0]}
          width={500}
          height={1000}
          alt="logo"
          className="object-cover"
        />
      </div>
      <div>
        <Image
          src={formData?.media[1]}
          width={500}
          height={1000}
          alt="logo"
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default One
