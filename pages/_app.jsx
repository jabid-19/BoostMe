import Aos from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import DashboardMain from '../components/Dashboard/Main'
import DashboardTabs from '../components/Dashboard/Tabs'
import Footer from '../components/Shared/Footer'
import Navbar from '../components/Shared/Navbar'
import FormProvider from '../context'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const [selectedTabs, setSelectedTabs] = useState([])
  const [activeTab, setActiveTab] = useState(null)
  const [open, setOpen] = useState(true)
  const router = useRouter()

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <FormProvider>
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
          <div className="flex w-full h-full">
            <div
              className={`${
                open ? 'w-72' : 'w-20'
              } duration-300 w-72 flex items-center justify-center flex-col px-[20px]  bg-primary`}>
              <DashboardMain
                open={open}
                setOpen={setOpen}
                selectedTabs={selectedTabs}
                setSelectedTabs={setSelectedTabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
            <div
              className={`grid ${
                open ? 'w-[calc(100vw_-_260px)]' : 'w-[100vw]'
              } grid-cols-1 grid-rows-[80px_calc(100vh_-_80px)]`}>
              <DashboardTabs
                setSelectedTabs={setSelectedTabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <div className="px-[40px] py-[30px] h-full overflow-y-scroll">
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        )}
      </div>
    </FormProvider>
  )
}

export default MyApp
