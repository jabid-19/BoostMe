import Image from 'next/image'
import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { BiComment, BiMessage, BiShare } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { GoGlobe } from 'react-icons/go'
import { MdCall } from 'react-icons/md'
const Visualize = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 justify-start h-full">
            {/* top section */}
            <div className="h-1/6 mt-8 w-full">
              {formData.logo ? (
                <div className="flex justify-between items-center gap-2 px-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={formData?.logo}
                      width={50}
                      height={50}
                      alt="logo"
                      className="rounded-full"
                    />
                    <div>
                      <h5 className="text-md font-bold">{formData.pageName}</h5>
                      <p className="text-sm text-gray-400">
                        Sponsored <GoGlobe className="inline-block -mt-1" />
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <BsThreeDots />
                    <FaTimes />
                  </div>
                </div>
              ) : null}
            </div>

            {/* second section */}
            <div className="h-3/6 w-full px-4">
              <div className="h-1/6 text-start overflow-x-auto">
                {formData.caption && <p>{formData.caption}</p>}
              </div>
              <div className="">
                {formData.media && (
                  <Image src={formData?.media} width={500} height={400} alt="logo" />
                )}
              </div>
            </div>
            {/* third section */}

            <div className="h-1/6 mt-2  mb-2 w-full ">
              {formData.pageCategory && formData.pageName ? (
                <div className="px-4 flex  justify-between items-center mt-6 gap-4 h-1/6 ">
                  <div>
                    <h5 className="text-md font-bold">{formData.pageName}</h5>
                    <p className="text-gray-600">{formData.pageCategory}</p>
                  </div>
                  {formData.sendMessage === 'yes' && (
                    <div className="border-2 flex items-center gap-2 py-1 px-1 rounded-md">
                      <div>
                        <BiMessage />
                      </div>
                      <div className="text-sm">SEND MESSAGE</div>
                    </div>
                  )}
                  {formData.sendMessage === 'no' && (
                    <div className="border-2 flex items-center gap-2 py-1 px-1 rounded-md">
                      <div>
                        <MdCall />
                      </div>
                      <div className="text-sm">CALL NOW</div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
            {/* last section */}
            <div className="w-full px-4 pt-4 flex justify-between items-center gap-4  border-t-2 h-0.5/6">
              <div className="flex items-center gap-2">
                <AiOutlineLike />
                Like
              </div>
              <div className="flex items-center gap-2">
                <BiComment />
                Comment
              </div>
              <div className="flex items-center gap-2">
                <BiShare className="scale-x-[-1]" />
                Share
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visualize
