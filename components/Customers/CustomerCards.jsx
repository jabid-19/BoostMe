import Image from 'next/image'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { GoQuote } from 'react-icons/go'
import imageLoader from '../../helper/imageLoader'
import CampaignPicture from '../../public/customers-section/aaron-beashel.svg'
import CampaignLogo from '../../public/customers-section/campaign-monitor-logo.svg'

const customersInfo = [
  {
    companyLogo: CampaignLogo,
    customerReview:
      'BoostnBoom helps us measure what networks, and what content, is working best for us.',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'primary',
    animation: 'right',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      'BoostnBoom helps us measure what networks, and what content, is working best for us.',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'secondary',
    animation: 'left',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      'BoostnBoom helps us measure what networks, and what content, is working best for us.',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'secondary',
    animation: 'right',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      'BoostnBoom helps us measure what networks, and what content, is working best for us.',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'primary',
    animation: 'left',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      'BoostnBoom helps us measure what networks, and what content, is working best for us.',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'primary',
    animation: 'right',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      'BoostnBoom helps us measure what networks, and what content, is working best for us.',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'secondary',
    animation: 'left',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      'BoostnBoom helps us measure what networks, and what content, is working best for us.',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'secondary',
    animation: 'right',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      'BoostnBoom helps us measure what networks, and what content, is working best for us.',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'primary',
    animation: 'left',
  },
]

const CustomerCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:mx-36 mx-12 my-8 sm:my-20">
      {customersInfo.map((item, index) => (
        <div
          key={index}
          data-aos={`${item.animation == 'right' ? 'fade-right' : 'fade-left'}`}
          className={`border-solid border-4 rounded-2xl px-8 py-4 flex flex-col items-center ${
            item.borderColor == 'primary' ? 'border-primary' : 'border-secondary'
          }`}>
          <Image
            width={200}
            height={50}
            src={item.companyLogo}
            alt="BoostnBoom's customer company logo"
            loader={imageLoader}
          />
          <GoQuote size={'2em'} color={'#777777'} className="text-lg" />
          <h4 className="text-neutral text-lg sm:text-2xl text-center">{item.customerReview}</h4>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="my-4 text-xs sm:text-base text-blue-600 hover:underline underline-offset-4">
            Read The Case Study
            <FiArrowRight className="inline" />
          </a>
          <div className="flex flex-row items-center">
            <div className="avatar">
              <div className="w-8 sm:w-12 rounded-full">
                <Image
                  width={50}
                  height={50}
                  src={item.customerPicture}
                  alt="BoostnBoom's customer image"
                  loader={imageLoader}
                />
              </div>
            </div>
            <p className="pl-4 text-sm sm:text-base text-neutral">{item.customerName}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CustomerCards
