import LoginForm from '../components/Auth/LoginForm'
import LoginFrameImage from '../components/Auth/LoginFrameImage'
import RectangleLoginImage from '../components/Auth/RectangleLoginImage'

const Login = () => {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-end">
        <RectangleLoginImage />
      </div>
      <div className="flex flex-col justify-center items-center lg:justify-end lg:items-end">
        <LoginForm />
        <div>
          <LoginFrameImage />
        </div>
      </div>
    </div>
  )
}

export default Login
