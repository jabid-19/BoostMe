import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Menus, tabsMenu } from '../../data/Dashboard'
import { sectionPath, tabsPath } from '../../helper/pathGenerator'
const DashboardMain = (Component) => {
  // imports
  const router = useRouter()
  // states
  const [activeTab, setActiveTab] = useState(null)
  const [open, setOpen] = useState(true)
  const [selectedTabs, setSelectedTabs] = useState([])
  const [selectedSection, setSelectedSection] = useState(null)
  // functions
  const path = tabsPath(router.pathname)
  const subPath = sectionPath(router.pathname)
  // effects
  useEffect(() => {
    setSelectedTabs(Menus[activeTab || path])
  }, [activeTab, path])

  return (
    <div>
      <div className="tabs flex justify-around p-4 border-b-2">
        {tabsMenu.map((menu) => (
          <a
            className={`tab font-bold text-neutral text-[16px] ${
              (activeTab || path) === menu.key && 'text-primary'
            } hover:text-primary`}
            onClick={() => setActiveTab(menu.key)}
            key={menu.id}>
            {menu.icons && menu.iconName}
            <span className={`${menu.icons && 'px-4'}`}>{menu.title}</span>
          </a>
        ))}
      </div>
      <div className="fixed">
        <div className={`${open ? 'w-72' : 'w-20'} duration-300 w-72 h-[94vh] bg-primary relative`}>
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
            <Image src="/common/logo-white.png" width={140} height={40} alt="BoostMe's logo" />
          </div>
          <ul className={`p-6 flex flex-col ${!open && 'items-center'}`}>
            {selectedTabs?.map((menu, index) => (
              <Link href={menu?.route || '/dashboard/analytics'} key={menu.key}>
                <li
                  className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-secondary rounded-md ${
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
    </div>
  )
}

export default DashboardMain
