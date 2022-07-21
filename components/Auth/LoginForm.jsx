import { useState } from 'react'
import ForgetPassForm from './ForgetPassForm'
import RegisterForm from './RegisterForm'

const LoginForm = () => {
  const [visibleLoginItem, setVisibleLoginItem] = useState(true)
  const [visibleForgetItem, setVisibleForgetItem] = useState(true)

  const loadRegisterForm = () => {
    setVisibleLoginItem(false)
  }

  const loadForgetPassForm = () => {
    console.log(visibleForgetItem)
    setVisibleForgetItem(false)
  }

  return (
    <div>
      <div className={visibleLoginItem && visibleForgetItem ? 'w-full px-2 lg:pr-24' : 'hidden'}>
        <form>
          <input
            type="text"
            placeholder="Email address"
            className="input input-bordered input-primary rounded-full w-full min-w-xs mb-4"
          />
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered input-primary rounded-full w-full min-w-xs mb-6"
          />
          <br />
          <input
            className="bg-secondary hover:bg-orange-400 py-1.5 w-full min-w-xs normal-case text-white rounded-full"
            type="submit"
            value="Sign In"
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
      {!visibleForgetItem && <ForgetPassForm />}
      {!visibleLoginItem && <RegisterForm />}
    </div>
  )
}

export default LoginForm
