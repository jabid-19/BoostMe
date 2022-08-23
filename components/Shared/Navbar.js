import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import imageLoader from '../../helper/imageLoader'
import Logo from '../../public/common/logo-navbar.png'

// import axios from '../../axios'

const Navbar = () => {
  const [languageMode, setLanguageMode] = useState('EN')

  // API call to change language on button press. Please check and update
  //-------------------------------------------------------------
  // const setLanguage = async () => {
  //   if (languageMode === 'EN') {
  //     const res = await axios.get('/content/landing/BN')
  //     console.log(res)
  //     setLanguageMode('BN')
  //   } else {
  //     const res = await axios.get('/content/landing/EN')
  //     console.log(res)
  //     setLanguageMode('EN')
  //   }
  // }

  return (
    <div className={'navbar bg-base-100 shadow-md shadow-pink-300 lg:px-24 py-4 sticky top-0 z-50'}>
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
            <li tabIndex="0">
              <a className="justify-between">
                Tools
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-white">
                <li>
                  <Link href="/publishing">
                    <a>Publishing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/engagement">
                    <a>Engagement</a>
                  </Link>
                </li>
                <li>
                  <Link href="/start-page">
                    <a>Start Page</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="pricing">
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="customers">
                <a>Customers</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
            {/* <div className="btn-group md:min-w-[70px] my-4 ml-4">
              <button
                className={
                  languageMode == 'EN'
                    ? 'btn-xs bg-secondary rounded-l-full text-white text-xs'
                    : 'btn-xs bg-slate-200 rounded-l-full'
                }
                onClick={() => setLanguageMode('EN')}>
                EN
              </button>
              <button
                className={
                  languageMode == 'BN'
                    ? 'btn-xs bg-secondary rounded-r-full text-white text-xs'
                    : 'btn-xs bg-slate-200 rounded-r-full'
                }
                onClick={() => setLanguageMode('BN')}>
                BN
              </button>
            </div> */}
            <li>
              <Link href="login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: 'login', query: { keyword: 'register' } }}>
                <a className="btn btn-primary text-white mt-1.5">Get Started</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <a>
            <Image
              width={200}
              height={80}
              src={Logo}
              alt="BoostnBoom's Logo"
              loader={imageLoader}
            />
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="mr-4" tabIndex="0">
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
                <Link href="publishing">
                  <a>Publishing</a>
                </Link>
              </li>
              <li>
                <Link href="/engagement">
                  <a>Engagement</a>
                </Link>
              </li>
              <li>
                <Link href="/start-page">
                  <a>Start Page</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="mr-4">
            <Link href="pricing">
              <a>Pricing</a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="about">
              <a>About</a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="customers">
              <a>Customers</a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/contact">
              <a>Contact us</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 lg:items-center">
          {/* <div className="btn-group md:min-w-[70px] my-6 mr-4">
            <button
              className={
                languageMode == 'EN'
                  ? 'btn-xs bg-secondary rounded-l-full text-white text-xs'
                  : 'btn-xs bg-slate-200 rounded-l-full'
              }
              onClick={() => setLanguageMode('EN')}>
              EN
            </button>
            <button
              className={
                languageMode == 'BN'
                  ? 'btn-xs bg-secondary rounded-r-full text-white text-xs'
                  : 'btn-xs bg-slate-200 rounded-r-full'
              }
              onClick={() => setLanguageMode('BN')}>
              BN
            </button>
          </div> */}
          {/* <li tabIndex="0">
            <a>
              <p>Jhon Doe</p>
              <div className="avatar placeholder">
                <div className="bg-primary-focus text-neutral-content rounded-full w-12 h-12">
                  <span>JD</span>
                </div>
              </div>
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
                <a className="px-10" href="publishing">
                  Publishing
                </a>
              </li>
              <li>
                <Link href="/engagement">
                  <a className="px-10">Engagement</a>
                </Link>
              </li>
              <li>
                <Link href="/start-page">
                  <a className="px-10">Start Page</a>
                </Link>
              </li>
            </ul>
          </li> */}
          <li className="text-primary mr-4">
            <Link href="login">
              <a>Login</a>
            </Link>
          </li>
          <Link href={{ pathname: 'login', query: { keyword: 'register' } }}>
            <a className="btn btn-primary text-white text-center capitalize rounded-full px-8">
              Get Started
            </a>
          </Link>
          {/* <Link href="/contact">
            <a className="btn btn-primary text-white text-center normal-case rounded-full px-8">
              Contact us
            </a>
          </Link> */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
