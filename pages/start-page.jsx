import Head from 'next/head'
import React from 'react'
import StartPageMain from '../components/StartPage/main'

const StartPage = () => {
  return (
    <div>
      <Head>
        <title>Boost N Boom | Start Page</title>
        <meta name="description" content="Boost N Boom Start page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StartPageMain />
    </div>
  )
}

export default StartPage
