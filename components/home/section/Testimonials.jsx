import Image from 'next/image'
import React from 'react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css/bundle'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div>
        <div className="flex justify-center relative mb-4 lg:justify-end">
          <div
            data-aos="fade-down-right"
            className="hidden lg:block lg:absolute lg:left-0 lg:top-12">
            <Image src="/landing-section/Frame 11.png" width={400} height={100} alt="Landing" />
          </div>
          <div data-aos="fade-down-left">
            <h1 className="text-2xl font-semibold break-words md:text-4xl text-neutral lg:tracking-wide py-14 xl:text-5xl">
              Business <span className="text-primary">all over the world</span> <br />
              <span className="text-secondary">trust</span> us to build the brand
            </h1>
          </div>
        </div>
        {/* card design */}
        <div className="lg:w-[70%] lg:mx-auto">
          <Swiper
            navigation={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              <div className="flex flex-col flex-wrap mx-10 lg:flex-row lg:justify-around lg:items-center lg:gap-10">
                <div
                  data-aos="flip-left"
                  className="relative max-w-sm mx-auto md:max-w-sm mt-6 min-w-0 break-words  mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full flex justify-start -ml-[130px] -mt-[30px]">
                        <div className="relative ">
                          <Image
                            src="/landing-section/Ellipse 3.png"
                            className="border-solid border-4 border-primary shadow-xl rounded-full align-middle absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                            width={100}
                            height="100%"
                            alt="Landing"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 py-6">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                          <p className=" leading-relaxed text-neutral mb-4">
                            On social, we need to be fast, efficient, and intentional. Boost allows
                            us to be exactly that.
                          </p>
                          <p className="text-neutral font-bold">LUIS CANCEL</p>
                          <p className="text-neutral font-bold">MANAGING EDITOR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="flip-right"
                  className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full flex justify-start -ml-[130px] -mt-[30px]">
                        <div className="relative ">
                          <Image
                            src="/landing-section/Ellipse 3.png"
                            className="border-solid border-4 border-primary shadow-xl rounded-full align-middle absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                            width={100}
                            height="100%"
                            alt="Landing"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 py-6">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                          <p className=" leading-relaxed text-neutral mb-4">
                            On social, we need to be fast, efficient, and intentional. Boost allows
                            us to be exactly that.
                          </p>
                          <p className="text-neutral font-bold">LUIS CANCEL</p>
                          <p className="text-neutral font-bold">MANAGING EDITOR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="flip-up"
                  className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full flex justify-start -ml-[130px] -mt-[30px]">
                        <div className="relative ">
                          <Image
                            src="/landing-section/Ellipse 3.png"
                            className="border-solid border-4 border-primary shadow-xl rounded-full align-middle absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                            width={100}
                            height="100%"
                            alt="Landing"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 py-6">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                          <p className=" leading-relaxed text-neutral mb-4">
                            On social, we need to be fast, efficient, and intentional. Boost allows
                            us to be exactly that.
                          </p>
                          <p className="text-neutral font-bold">LUIS CANCEL</p>
                          <p className="text-neutral font-bold">MANAGING EDITOR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col flex-wrap mx-10 lg:flex-row lg:justify-around lg:items-center lg:gap-10">
                <div
                  data-aos="flip-left"
                  className="relative max-w-sm mx-auto md:max-w-sm mt-6 min-w-0 break-words  mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full flex justify-start -ml-[130px] -mt-[30px]">
                        <div className="relative ">
                          <Image
                            src="/landing-section/Ellipse 3.png"
                            className="border-solid border-4 border-primary shadow-xl rounded-full align-middle absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                            width={100}
                            height="100%"
                            alt="Landing"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 py-6">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                          <p className=" leading-relaxed text-neutral mb-4">
                            On social, we need to be fast, efficient, and intentional. Boost allows
                            us to be exactly that.
                          </p>
                          <p className="text-neutral font-bold">LUIS CANCEL</p>
                          <p className="text-neutral font-bold">MANAGING EDITOR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="flip-right"
                  className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full flex justify-start -ml-[130px] -mt-[30px]">
                        <div className="relative ">
                          <Image
                            src="/landing-section/Ellipse 3.png"
                            className="border-solid border-4 border-primary shadow-xl rounded-full align-middle absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                            width={100}
                            height="100%"
                            alt="Landing"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 py-6">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                          <p className=" leading-relaxed text-neutral mb-4">
                            On social, we need to be fast, efficient, and intentional. Boost allows
                            us to be exactly that.
                          </p>
                          <p className="text-neutral font-bold">LUIS CANCEL</p>
                          <p className="text-neutral font-bold">MANAGING EDITOR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="flip-up"
                  className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full flex justify-start -ml-[130px] -mt-[30px]">
                        <div className="relative ">
                          <Image
                            src="/landing-section/Ellipse 3.png"
                            className="border-solid border-4 border-primary shadow-xl rounded-full align-middle absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                            width={100}
                            height="100%"
                            alt="Landing"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 py-6">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                          <p className=" leading-relaxed text-neutral mb-4">
                            On social, we need to be fast, efficient, and intentional. Boost allows
                            us to be exactly that.
                          </p>
                          <p className="text-neutral font-bold">LUIS CANCEL</p>
                          <p className="text-neutral font-bold">MANAGING EDITOR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col flex-wrap mx-10 lg:flex-row lg:justify-around lg:items-center lg:gap-10">
                <div
                  data-aos="flip-left"
                  className="relative max-w-sm mx-auto md:max-w-sm mt-6 min-w-0 break-words  mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full flex justify-start -ml-[130px] -mt-[30px]">
                        <div className="relative ">
                          <Image
                            src="/landing-section/Ellipse 3.png"
                            className="border-solid border-4 border-primary shadow-xl rounded-full align-middle absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                            width={100}
                            height="100%"
                            alt="Landing"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 py-6">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                          <p className=" leading-relaxed text-neutral mb-4">
                            On social, we need to be fast, efficient, and intentional. Boost allows
                            us to be exactly that.
                          </p>
                          <p className="text-neutral font-bold">LUIS CANCEL</p>
                          <p className="text-neutral font-bold">MANAGING EDITOR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="flip-right"
                  className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full flex justify-start -ml-[130px] -mt-[30px]">
                        <div className="relative ">
                          <Image
                            src="/landing-section/Ellipse 3.png"
                            className="border-solid border-4 border-primary shadow-xl rounded-full align-middle absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                            width={100}
                            height="100%"
                            alt="Landing"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 py-6">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                          <p className=" leading-relaxed text-neutral mb-4">
                            On social, we need to be fast, efficient, and intentional. Boost allows
                            us to be exactly that.
                          </p>
                          <p className="text-neutral font-bold">LUIS CANCEL</p>
                          <p className="text-neutral font-bold">MANAGING EDITOR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="flip-up"
                  className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full flex justify-start -ml-[130px] -mt-[30px]">
                        <div className="relative ">
                          <Image
                            src="/landing-section/Ellipse 3.png"
                            className="border-solid border-4 border-primary shadow-xl rounded-full align-middle absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                            width={100}
                            height="100%"
                            alt="Landing"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 py-6">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                          <p className=" leading-relaxed text-neutral mb-4">
                            On social, we need to be fast, efficient, and intentional. Boost allows
                            us to be exactly that.
                          </p>
                          <p className="text-neutral font-bold">LUIS CANCEL</p>
                          <p className="text-neutral font-bold">MANAGING EDITOR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
