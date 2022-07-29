import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Menus, tabsMenu } from '../../data/Dashboard'
import { tabsPath } from '../../helper/pathGenerator'

const DashboardTabs = ({ selectedTabs, setSelectedTabs, activeTab, setActiveTab }) => {
  const router = useRouter()
  const path = tabsPath(router.pathname)

  useEffect(() => {
    setSelectedTabs(Menus[activeTab || path])
  }, [activeTab, path, setSelectedTabs])

  return (
    <div>
      <div className="tabs flex flex-wrap justify-around p-4 border-b-2">
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
    </div>
  )
}

export default DashboardTabs
