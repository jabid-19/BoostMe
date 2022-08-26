import React from 'react'

const FaqSection = ({ faqQuestions }) => {
  return (
    // <div data-aos="flip-up" className="container mx-auto my-24">
    //   <div className="sectionHeader mb-5">
    //     <p className="text-2xl font-bold text-center my-10">FAQ</p>
    //   </div>
    //   {faqQuestions.map((item, index) => {
    //     return (
    //       <div
    //         key={index}
    //         tabIndex="0"
    //         className="collapse collapse-arrow border border-primary-300 bg-base-100 rounded-box lg:w-2/3 mx-auto mt-2 hover:border-secondary duration-300">
    //         <div className="collapse-title text-xl font-medium">{item.question}</div>
    //         <div className="collapse-content">
    //           <p> {item.answer} </p>
    //         </div>
    //       </div>
    //     )
    //   })}
    //   </div>
    <div
      data-aos="zoom-in"
      className="flex items-center justify-center w-auto mx-6 my-24 2xl:w-[1400px] 2xl:mx-auto">
      <section className="w-full">
        <div className="flex flex-col justify-center px-4 py-8  md:p-8">
          <div>
            <h1 className="text-4xl text-center font-semibold break-words text-neutral lg:tracking-wide xl:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 mb-8 text-neutral text-center">Questions asked by many users</p>
          </div>
          <div className="space-y-4">
            {faqQuestions.map((item, index) => (
              <div key={index}>
                <details className="border border-primary rounded-lg">
                  <summary className="px-4 py-6 font-bold text-neutral">{item.question}</summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-neutral text-justify">
                    {item.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FaqSection
