import React from 'react'
import Traffic from '../StartPage/section/Traffic'
import Audiences from './section/Audiences'
import Brand from './section/Brand'
import Comments from './section/Comments'
import CommentsCheck from './section/CommentsCheck'
import EngagementBanner from './section/EngagementBanner'

const EngagementMain = () => {
  return (
    <div className="w-full relative">
      <Traffic />
      <Audiences />
      <Brand />
      <div className="lg:my-32">
        <Comments />
        <CommentsCheck />
      </div>
      <EngagementBanner />
    </div>
  )
}

export default EngagementMain
