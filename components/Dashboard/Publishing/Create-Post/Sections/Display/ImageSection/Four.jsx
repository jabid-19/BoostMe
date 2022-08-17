import Image from 'next/image'
import React from 'react'
const Four = ({ formData }) => {
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
      <div className="grid-rows-3">
        <div className="h-[104px]">
          {formData.media[1]?.type?.split('/')[0] === 'video' ? (
            <video className="h-[104px] object-cover" controls>
              <source src={URL.createObjectURL(formData?.media[1])} />
            </video>
          ) : (
            <Image
              src={formData?.media[1]}
              width={500}
              height={360}
              alt="logo"
              className="object-cover"
            />
          )}
        </div>
        <div className="h-[104px]">
          {formData.media[2]?.type?.split('/')[0] === 'video' ? (
            <video className="h-[104px] object-cover" controls>
              <source src={URL.createObjectURL(formData?.media[2])} />
            </video>
          ) : (
            <Image
              src={formData?.media[2]}
              width={500}
              height={360}
              alt="logo"
              className="object-cover"
            />
          )}
        </div>
        <div className="h-[104px]">
          {formData.media[3]?.type?.split('/')[0] === 'video' ? (
            <video className="h-[104px] object-cover" controls>
              <source src={URL.createObjectURL(formData?.media[3])} />
            </video>
          ) : (
            <Image
              src={formData?.media[3]}
              width={500}
              height={360}
              alt="logo"
              className="object-cover"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Four
