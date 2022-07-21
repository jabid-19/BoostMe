import LoginForm from '../components/Auth/LoginForm'
import LoginFrameImage from '../components/Auth/LoginFrameImage'
import RectangleLoginImage from '../components/Auth/RectangleLoginImage'

const Login = () => {
  return (
    <div className="relative">
      <div className="min-h-[91vh] gap-4 lg:grid lg:grid-cols-2">
        <div className="flex items-end">
          <RectangleLoginImage />
        </div>
        <div className="flex justify-center items-center ">
          <LoginForm />
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <LoginFrameImage />
      </div>
    </div>
  )
}

export default Login
