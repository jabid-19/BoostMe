import React from 'react'
import PricingChart from '../../components/Pricing/PricingChart'
import FaqSection from '../../components/Pricing/FaqSection'
import CustomerHeader from '../../components/Customers/CustomerHeader'
import Head from 'next/head'

const index = () => {
  // Page static data
  const headings = {
    headings: 'Affordable Pricing',
    subHeadings:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
  const pricingPackages = [
    {
      name: 'Name',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      monthlyPrice: '$4',
      yearlyPrice: '$8',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: ['Feature', 'Feature', 'Feature', 'Feature', 'Feature'],
      buttonText: 'Buy Now',
      buttonLink: '#',
    },
    {
      name: 'Name',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      monthlyPrice: '$3',
      yearlyPrice: '$7',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: ['Feature', 'Feature', 'Feature', 'Feature', 'Feature'],
      buttonText: 'Buy Now',
      buttonLink: '#',
    },
    {
      name: 'Name',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      monthlyPrice: '$1',
      yearlyPrice: '$5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: ['Feature', 'Feature', 'Feature', 'Feature', 'Feature'],
      buttonText: 'Buy Now',
      buttonLink: '#',
    },
    {
      name: 'Name',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      monthlyPrice: '$2',
      yearlyPrice: '$6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: ['Feature', 'Feature', 'Feature', 'Feature', 'Feature'],
      buttonText: 'Buy Now',
      buttonLink: '#',
    },
  ]
  const faqQuestions = [
    { question: 'Question', answer: 'Answer' },
    { question: 'Question', answer: 'Answer' },
    { question: 'Question', answer: 'Answer' },
  ]
  const headingDescriptions = {
    subtitle: "YOU'RE IN GOOD HANDS",
    title: 'Our',
    titleSpan: 'Featured Products',
    description: 'See our featured products and explore the reasonable product prices',
  }
  return (
    <>
      <Head>
        <title>Boost ME | Pricing</title>
      </Head>
      <CustomerHeader headingDescriptions={headingDescriptions} />
      <PricingChart headings={headings} pricingPackages={pricingPackages} />
      <FaqSection faqQuestions={faqQuestions} />
    </>
  )
}

export default index
