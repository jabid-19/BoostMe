import Router from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ForgetPassForm from './ForgetPassForm'
import RegisterForm from './RegisterForm'

import { login } from '../../src/backend/Auth'

const LoginForm = () => {
  const [visibleLoginItem, setVisibleLoginItem] = useState(true)
  const [visibleForgetItem, setVisibleForgetItem] = useState(true)
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: {
      message: '',
      status: false,
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const loadRegisterForm = () => {
    setVisibleLoginItem(false)
  }

  const loadForgetPassForm = () => {
    setVisibleForgetItem(false)
  }

  const onSubmit = async (data) => {
    setStatus({ ...status, loading: true })
    const response = await login(data)
    // console.log(response)

    if (response.status == 200 || response.status == 201) {
      setStatus({ ...status, loading: false, success: true })
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
      reset()
      Router.push('/dashboard')
    } else {
      setStatus({
        ...status,
        loading: false,
        success: false,
        error: { status: true, errorMessage: response?.data?.error },
      })
    }
  }

  return (
    <div>
      <div
        data-aos="fade-down-left"
        className={visibleLoginItem && visibleForgetItem ? 'px-2 lg:mr-24' : 'hidden'}>
        <div className="max-w-md">
          <div className="h-40 lg:mb-10 text-center lg:text-left">
            <h1 className="text-2xl font-semibold break-words md:text-5xl text-neutral lg:tracking-wide xl:text-5xl">
              Build your <span className="text-primary">audience</span> and
              <br />
              <span className="text-secondary">grow</span> your brand
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <input
              name="email"
              type="email"
              placeholder="Email address"
              {...register('email', { required: 'Email is required' })}
              className="input input-bordered input-primary rounded-full w-full min-w-xs"
            /> */}
            <input
              name="email"
              type="email"
              placeholder="Email address"
              {...register('email', { required: 'Email is required' })}
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
            {/* <input
              name="password"
              type="password"
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
              className="input input-bordered input-primary rounded-full w-full min-w-xs mt-4"
            /> */}
            <input
              name="password"
              type="password"
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
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
                mt-4
                ${errors.password?.message && 'border-error outline-error'}
            `}
            />
            <div className="text-error text-xs font-bold pl-2 pt-2">{errors.password?.message}</div>
            {status?.error.status && (
              <div className="text-error text-xs font-bold pl-2 ">{status?.error.errorMessage}</div>
            )}
            <input
              className="bg-secondary hover:bg-orange-400 px-3
              py-2 w-full min-w-xs normal-case text-white rounded cursor-pointer mt-6"
              type="submit"
              value={`${status?.loading ? 'Loading...' : 'Sign in'}`}
            />
          </form>
          <br />
          <div className="flex justify-between w-full px-2">
            <p className="hover:underline cursor-pointer" onClick={loadForgetPassForm}>
              Forgot Password?
            </p>
            <p className="hover:underline cursor-pointer" onClick={loadRegisterForm}>
              Create account
            </p>
          </div>
        </div>
      </div>
      {!visibleForgetItem && <ForgetPassForm />}
      {!visibleLoginItem && <RegisterForm />}
    </div>
  )
}

export default LoginForm
