import '../styles/globals.css'
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
