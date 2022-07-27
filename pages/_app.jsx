import Aos from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Footer from '../components/Shared/Footer'
import Navbar from '../components/Shared/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  console.log(router.pathname)

  return (
    <div>
      {router.pathname !== '/dashboard' ? (
        <>
          <Navbar />
          <div className="overflow-x-hidden">
            <Component {...pageProps} />
            <Footer />
          </div>
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  )
}

export default MyApp
