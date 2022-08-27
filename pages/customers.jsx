import Head from 'next/head'
import React from 'react'
import CustomerCards from '../components/Customers/CustomerCards'
import CustomerHeader from '../components/Customers/CustomerHeader'

const customers = () => {
  const headingDescriptions = {
    subtitle: "YOU'RE IN GOOD COMPANY",
    title: 'Our',
    titleSpan: 'Featured Customers',
    description:
      'See how big brands and growing businesses find social media success with BoostnBoom',
  }
  return (
    <div>
      <Head>
        <title>Boost N Boom | Customers</title>
        <meta name="description" content="Boost N Boom Customers" />
      </Head>
      <CustomerHeader headingDescriptions={headingDescriptions} />
      <CustomerCards />
    </div>
  )
}

export default customers
