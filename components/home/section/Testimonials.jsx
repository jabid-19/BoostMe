import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

import 'swiper/css'
import 'swiper/css/pagination'

// Import css files
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { testimonialsData } from '../../../data/TestimonialData'
import imageLoader from '../../../helper/imageLoader'
import BoxBackground2 from '../../../public/common/BoxBackground2.png'

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="relative my-10 lg:my-[7%]">
      <div data-aos="fade-right" className="hidden lg:block lg:absolute lg:left-0 lg:top-12">
        <Image
          src={BoxBackground2}
          width={400}
          height={100}
          alt="BoostMe's Background"
          loader={imageLoader}
        />
      </div>
      <div data-aos="fade-left" className="w-full flex justify-center lg:justify-end lg:pr-28">
        <h1 className="text-2xl font-semibold break-words md:text-4xl text-neutral lg:tracking-wide py-14 xl:text-5xl text-center lg:text-left">
          Business <span className="text-primary">all over the world</span> <br />
          <span className="text-secondary">trust</span> us to build the brand
        </h1>
      </div>
      <div className="relative container mx-auto">
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div className="mt-20 mx-14 flex justify-center items-center" key={index}>
              <div className="relative w-[70%] border-4 border-primary rounded-3xl ">
                <div className="w-[80px] absolute -ml-8 -mt-8 md:w-[100px] md:-ml-12 md:-mt-12">
                  <Image
                    src={testimonial?.image}
                    width={100}
                    height="100%"
                    alt="BoostMe's testimonials"
                    loader={imageLoader}
                  />
                </div>
                <div className="mt-10 py-6">
                  <div className="flex justify-center">
                    <div className="w-full px-4">
                      <p className=" leading-relaxed text-neutral mb-4">{testimonial.comment}</p>
                      <p className="text-neutral font-bold">{testimonial.name}</p>
                      <p className="text-neutral font-bold">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials
