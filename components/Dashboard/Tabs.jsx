import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Menus, tabsMenu } from '../../data/Dashboard'
import { tabsPath } from '../../helper/pathGenerator'

const DashboardTabs = ({ setSelectedTabs, activeTab, setActiveTab }) => {
  const router = useRouter()
  const path = tabsPath(router.pathname)

  useEffect(() => {
    setSelectedTabs(Menus[activeTab || path])
  }, [activeTab, path, setSelectedTabs])

  return (
    <div>
      <div className="flex flex-wrap bg-base-100 min-h-[80px] xl:justify-center border-b-2">
        <div className="ml-5 lg:hidden">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {tabsMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    className={`font-bold text-neutral text-[16px] ${
                      (activeTab || path) === menu.key && 'text-primary'
                    } hover:text-primary`}
                    onClick={() => setActiveTab(menu.key)}>
                    <span>{menu.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {tabsMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  className={`font-bold text-neutral text-[16px] ${
                    (activeTab || path) === menu.key && 'text-primary'
                  } hover:text-primary hover:bg-transparent`}
                  onClick={() => setActiveTab(menu.key)}>
                  {menu.icons && menu.iconName}
                  <span className={`${menu.icons && 'px-4'}`}>{menu.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardTabs
