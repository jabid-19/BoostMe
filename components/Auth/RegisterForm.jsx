import { useState } from 'react'
import LoginForm from './LoginForm'

const RegisterForm = () => {
  const [visibleItem, setVisibleItem] = useState(true)

  const loadLoginForm = () => {
    console.log(visibleItem)
    setVisibleItem(false)
  }

  return (
    <div>
      <div className={visibleItem ? 'px-2 my-24 lg:mt-64' : 'hidden'}>
        <div className="max-w-md mx-auto">
          <form>
            <input
              type="text"
              placeholder="Email address"
              className="block input input-bordered input-primary rounded-full w-full min-w-xs mb-4"
            />
            <input
              type="text"
              placeholder="Password"
              className="block input input-bordered input-primary rounded-full w-full min-w-xs mb-4"
            />
            <input
              type="text"
              placeholder="Confirm password"
              className="block input input-bordered input-primary rounded-full w-full min-w-xs"
            />
            <br />
            <input
              className="bg-secondary hover:bg-orange-400 py-1.5 w-full min-w-xs normal-case text-white rounded-full"
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
