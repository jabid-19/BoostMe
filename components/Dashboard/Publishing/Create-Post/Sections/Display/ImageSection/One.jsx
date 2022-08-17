import Image from 'next/image'
import React from 'react'
const One = ({ formData }) => {
  return (
    <div className="grid h-3/4">
      {formData.media[0]?.type?.split('/')[0] === 'video' ? (
        <video className="object-cover h-full" controls>
          <source src={URL.createObjectURL(formData?.media[0])} />
        </video>
      ) : (
        <Image
          src={formData?.media[0]}
          width={500}
          height={1000}
          alt="logo"
          className="object-cover"
        />
      )}
    </div>
  )
}

export default One
