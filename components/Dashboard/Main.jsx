import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { sectionPath } from '../../helper/pathGenerator'
const DashboardMain = ({ selectedTabs, open, setOpen }) => {
  // imports
  const router = useRouter()
  // states

  const [selectedSection, setSelectedSection] = useState(null)
  // functions
  const subPath = sectionPath(router.pathname)

  useEffect(() => {
    const screenSize = window.matchMedia('(max-width: 1020px)')
    function myFunction(e) {
      setOpen(false)
    }
    screenSize.addListener(myFunction)
    return () => screenSize.removeListener(myFunction)
  }, [setOpen])

  return (
    <div className="fixed">
      <div
        className={`${open ? 'w-72' : 'w-20'} duration-300 w-72 bg-primary relative min-h-screen `}>
        <div
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-primary ${
            !open && 'rotate-180'
          }`}>
          <Image
            src="/common/control.png"
            width={40}
            height={40}
            alt="control"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="cursor-pointer duration-500">
          <Link href="/">
            <Image src="/common/logo-white.png" width={140} height={40} alt="BoostMe's logo" />
          </Link>
        </div>
        <ul className={`p-6 flex flex-col ${!open && 'items-center'}`}>
          {selectedTabs?.map((menu, index) => (
            <Link href={menu?.route || '/dashboard/analytics'} key={menu.key}>
              <li
                className={`text-white text-sm flex flex-wrap items-center gap-x-4 cursor-pointer p-2 hover:bg-secondary rounded-md ${
                  menu.gap ? 'mt-9' : 'mt-2'
                } ${menu.title === (selectedSection || subPath) && 'bg-secondary'}`}
                key={index}
                onClick={() => setSelectedSection(menu.title)}>
                {menu.icon}
                <span className={`${!open && 'hidden'} origin-left duration-200 text-xl`}>
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DashboardMain
