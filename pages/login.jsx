import LoginForm from '../components/Auth/LoginForm'
import LoginFrameImage from '../components/Auth/LoginFrameImage'
import RectangleLoginImage from '../components/Auth/RectangleLoginImage'
import Footer from '../components/Shared/Footer'
import Navbar from '../components/Shared/Navbar'

const Login = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="lg:grid lg:grid-cols-2">
        <div className="flex items-end">
          <RectangleLoginImage />
        </div>
        <div className="">
          <LoginForm />
          <div className="flex justify-center lg:justify-end lg:items-end">
            <LoginFrameImage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
