import Image from 'next/image'
import React from 'react'
const FourOrMore = ({ formData }) => {
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
      <div className="grid-rows-3 h-full">
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
        <div className="h-1/3 relative">
          <div>
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
          <div className="absolute top-[25%] left-[40%] bg-#696969 z-[1000] h-[200px]  border-primary">
            <h1 className="text-2xl text-white font-semibold">+{formData.media.length - 3}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourOrMore
