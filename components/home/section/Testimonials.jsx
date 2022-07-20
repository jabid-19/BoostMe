import Image from 'next/image'
import React from 'react'
import { Pagination } from 'swiper'
import 'swiper/css/bundle'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
const Testimonials = () => {
  return (
    <div className="min-h-screen mt-16">
      <div>
        {/* text div head */}
        <div className="flex justify-around">
          <div className="hidden lg:block lg:flex items-center lg:-ml-40">
            <Image src="/landing-section/Frame 11.png" width={400} height={100} alt="Landing" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold break-words lg:text-4xl text-neutral lg:tracking-wide py-14 xl:text-5xl">
              Business <span className="text-primary">all over the world</span> <br />
              <span className="text-secondary">trust</span> us to build the brand
            </h1>
          </div>
        </div>
        {/* card design */}
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <div className="flex flex-col flex-wrap gap-x-16 lg:flex-row lg:justify-around lg:items-center">
              <div className="relative max-w-sm mx-auto md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
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
                          On social, we need to be fast, efficient, and intentional. Boost allows us
                          to be exactly that.
                        </p>
                        <p className="text-neutral font-bold">LUIS CANCEL</p>
                        <p className="text-neutral font-bold">MANAGING EDITOR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
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
                          On social, we need to be fast, efficient, and intentional. Boost allows us
                          to be exactly that.
                        </p>
                        <p className="text-neutral font-bold">LUIS CANCEL</p>
                        <p className="text-neutral font-bold">MANAGING EDITOR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
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
                          On social, we need to be fast, efficient, and intentional. Boost allows us
                          to be exactly that.
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
            <div className="flex flex-col flex-wrap gap-x-16 lg:flex-row lg:justify-around lg:items-center">
              <div className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
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
                          On social, we need to be fast, efficient, and intentional. Boost allows us
                          to be exactly that.
                        </p>
                        <p className="text-neutral font-bold">LUIS CANCEL</p>
                        <p className="text-neutral font-bold">MANAGING EDITOR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
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
                          On social, we need to be fast, efficient, and intentional. Boost allows us
                          to be exactly that.
                        </p>
                        <p className="text-neutral font-bold">LUIS CANCEL</p>
                        <p className="text-neutral font-bold">MANAGING EDITOR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
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
                          On social, we need to be fast, efficient, and intentional. Boost allows us
                          to be exactly that.
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
            <div className="flex flex-col flex-wrap gap-x-16 lg:flex-row lg:justify-around lg:items-center">
              <div className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
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
                          On social, we need to be fast, efficient, and intentional. Boost allows us
                          to be exactly that.
                        </p>
                        <p className="text-neutral font-bold">LUIS CANCEL</p>
                        <p className="text-neutral font-bold">MANAGING EDITOR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
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
                          On social, we need to be fast, efficient, and intentional. Boost allows us
                          to be exactly that.
                        </p>
                        <p className="text-neutral font-bold">LUIS CANCEL</p>
                        <p className="text-neutral font-bold">MANAGING EDITOR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto max-w-sm md:max-w-sm mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl border-solid border-4 border-primary">
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
                          On social, we need to be fast, efficient, and intentional. Boost allows us
                          to be exactly that.
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
  )
}

export default Testimonials
