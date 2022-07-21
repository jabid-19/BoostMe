import { useState } from 'react'
import LoginForm from './LoginForm'

const ForgetPassForm = () => {
  const [visibleItem, setVisibleItem] = useState(true)

  const loadLoginForm = () => {
    console.log(visibleItem)
    setVisibleItem(false)
  }

  return (
    <div>
      <div className={visibleItem ? 'px-2 lg:mr-24' : 'hidden'}>
        <div className="max-w-md">
          <form>
            <input
              type="text"
              placeholder="Email address"
              className="input input-bordered input-primary rounded-full w-full min-w-xs mb-4"
            />
            <input
              type="text"
              placeholder="New password"
              className="input input-bordered input-primary rounded-full w-full min-w-xs mb-6"
            />
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
