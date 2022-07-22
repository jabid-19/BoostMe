import React, { useState } from 'react'

const PricingChart = ({ headings, pricingPackages }) => {
  const [pricingMode, setPricingMode] = useState('monthly')
  return (
    <div className="pricingChartContainer container mx-auto">
      <div className="sectionHeader flex flex-col items-center">
        <p className="text-2xl font-bold text-center my-5">{headings.headings}</p>
        <p className="text-sm w-2/3 text-center mx-auto ">{headings.subHeadings}</p>
        <div className="btn-group my-5">
          <button
            className={
              pricingMode == 'monthly' ? 'btn-sm bg-primary text-white' : 'btn-sm bg-slate-200'
            }
            onClick={() => setPricingMode('monthly')}>
            Monthly
          </button>
          <button
            className={
              pricingMode == 'yearly' ? 'btn-sm bg-primary text-white' : 'btn-sm bg-slate-200'
            }
            onClick={() => setPricingMode('yearly')}>
            Yearly
          </button>
        </div>
      </div>
      <div className="cardContainer my-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4">
        {pricingPackages.map((item, index) => {
          return (
            <div
              className="card h-96 bg-base-100 border-2 border-primary-300 hover:border-secondary duration-300"
              key={index}>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>
                  {pricingMode == 'monthly' ? item.monthlyPrice : item.yearlyPrice}
                  <span>{pricingMode == 'monthly' ? '  / month' : '  / year'}</span>
                </p>
                <p>{item.description}</p>
                <hr />

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
