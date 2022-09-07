import Image from 'next/image'
import React from 'react'
const Three = ({ formData }) => {
  return (
    <div className="grid grid-cols-2 gap-1">
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
      <div className="grid-rows-2 h-full">
        <div className="h-[156px]">
          {formData.media[1]?.type?.split('/')[0] === 'video' ? (
            <video className="h-[152px] object-cover" controls>
              <source src={URL.createObjectURL(formData?.media[1])} />
            </video>
          ) : (
            <Image
              src={formData?.media[1]}
              width={500}
              height={540}
              alt="logo"
              className="object-cover"
            />
          )}
        </div>

        <div className="h-[156px]">
          {formData.media[2]?.type?.split('/')[0] === 'video' ? (
            <video className="h-[156px] object-cover" controls>
              <source src={URL.createObjectURL(formData?.media[2])} />
            </video>
          ) : (
            <Image
              src={formData?.media[2]}
              width={500}
              height={550}
              alt="logo"
              className="object-cover"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Three
