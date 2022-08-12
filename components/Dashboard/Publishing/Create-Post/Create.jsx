import React from 'react'
import Forms from './Sections/Forms'
import Visualize from './Sections/Visualize/Visualize'

const CreatePostCreate = () => {
  return (
    <div className="flex justify-center items-center gap-5 w-full">
      <div className="w-3/5 flex justify-center items-center">
        <Forms />
      </div>
      <div className="w-2/5 flex justify-center items-center">
        <Visualize />
      </div>
    </div>
  )
}

export default CreatePostCreate
