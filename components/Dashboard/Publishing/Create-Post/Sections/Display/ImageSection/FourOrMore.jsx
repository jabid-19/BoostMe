import Image from 'next/image'
import React from 'react'
const FourOrMore = ({ formData }) => {
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
      <div className="grid-rows-3 h-full">
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
          <div>
            <Image
              src={formData?.media[3]}
              width={500}
              height={320}
              alt="logo"
              className="object-cover"
              style={{ filter: 'brightness(0.5)' }}
            />
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
