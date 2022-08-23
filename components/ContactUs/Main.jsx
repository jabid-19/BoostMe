import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import imageLoader from '../../helper/imageLoader'
import BoxBackground2 from '../../public/common/BoxBackground2.png'
import Contact from '../../public/contact-us/contact-us-animate.svg'

import { contact } from '../../src/backend/Contact'

const ContactUsMain = () => {
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: {
      message: null,
      status: false,
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const socialMediaLinks = [
    {
      key: 1,
      title: 'instagram',
      icon: <AiOutlineInstagram className="inline-block" size={30} />,
      link: 'https://www.instagram.com/',
    },
    {
      key: 2,
      title: 'facebook',
      icon: <AiOutlineFacebook className="inline-block" size={30} />,
      link: 'https://www.facebook.com/',
    },
    {
      key: 3,
      title: 'whatsapp',
      icon: <AiOutlineWhatsApp className="inline-block" size={30} />,
      link: 'https://web.whatsapp.com/',
    },
    {
      key: 4,
      title: 'linkedin',
      icon: <AiOutlineLinkedin className="inline-block" size={30} />,
      link: 'https://www.linkedin.com/',
    },
  ]
  const onSubmit = async (data) => {
    setStatus({ ...status, loading: true })
    const response = await contact(data)
    if (response.status == 200 || response.status == 201) {
      setStatus({ ...status, loading: false, success: true })
    } else {
      setStatus({
        ...status,
        loading: false,
        success: false,
        error: {
          status: true,
          message: response?.data?.error,
        },
      })
    }
  }

  return (
    <div className="relative w-full mb-20">
      <div data-aos="fade-right" className="hidden lg:block lg:absolute lg:left-0 lg:-top-14">
        <Image
          src={BoxBackground2}
          width={400}
          height={100}
          alt="BoostMe's Background"
          loader={imageLoader}
        />
      </div>
      <div className="w-auto mx-6 mt-12 lg:min-h-[85vh] lg:mt-16 2xl:w-[1000px] 2xl:mx-auto">
        <div className="flex flex-col gap-10 w-full lg:flex-row">
          {!status.success && (
            <div
              data-aos="fade-right"
              className="w-[90%] mx-auto flex flex-col justify-center item-center lg:w-1/2 lg:mt-10 3xl:mt-0">
              <h1 className="text-3xl text-neutral font-bold">Send a Message</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                <div className="mb-5">
                  <label className="text-xl font-semibold text-neutral pl-2 mb-4">Full Name</label>
                  <input
                    name="name"
                    placeholder="John Doe"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full
                  px-3
                  py-2
                  text-gray-800
                  border
                  rounded
                  outline-secondary
                  bg-gray-50
                  min-w-xs
                  ${(errors.name?.message || status.error?.status) && 'border-error outline-error'}
                  `}
                  />
                  <div className="text-error text-xs font-bold pl-2 pt-2">
                    {errors.name?.message}
                  </div>
                </div>
                <div className="mb-5 flex gap-4">
                  <div className="w-1/2">
                    <label className="text-xl font-semibold text-neutral pl-2">Phone</label>
                    <input
                      name="phone"
                      placeholder="+880 111111111"
                      type="tel"
                      {...register('phone', { required: 'Phone Number is required' })}
                      className={`w-full
                  px-3
                  py-2
                  text-gray-800
                  border
                  rounded
                  outline-secondary
                  bg-gray-50
                  min-w-xs
                  ${(errors.phone?.message || status.error?.status) && 'border-error outline-error'}
                  `}
                    />
                    <div className="text-error text-xs font-bold pl-2 pt-2">
                      {errors.phone?.message}
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label className="text-xl font-semibold text-neutral pl-2">Email</label>
                    <input
                      name="email"
                      placeholder="example@example.com"
                      type="email"
                      {...register('email', { required: 'Email is required' })}
                      className={`w-full
                  px-3
                  py-2
                  text-gray-800
                  border
                  rounded
                  outline-secondary
                  bg-gray-50
                  min-w-xs
                  ${(errors.email?.message || status.error?.status) && 'border-error outline-error'}
                  `}
                    />
                    <div className="text-error text-xs font-bold pl-2 pt-2">
                      {errors.email?.message}
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="text-xl font-semibold text-neutral pl-2">Subject</label>
                  <input
                    name="subject"
                    placeholder="XXXXX"
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className={`w-full
                  px-3
                  py-2
                  text-gray-800
                  border
                  rounded
                  outline-secondary
                  bg-gray-50
                  min-w-xs
                  ${
                    (errors.subject?.message || status.error?.status) &&
                    'border-error outline-error'
                  }
                  `}
                  />
                  <div className="text-error text-xs font-bold pl-2 pt-2">
                    {errors.subject?.message}
                  </div>
                </div>
                <div className="mb-5">
                  <label className="text-xl font-semibold text-neutral pl-2">
                    How can we help?
                  </label>
                  <textarea
                    name="details"
                    type="text"
                    {...register('details', { required: 'Details is required' })}
                    className={`w-full
                  px-3
                  py-2
                  text-gray-800
                  border
                  rounded
                  outline-secondary
                  bg-gray-50
                  min-w-xs
                  ${
                    (errors.details?.message || status.error?.status) &&
                    'border-error outline-error'
                  }
                  `}
                  />
                  <div className="text-error text-xs font-bold pl-2 pt-2">
                    {errors.details?.message}
                  </div>
                </div>
                <input
                  className="bg-secondary font-bold hover:bg-orange-400 px-3
              py-2 w-full min-w-xs normal-case text-white rounded cursor-pointer"
                  type="submit"
                  value={`${status.loading ? 'Loading...' : 'Submit'}`}
                />
              </form>
            </div>
          )}
          {status.success && !status.loading && (
            <h1 className="flex items-center text-xl font-bold">
              Thank you, your submission has been received.
            </h1>
          )}
          <div
            // data-aos="fade-left"
            className="w-[95%] mx-auto flex flex-col bg-primary rounded-lg p-8 lg:w-1/2">
            <div className="mx-auto">
              <h1 className="text-3xl text-white font-bold">Contact Info</h1>
              <div className="text-white mt-10">
                <BsPhone className="inline-block mr-2" size={30} />
                <a href="tel:+880 123456789" className="text-xl">
                  +880 123456789
                </a>
              </div>
              <div className="text-white mt-10">
                <AiOutlineMail className="inline-block mr-2" size={30} />
                <a href="mailto:example@example.com" className="text-xl">
                  example@example.com
                </a>
              </div>
              <div className="text-white mt-10 flex flex-wrap gap-5 items-center">
                {socialMediaLinks.map((socialMedia) => (
                  <div className="border-2 p-1 rounded-full md:p-2" key={socialMedia.key}>
                    <a href={socialMedia.link} target="_blank" rel="noreferrer">
                      {socialMedia.icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20 flex justify-center">
              <Image
                src={Contact}
                alt="BoostMe Contact Image"
                width={300}
                height={300}
                className="rounded-lg"
                loader={imageLoader}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsMain
