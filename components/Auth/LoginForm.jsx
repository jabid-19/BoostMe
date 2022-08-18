import { useState } from 'react'
import ForgetPassForm from './ForgetPassForm'
import RegisterForm from './RegisterForm'
import Router from 'next/router'

import { login } from '../../src/backend/Auth'

const LoginForm = () => {
  const [visibleLoginItem, setVisibleLoginItem] = useState(true)
  const [visibleForgetItem, setVisibleForgetItem] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loadRegisterForm = () => {
    setVisibleLoginItem(false)
  }

  const loadForgetPassForm = () => {
    setVisibleForgetItem(false)
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    const response = await login({ email, password })
    // console.log(response)

    if (response.status == 200 || response.status == 201) {
      setEmail('')
      setPassword('')
      Router.push('/dashboard')
    } else {
      console.log(response.data.error)
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
          <form>
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered input-primary rounded-full w-full min-w-xs mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered input-primary rounded-full w-full min-w-xs mb-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              className="bg-secondary hover:bg-orange-400 py-1.5 w-full min-w-xs normal-case text-white rounded-full cursor-pointer"
              type="submit"
              value="Sign In"
              onClick={handleLogin}
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
