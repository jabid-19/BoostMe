import Head from 'next/head'
import React from 'react'
import EngagementMain from '../components/Engagement/main'

const engagement = () => {
  return (
    <div>
      <Head>
        <title>Boost N Boom | Engagement</title>
        <meta
          name="description"
          content="Want boosting and content management for your business here comes Boost N Boom | Engagement"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EngagementMain />
    </div>
  )
}

export default engagement
