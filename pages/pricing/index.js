import React from 'react'
import PricingChart from '../../components/Pricing/PricingChart'
import FaqSection from '../../components/Pricing/FaqSection'

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
  return (
    <>
      <PricingChart headings={headings} pricingPackages={pricingPackages} />
      <FaqSection faqQuestions={faqQuestions} />
    </>
  )
}

export default index
