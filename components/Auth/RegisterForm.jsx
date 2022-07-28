import { useState } from 'react'
import LoginForm from './LoginForm'

const RegisterForm = () => {
  const [visibleItem, setVisibleItem] = useState(true)

  const loadLoginForm = () => {
    setVisibleItem(false)
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
              type="text"
              placeholder="Email address"
              className="input input-bordered input-primary rounded-full w-full min-w-xs mb-4"
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered input-primary rounded-full w-full min-w-xs mb-4"
            />
            <input
              type="text"
              placeholder="Confirm password"
              className="input input-bordered input-primary rounded-full w-full min-w-xs mb-6"
            />
            <br />
            <input
              className="bg-secondary hover:bg-orange-400 py-1.5 w-full min-w-xs normal-case text-white rounded-full cursor-pointer"
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
