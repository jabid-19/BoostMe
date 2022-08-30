import Head from 'next/head'
import React from 'react'
import ContactUsMain from '../components/ContactUs/Main'
const contact = () => {
  return (
    <div>
      <Head>
        <title>Boost N Boom | Contact Us</title>
        <meta
          name="description"
          content="Want boosting and content management for your business here comes Boost N Boom | Contact Us"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactUsMain />
    </div>
  )
}

export default contact
