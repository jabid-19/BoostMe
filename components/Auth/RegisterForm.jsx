import { useState } from 'react'
import LoginForm from './LoginForm'
import Router from 'next/router'

import axios from '../../axios'

const RegisterForm = () => {
  const [visibleItem, setVisibleItem] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const loadLoginForm = () => {
    setVisibleItem(false)
  }

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      const user = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }

      const res = await axios.post('/user', user)
      console.log(res.data)

      setEmail('')
      setPassword('')
      setConfirmPassword('')
      Router.push('/recovery')
    } catch (err) {
      console.log(err.response.data)
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
              className="input input-bordered input-primary rounded-full w-full min-w-xs mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered input-primary rounded-full w-full min-w-xs mb-6"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <input
              className="bg-secondary hover:bg-orange-400 py-1.5 w-full min-w-xs normal-case text-white rounded-full cursor-pointer"
              type="submit"
              value="Sign Up"
              onClick={handleSignup}
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
