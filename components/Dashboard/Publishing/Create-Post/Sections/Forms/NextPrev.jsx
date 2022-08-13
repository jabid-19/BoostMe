import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
const NextPrev = ({ formStep, prevFormStep }) => {
  return (
    <div className="flex gap-4 justify-between w-full mt-6">
      <button
        type="button"
        className="
                inline-flex
                items-center
                px-6
                py-2
                text-sm text-gray-800
                rounded-lg
                shadow
                outline-none
                gap-x-1
                hover:bg-secondary
            "
        onClick={formStep <= 4 && formStep > 1 ? prevFormStep : null}>
        <AiOutlineArrowLeft />
        Back
      </button>
      <button
        className="
            inline-flex
            items-center
            px-6
            py-2
            text-sm
            text-gray-800
            rounded-lg
            shadow
            outline-none
            gap-x-1
            hover:bg-primary
          "
        type="submit">
        Next
        <AiOutlineArrowRight />
      </button>
    </div>
  )
}

export default NextPrev
