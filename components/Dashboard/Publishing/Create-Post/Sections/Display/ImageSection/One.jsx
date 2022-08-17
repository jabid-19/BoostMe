import Image from 'next/image'
import React from 'react'
const One = ({ formData }) => {
  return (
    <div className="grid h-3/4">
      <Image
        src={formData?.media[0]}
        width={500}
        height={1000}
        alt="logo"
        className="object-cover"
      />
    </div>
  )
}

export default One
