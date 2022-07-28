import React from 'react'
import { faqData } from '../../../data/FaqArray'

const FAQ = () => {
  return (
    <div className="flex items-center justify-center w-auto mx-6 mb-20 mt-10 2xl:w-[1400px] 2xl:mx-auto">
      <section className="w-full">
        <div className="flex flex-col justify-center px-4 py-8  md:p-8">
          <div data-aos="fade-down">
            <h1 className="text-4xl text-center font-semibold break-words text-neutral lg:tracking-wide xl:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 mb-8 text-neutral text-center">Questions asked by many users</p>
          </div>
          <div data-aos="fade-up" className="space-y-4">
            {faqData?.map((faq, index) => (
              <div key={index}>
                <details className="border border-primary rounded-lg">
                  <summary className="px-4 py-6 font-bold text-neutral">{faq.title}</summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-neutral text-justify">{faq.data}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
