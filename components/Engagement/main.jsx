import React from 'react'
import Audiences from './section/Audiences'
import Brand from './section/Brand'
import Comments from './section/Comments'

const EngagementMain = () => {
  return (
    <div className="w-full relative">
      <Audiences />
      <Brand />
      <Comments />
    </div>
  )
}

export default EngagementMain
