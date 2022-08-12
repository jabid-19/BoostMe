import React, { useState } from 'react'
import Forms from './Sections/Forms'
import Visualize from './Sections/Visualize/Visualize'

const CreatePostCreate = () => {
  const [formData, setFormData] = useState({
    pageName: '',
    logo: '',
    category: '',
    pageUrl: '',
  })
  return (
    <div className="flex justify-center items-center gap-5 w-full">
      <div className="w-3/5 flex justify-center items-center">
        <Forms formData={formData} setFormData={setFormData} />
      </div>
      <div className="w-2/5 flex justify-center items-center">
        <Visualize formData={formData} setFormData={setFormData} />
      </div>
    </div>
  )
}

export default CreatePostCreate
