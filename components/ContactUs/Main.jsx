import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import Contact from '../../public/contact-us/contact.png'
const ContactUsMain = () => {
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
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="relative w-full mb-20 lg:mb-0">
      <div className="w-auto mx-6 mt-12 lg:min-h-[85vh] lg:mt-16 2xl:w-[1400px] 2xl:mx-auto">
        <div className="flex flex-col w-full gap-10 lg:flex-row">
          <div className="w-[90%] mx-auto flex flex-col justify-center item-center lg:w-2/3 ">
            <h1 className="text-3xl text-neutral font-bold">Send a Message</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 lg:w-2/3 ">
              <div className="mb-5">
                <label className="text-xl font-semibold text-neutral pl-2 mb-4">Full Name</label>
                <input
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="input input-bordered input-primary bg-transparent rounded-full w-full min-w-xs"
                />
                <div className="text-error text-xs font-bold pl-2 pt-2">{errors.name?.message}</div>
              </div>
              <div className="mb-5 flex gap-4">
                <div className="w-1/2">
                  <label className="text-xl font-semibold text-neutral pl-2">Phone</label>
                  <input
                    name="phone"
                    placeholder="+1 (555) 555-5555"
                    type="tel"
                    {...register('phone', { required: 'Phone Number is required' })}
                    className="input input-bordered input-primary bg-transparent rounded-full w-full min-w-xs"
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
                    className="input input-bordered input-primary bg-transparent rounded-full w-full min-w-xs"
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
                  className="input input-bordered input-primary bg-transparent rounded-full w-full min-w-xs"
                />
                <div className="text-error text-xs font-bold pl-2 pt-2">
                  {errors.subject?.message}
                </div>
              </div>
              <div className="mb-5">
                <label className="text-xl font-semibold text-neutral pl-2">How can we help?</label>
                <textarea
                  name="details"
                  type="text"
                  {...register('details', { required: 'Details is required' })}
                  className="input input-bordered input-primary h-32 bg-transparent rounded-3xl border-primary w-full min-w-xs px-4 py-4"
                />
                <div className="text-error text-xs font-bold pl-2 pt-2">
                  {errors.details?.message}
                </div>
              </div>
              <input
                className="input bg-secondary hover:bg-orange-400 py-1.5 w-full min-w-xs normal-case text-white rounded-full cursor-pointer"
                type="submit"
                value="Sign In"
              />
            </form>
          </div>
          <div className="w-[95%] mx-auto flex flex-col bg-primary rounded-lg p-8 lg:w-1/3">
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
            <div className="text-white mt-10 flex justify-between items-center">
              {socialMediaLinks.map((socialMedia) => (
                <div className="border-2 p-1 rounded-full md:p-2" key={socialMedia.key}>
                  <a href={socialMedia.link} target="_blank" rel="noreferrer">
                    {socialMedia.icon}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-20">
              <Image
                src={Contact}
                alt="BoostMe Contact Image"
                width={400}
                height={150}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsMain
