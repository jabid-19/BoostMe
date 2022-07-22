import '../styles/globals.css'
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
