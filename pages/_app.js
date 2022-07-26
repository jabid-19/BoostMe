import '../styles/globals.css'
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
