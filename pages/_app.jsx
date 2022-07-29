import Aos from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DashboardMain from '../components/Dashboard/Main'
import DashboardTabs from '../components/Dashboard/Tabs'
import Footer from '../components/Shared/Footer'
import Navbar from '../components/Shared/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [selectedTabs, setSelectedTabs] = useState([])
  const [activeTab, setActiveTab] = useState(null)
  const router = useRouter()

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

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
        <div className="h-full">
          <div className="grid grid-cols-6 grid-rows-1 h-full">
            <div className="col-span-1">
              <DashboardMain
                selectedTabs={selectedTabs}
                setSelectedTabs={setSelectedTabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
            <div className="col-span-5  overflow lg:ml-32 xl:ml-24">
              <DashboardTabs
                selectedTabs={selectedTabs}
                setSelectedTabs={setSelectedTabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyApp
