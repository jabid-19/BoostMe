import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'

const PricingChart = ({ headings, pricingPackages }) => {
  const [pricingMode, setPricingMode] = useState('monthly')
  return (
    <div className="pricingChartContainer container mx-auto">
      <div data-aos="fade-down" className="sectionHeader flex flex-col items-center">
        <p className="text-2xl font-bold text-center my-5">{headings.headings}</p>
        <p className="text-sm w-2/3 text-center mx-auto ">{headings.subHeadings}</p>
        <div className="btn-group my-5">
          <button
            className={
              pricingMode == 'monthly'
                ? 'btn-sm bg-primary rounded-l-full text-white'
                : 'btn-sm bg-slate-200 rounded-l-full'
            }
            onClick={() => setPricingMode('monthly')}>
            Monthly
          </button>
          <button
            className={
              pricingMode == 'yearly'
                ? 'btn-sm bg-primary text-white rounded-r-full'
                : 'btn-sm bg-slate-200 rounded-r-full'
            }
            onClick={() => setPricingMode('yearly')}>
            Yearly
          </button>
        </div>
      </div>
      <div className="cardContainer my-5 grid lg:grid-cols-4 md:grid-cols-3 gap-4 sm:grid-cols-2 p-3 md:p-0 lg:p-0">
        {pricingPackages.map((item, index) => {
          return (
            <div
              data-aos="zoom-in"
              className="card-compact min-h-max bg-base-100 border-2 border-primary-300 hover:border-secondary duration-300"
              key={index}>
              <div className="card-body text-center lg:text-left">
                <h2 className="card-title mx-auto lg:ml-0">{item.name}</h2>
                <p className="text-3xl font-bold">
                  {pricingMode == 'monthly' ? item.monthlyPrice : item.yearlyPrice}
                  <span className="text-sm">
                    {pricingMode == 'monthly' ? '  / month' : '  / year'}
                  </span>
                </p>
                <p className=" text-center lg:text-justify text-sm">{item.description}</p>
                <hr />
                <ul className="flex flex-col">
                  {item.features.map((feature, index) => {
                    return (
                      <li key={index} className="my-1">
                        <TiTick className="inline-block mr-2 text-primary" />
                        {feature}
                      </li>
                    )
                  })}
                </ul>

                <div className="card-actions justify-center">
                  <button className="btn-sm w-2/3 btn-primary text-white rounded-2xl">
                    <a href={item.buttonLink}>{item.buttonText}</a>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PricingChart
