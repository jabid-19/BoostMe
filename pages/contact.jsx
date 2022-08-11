import Head from 'next/head'
import React from 'react'
import ContactUsMain from '../components/ContactUs/Main'
const contact = () => {
  return (
    <div>
      <Head>
        <title>Boost N Boom | Contact Us</title>
        <meta name="description" content="Boost Me Contact Us Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactUsMain />
    </div>
  )
}

export default contact
