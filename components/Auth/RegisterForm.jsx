import React from 'react'
import { useState } from 'react'
import LoginForm from './LoginForm'
import Router from 'next/router'
import { useForm } from 'react-hook-form'

import { signup } from '../../src/backend/Auth'

const RegisterForm = () => {
  const [visibleItem, setVisibleItem] = useState(true)

  const [registerError, setRegisterError] = useState('')

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
    const user = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    }

    const response = await signup(user)

    if (response.status == 200 || response.status == 201) {
      reset()
      Router.push('/recovery')
    } else {
      console.log(response.data.error)
      setRegisterError(response.data.error)
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
              // className="input input-bordered input-primary rounded-full w-full min-w-xs"
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
            <input
              name="password"
              type="password"
              placeholder="Password"
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password is Required',
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    'Password must be 8 characters or longer and contain at least one uppercase letter, one lowercase letter and one number',
                },
              })}
              // className="input input-bordered input-primary rounded-full w-full min-w-xs mt-4"
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
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              {...register('confirmPassword', {
                required: {
                  value: true,
                  message: 'Confirm Password is Required',
                },
              })}
              // className="input input-bordered input-primary rounded-full w-full min-w-xs mt-4"
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
                ${errors.confirmPassword?.message && 'border-error outline-error'}
            `}
            />
            <div className="text-error text-xs font-bold pl-2 pt-2">
              {errors.confirmPassword?.message}
            </div>
            <div className="text-error text-xs font-bold pl-2 ">{registerError}</div>
            <br />
            <input
              // className="bg-secondary hover:bg-orange-400 py-1.5 w-full min-w-xs normal-case text-white rounded-full cursor-pointer"
              className="bg-secondary hover:bg-orange-400 px-3
              py-2 w-full min-w-xs normal-case text-white rounded cursor-pointer"
              type="submit"
              value="Sign Up"
            />
          </form>
          <br />
          <div className="pl-2">
            <p className="hover:underline cursor-pointer" onClick={loadLoginForm}>
              Already have an account? Login
            </p>
          </div>
        </div>
      </div>
      {!visibleItem && <LoginForm />}
    </div>
  )
}

export default RegisterForm
