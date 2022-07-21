import React from 'react'
import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import CampaignLogo from '../../public/customers-section/campaign-monitor-logo.svg'
import CampaignPicture from '../../public/customers-section/aaron-beashel.svg'

const customersInfo = [
  {
    companyLogo: CampaignLogo,
    customerReview:
      '"BoostMe helps us measure what networks, and what content, is working best for us."',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'primary',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      '"BoostMe helps us measure what networks, and what content, is working best for us."',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'secondary',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      '"BoostMe helps us measure what networks, and what content, is working best for us."',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'secondary',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      '"BoostMe helps us measure what networks, and what content, is working best for us."',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'primary',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      '"BoostMe helps us measure what networks, and what content, is working best for us."',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'primary',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      '"BoostMe helps us measure what networks, and what content, is working best for us."',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'secondary',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      '"BoostMe helps us measure what networks, and what content, is working best for us."',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'secondary',
  },
  {
    companyLogo: CampaignLogo,
    customerReview:
      '"BoostMe helps us measure what networks, and what content, is working best for us."',
    customerPicture: CampaignPicture,
    customerName: 'Aaron Beashel',
    borderColor: 'primary',
  },
]

const CustomerCards = () => {
  return (
    <div className="grid grid-cols-2 gap-16 mx-36 my-12">
      {customersInfo.map((item, index) => (
        <div
          key={index}
          className={`border-solid border-4 rounded-2xl px-8 py-4 flex flex-col items-center ${
            item.borderColor == 'primary' ? 'border-primary' : 'border-secondary'
          }`}>
          <Image width={200} height={50} src={item.companyLogo} alt="" loader={imageLoader} />
          <h4 className="text-neutral text-2xl">{item.customerReview}</h4>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="my-4 text-blue-600 hover:underline underline-offset-4">
            Read The Case Study
          </a>
          <div className="flex flex-row items-center">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <Image
                  width={50}
                  height={50}
                  // className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src={item.customerPicture}
                  alt=""
                  loader={imageLoader}
                />
              </div>
            </div>
            <p className="pl-4 text-neutral">{item.customerName}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CustomerCards
