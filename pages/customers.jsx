import React from 'react'
import CustomerCards from '../components/Customers/CustomerCards'
import CustomerHeader from '../components/Customers/CustomerHeader'

const customers = () => {
  return (
    <div>
      <CustomerHeader />
      <CustomerCards />
    </div>
  )
}

export default customers
