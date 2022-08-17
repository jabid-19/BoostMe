import Image from 'next/image'
import React from 'react'
const Two = ({ formData }) => {
  return (
    <div className="grid grid-cols-2 gap-1 h-full">
      {formData.media[0]?.type?.split('/')[0] === 'video' ? (
        <div>
          <video className="h-[312px] object-cover" controls>
            <source src={URL.createObjectURL(formData?.media[0])} />
          </video>
        </div>
      ) : (
        <div className="">
          <Image
            src={formData?.media[0]}
            width={500}
            height={1100}
            alt="logo"
            className="object-cover"
          />
        </div>
      )}
      {formData.media[1]?.type?.split('/')[0] === 'video' ? (
        <div>
          <video className="h-[312px] object-cover" controls>
            <source src={URL.createObjectURL(formData?.media[1])} />
          </video>
        </div>
      ) : (
        <div className="">
          <Image
            src={formData?.media[1]}
            width={500}
            height={1100}
            alt="logo"
            className="object-cover"
          />
        </div>
      )}
    </div>
  )
}

export default Two
