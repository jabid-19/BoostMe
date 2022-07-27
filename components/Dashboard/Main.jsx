import Image from 'next/image'
import React, { useState } from 'react'
import { Menus, tabsMenu } from '../../data/Dashboard'
const DashboardMain = () => {
  const [activeTab, setActiveTab] = useState(null)
  const [open, setOpen] = useState(true)
  return (
    <div className="min-h-screen">
      <div className="tabs flex justify-around p-4 border-b-2">
        {tabsMenu.map((menu) => (
          <a
            className={`tab font-bold text-neutral text-[16px] ${
              activeTab === menu.id && 'text-primary'
            } hover:text-primary`}
            onClick={() => setActiveTab(menu.id)}
            key={menu.id}>
            {menu.icons && menu.iconName}
            <span className={`${menu.icons && 'px-4'}`}>{menu.title}</span>
          </a>
        ))}
      </div>
      <div className="flex fixed">
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
            {Menus.map((menu, index) => (
              <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-secondary rounded-md ${
                  menu.gap ? 'mt-9' : 'mt-2'
                }`}
                key={index}>
                {menu.icon}
                <span className={`${!open && 'hidden'} origin-left duration-200 text-xl`}>
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <h1>Home Page</h1>
        </div>
      </div>
    </div>
  )
}

export default DashboardMain
