import React from 'react'
import Audiences from './section/Audiences'
import Brand from './section/Brand'
import Comments from './section/Comments'
import CommentsCheck from './section/CommentsCheck'
import EngagementBanner from './section/EngagementBanner'

const EngagementMain = () => {
  return (
    <div className="w-full relative">
      <Audiences />
      <Brand />
      <Comments />
      <CommentsCheck />
      <EngagementBanner />
    </div>
  )
}

export default EngagementMain
