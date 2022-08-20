import React from 'react'
import { useState } from 'react'
import LoginForm from './LoginForm'
import Router from 'next/router'
import { useForm } from 'react-hook-form'

import { forgetPassword } from '../../src/backend/Auth'

const ForgetPassForm = () => {
  const [visibleItem, setVisibleItem] = useState(true)

  const [forgetError, setForgetError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const loadLoginForm = () => {
    setVisibleItem(false)
  }

  const onSubmit = async (data) => {
    const response = await forgetPassword(data.email)

    if (response.status == 200 || response.status == 201) {
      reset()
      Router.push('/recovery')
    } else {
      setForgetError(response.data)
    }
  }

  return (
    <div>
      <div data-aos="fade-down-left" className={visibleItem ? 'px-2 lg:mr-24' : 'hidden'}>
        <div className="max-w-md">
          <div className="h-40 lg:mb-10 text-center lg:text-left">
            <h1 className="text-2xl font-semibold break-words md:text-5xl text-neutral lg:tracking-wide xl:text-5xl">
              Build your <span className="text-primary">audience</span> and
              <br />
              <span className="text-secondary">grow</span> your brand
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="email"
              type="email"
              placeholder="Email address"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is Required',
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Provide a valid Email',
                },
              })}
              className="input input-bordered input-primary rounded-full w-full min-w-xs"
            />
            <div className="text-error text-xs font-bold pl-2 pt-2">{errors.email?.message}</div>
            <div className="text-error text-xs font-bold pl-2 ">{forgetError}</div>
            <br />
            <input
              className="bg-secondary hover:bg-orange-400 py-1.5 w-full min-w-xs normal-case text-white rounded-full cursor-pointer"
              type="submit"
              value="Submit"
            />
          </form>
          <br />
          <div className="pl-2">
            <p className="hover:underline cursor-pointer" onClick={loadLoginForm}>
              Go back to login form
            </p>
          </div>
        </div>
      </div>
      {!visibleItem && <LoginForm />}
    </div>
  )
}

export default ForgetPassForm
