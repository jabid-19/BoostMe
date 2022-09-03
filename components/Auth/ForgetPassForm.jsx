import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import LoginForm from './LoginForm'

import { forgetPassword } from '../../src/backend/Auth'

const ForgetPassForm = () => {
  const [visibleItem, setVisibleItem] = useState(true)
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
    reset,
  } = useForm()

  const loadLoginForm = () => {
    setVisibleItem(false)
  }

  const onSubmit = async (data) => {
    setStatus({ ...status, loading: true })
    const response = await forgetPassword(data.email)

    if (response.status == 200 || response.status == 201) {
      setStatus({ ...status, loading: false, success: true })
      const uid = response.data.id
      reset()
      Router.push(`/recovery/forget-pass/${uid}`)
    } else {
      console.log(response.data)
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

  // cleanup function
  useEffect(() => {
    return () => {
      setStatus({
        loading: false,
        success: false,
        error: {
          message: null,
          status: false,
        },
      })
    }
  }, [])

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
              className={`
                w-full
                px-3
                py-2
                text-gray-800
                border
                rounded
                outline-secondary
                bg-gray-50
                min-w-xs
                ${errors.email?.message && 'border-error outline-error'}
            `}
            />
            <div className="text-error text-xs font-bold pl-2 pt-2">{errors.email?.message}</div>
            {status?.error.status && (
              <div className="text-error text-md font-bold pl-2">{status.error?.message}</div>
            )}
            <br />
            <input
              className="bg-secondary font-bold hover:bg-orange-400 px-3
              py-2 w-full min-w-xs normal-case text-white rounded cursor-pointer"
              type="submit"
              value={`${status.loading ? 'Loading...' : 'Submit'}`}
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
