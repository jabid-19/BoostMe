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

  // eslint-disable-next-line react/display-name
  const MyMenuList = React.forwardRef(({ item }, ref) => {
    return (
      <div>
        <a
          className={`text-white text-sm flex flex-wrap items-center gap-x-4 cursor-pointer p-2 hover:bg-secondary rounded-md ${
            item.gap ? 'mt-9' : 'mt-2'
          } ${item.title === (selectedSection || subPath) && 'bg-secondary'}`}
          href={item.route || '/dashboard/analytics'}
          ref={ref}
          onClick={() => setSelectedSection(item.title)}>
          {item.icon}
          <span className={`${!open && 'hidden'} origin-left duration-200 text-xl`}>
            {item.title}
          </span>
        </a>
      </div>
    )
  })
  const generateMenuItem = (item) => (
    <Link href={item?.route || '/dashboard/analytics'} key={item.title} passHref>
      <MyMenuList item={item} />
    </Link>
  )
  const generateMenu = selectedTabs?.map((route) => {
    if (!route?.subSection) {
      return generateMenuItem(route)
    }
    if (route?.subSection) {
      return (
        <div key={route.route}>
          <a
            className={`text-white text-sm flex flex-wrap items-center gap-x-4 cursor-pointer p-2 hover:bg-secondary rounded-md ${
              route.gap ? 'mt-9' : 'mt-2'
            }`}
            onClick={() => setSelectedSection(route.title)}>
            {route.icon}
            <span className={`${!open && 'hidden'} origin-left duration-200 text-xl`}>
              {route.title}
            </span>
          </a>

          <ul>
            {route.subSection.map((subRoute) => (
              <Link href={subRoute?.route || '/dashboard/analytics'} key={subRoute.title}>
                <a
                  className={`text-white text-sm flex flex-wrap items-center justify-end gap-x-4 cursor-pointer p-2 hover:bg-secondary rounded-md  ${
                    subRoute.title === (selectedSection || subPath) && 'bg-secondary list-disc'
                  }`}
                  href={subRoute.route || '/dashboard/analytics'}
                  onClick={() => setSelectedSection(subRoute.title)}>
                  {subRoute.icon}
                  <span className={`${!open && 'hidden'} origin-left duration-200 text-xl`}>
                    {subRoute.title}
                  </span>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      )
    }
    return null
  })

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
        <ul className={`p-6 flex flex-col ${!open && 'items-center'}`}>{generateMenu}</ul>
      </div>
    </div>
  )
}

export default DashboardMain
