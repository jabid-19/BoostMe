import React from 'react'
import Forms from './Sections/Forms'

const CreatePostCreate = () => {
  return (
    <div className="flex justify-center items-center gap-5 w-full">
      <div className="w-4/5 flex justify-center items-center">
        <Forms />
      </div>
      <div className="w-1/5 flex justify-center items-center">2</div>
    </div>
  )
}

export default CreatePostCreate
