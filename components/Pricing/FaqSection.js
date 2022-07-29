import React from 'react'

const FaqSection = ({ faqQuestions }) => {
  return (
    <div data-aos="flip-up" className="container mx-auto my-24">
      <div className="sectionHeader mb-5">
        <p className="text-2xl font-bold text-center my-10">FAQ</p>
      </div>
      {faqQuestions.map((item, index) => {
        return (
          <div
            key={index}
            tabIndex="0"
            className="collapse collapse-arrow border border-primary-300 bg-base-100 rounded-box lg:w-2/3 mx-auto mt-2 hover:border-secondary duration-300">
            <div className="collapse-title text-xl font-medium">{item.question}</div>
            <div className="collapse-content">
              <p> {item.answer} </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FaqSection
