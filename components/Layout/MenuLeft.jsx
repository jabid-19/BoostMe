import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'
// import 'react-accessible-accordion/dist/fancy-example.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const MenuLeft = ({ routes, closeMenu }) => {
  const router = useRouter()
  console.log(router.pathname)
  const generateMenuItem = (item) => (
    <li key={item?.key}>
      {/* {console.log(item, '***')} */}
      <Link href={item.url}>
        <a
          onClick={closeMenu ? () => closeMenu(false) : undefined}
          className={`${router.pathname === item.url && 'active'}`}>
          <div className="icon-container">{item.icon}</div>
          {item.title}
        </a>
      </Link>
    </li>
  )
  const generateMenu = routes.map((route) => {
    if (!route?.subMenu) {
      return generateMenuItem(route)
    }
    if (route?.subMenu) {
      return (
        <>
          <div tabIndex="0" className="collapse collapse-arrow ">
            <div className="collapse-title text-xl font-medium">
              <Link href={route.url}>
                <a className="flex items-center gap-2">
                  <div>{route.icon}</div>
                  <div>{route.title}</div>
                </a>
              </Link>
            </div>
            <div className="collapse-content">
              <ul>
                {route?.subMenu.map((subItem) => (
                  <li key={subItem?.key}>
                    {console.log(true)}
                    <Link href={subItem.url} passHref>
                      <a onClick={() => console.log(true)}>
                        <div className="icon-container">{subItem.icon}</div>
                        {subItem.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Accordion>
            <AccordionItem key={1}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Link href={route.url}>
                    <a className="flex items-center gap-2">
                      <div>{route.icon}</div>
                      <div>{route.title}</div>{' '}
                    </a>
                  </Link>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {route.subMenu.map((sub) => (
                  <li key={sub?.key}>
                    <Link href={sub.url}>
                      <a
                        onClick={closeMenu ? () => closeMenu(false) : undefined}
                        className="active">
                        <div className="icon-container">{sub.icon}</div>
                        {sub.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </>
      )
    }
    return null
  })
  return (
    <nav className="min-h-screen w-[260px] fixed flex flex-col items-center bg-primary">
      <section className="h-[80px] w-full py-[40px] flex justify-start items-start flex-col">
        <button
          style={{ all: 'unset' }}
          type="button"
          onClick={closeMenu ? () => closeMenu(false) : undefined}>
          <div className="logo-container">{/* <LogoMain /> */}</div>
        </button>
        <h4>{'dashboard'.toUpperCase()}</h4>
      </section>
      <PerfectScrollbar>
        <ul>{generateMenu}</ul>
      </PerfectScrollbar>
    </nav>
  )
}

export default MenuLeft
