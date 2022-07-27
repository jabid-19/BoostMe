import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { testimonialsData } from '../../../data/TestimonialData'
import imageLoader from '../../../helper/imageLoader'
import BoxBackground2 from '../../../public/common/BoxBackground2.png'
const Testimonials = () => {
  return (
    <div className="relative">
      <div data-aos="fade-down-right" className="hidden lg:block lg:absolute lg:left-0 lg:top-12">
        <Image
          src={BoxBackground2}
          width={400}
          height={100}
          alt="BoostMe's Background"
          loader={imageLoader}
        />
      </div>
      <div data-aos="fade-down-left" className="w-full flex justify-center lg:justify-end">
        <h1 className="text-2xl font-semibold break-words md:text-4xl text-neutral lg:tracking-wide py-14 xl:text-5xl">
          Business <span className="text-primary">all over the world</span> <br />
          <span className="text-secondary">trust</span> us to build the brand
        </h1>
      </div>
      <div className="relative flex items-center justify-center flex-col w-auto mx-6 2xl:w-[1400px] 2xl:mx-auto mb-20">
        <div className="w-full">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}>
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.key}>
                <SwiperSlide key={testimonial.key}>
                  <div className="w-full ml-2 flex flex-wrap flex-col gap-16 justify-between items-center py-16 lg:flex-row md:px-16">
                    {Object.keys(testimonial?.data).map((item) => (
                      <div
                        className="relative w-[70%] border-4 border-primary rounded-3xl lg:max-w-[25%]"
                        key={item}>
                        <div className="w-[80px] absolute -ml-8 -mt-8 md:w-[100px] md:-ml-12 md:-mt-12">
                          <Image
                            src={testimonial.data[item]?.image}
                            width={100}
                            height="100%"
                            alt="BoostMe's testimonials"
                            loader={imageLoader}
                          />
                        </div>
                        <div className="mt-10 py-6">
                          <div className="flex justify-center">
                            <div className="w-full px-4">
                              <p className=" leading-relaxed text-neutral mb-4">
                                {testimonial.data[item].comment}
                              </p>
                              <p className="text-neutral font-bold">
                                {testimonial.data[item].name}
                              </p>
                              <p className="text-neutral font-bold">
                                {testimonial.data[item].position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
