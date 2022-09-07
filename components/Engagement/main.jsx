import React from 'react'
import Traffic from '../StartPage/section/Traffic'
import Audiences from './section/Audiences'
import Brand from './section/Brand'
import Comments from './section/Comments'
import CommentsCheck from './section/CommentsCheck'
import EngagementBanner from './section/EngagementBanner'

const EngagementMain = () => {
  const trafficHeading = {
    titleStart: '',
    titlePrimary: 'পাবলিশ ',
    titleMiddle: 'এবং',
    titleSecondary: 'শিডিউল ',
    titleLast: 'করুন সহজেই',
    description:
      'Facebook, Instragam, TikTok, Google Business Pages, YouTube সহ সকল সোশ্যাল মিডিয়া প্ল্যাটফর্মে সহজে পোস্ট শিডিউল করুন এবং পোস্ট করুন BoostnBoom থেকে সহজেই।',
  }

  return (
    <div className="w-full relative">
      <Traffic trafficHeading={trafficHeading} />
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
