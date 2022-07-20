import Image from 'next/image'
import Logo from '../../public/common/logo.png'
import imageLoader from '../../helper/imageLoader'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false)
      } else {
        // if scroll up show the navbar
        setShow(true)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <div
      className={
        show
          ? 'navbar bg-base-100 shadow-md shadow-pink-300 lg:px-24 py-4 sticky top-0 z-50'
          : 'navbar bg-base-100 shadow-md shadow-pink-300 px-24 py-4'
      }>
      <div className="navbar-start">
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
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex="0">
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
            <li className="btn btn-primary text-white text-center capitalize rounded-full px-8 ml-4 mr-8">
              <button>Get Started</button>
            </li>
          </ul>
        </div>
        <Image width={141} height={43} src={Logo} alt="" loader={imageLoader} />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="font-bold mr-4" tabIndex="0">
            <a>
              Tools
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-white">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li className="font-bold mr-4">
            <a>Pricing</a>
          </li>
          <li className="font-bold mr-4">
            <a>About</a>
          </li>
          <li className="font-bold mr-4">
            <a>Customers</a>
          </li>
          <li className="text-primary font-bold mr-4">
            <a>Login</a>
          </li>
          <li className="btn btn-primary text-white text-center capitalize rounded-full px-8 ml-4 mr-8">
            <button>Get Started</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
