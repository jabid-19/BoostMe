import Head from 'next/head'
import { useRouter } from 'next/router'
import LoginForm from '../components/Auth/LoginForm'
import LoginFrameImage from '../components/Auth/LoginFrameImage'
import RectangleLoginImage from '../components/Auth/RectangleLoginImage'
import RegisterForm from '../components/Auth/RegisterForm'

const Login = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Boost N Boom | Login</title>
        <meta name="description" content="Boost N Boom Login" />
      </Head>
      <div className="relative">
        <div className="min-h-[91vh] gap-4 lg:grid lg:grid-cols-2">
          <div className="flex items-end">
            <RectangleLoginImage />
          </div>
          {router.query.keyword === 'register' ? (
            <div className="flex justify-center items-center z-20">
              <RegisterForm />
            </div>
          ) : (
            <div className="flex justify-center items-center z-20">
              <LoginForm />
            </div>
          )}
        </div>
        <div className="absolute bottom-0 right-0">
          <LoginFrameImage />
        </div>
      </div>
    </div>
  )
}

export default Login
