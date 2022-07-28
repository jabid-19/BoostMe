import Aos from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import DashboardMain from '../components/Dashboard/Main'
import Footer from '../components/Shared/Footer'
import Navbar from '../components/Shared/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  console.log(Component, 'from APps')

  return (
    <div>
      {router.pathname.split('/')[1] !== 'dashboard' ? (
        <>
          <Navbar />
          <div className="overflow-x-hidden">
            <Component {...pageProps} />
            <Footer />
          </div>
        </>
      ) : (
        <>
          <DashboardMain />
          <div className="relative ml-96 mt-8 mx-10">
            <Component {...pageProps} />
          </div>
        </>
      )}
    </div>
  )
}

export default MyApp
