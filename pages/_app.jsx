import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Footer from '../components/Shared/Footer'
import Navbar from '../components/Shared/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className="">
      <Navbar />
      <div className="overflow-x-hidden">
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
