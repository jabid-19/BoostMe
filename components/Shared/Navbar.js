import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import imageLoader from '../../helper/imageLoader'
import Logo from '../../public/common/logo.png'

const Navbar = () => {
  const [languageMode, setLanguageMode] = useState('EN')

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
                  <a>Publishing</a>
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
              <a>Pricing</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Customers</a>
            </li>
            <div className="form-control py-2">
              <label className="label cursor-pointer">
                <span className="label-text pl-3">EN</span>
                <input type="checkbox" className="toggle toggle-secondary" />
                <span className="label-text pr-3">BN</span>
              </label>
            </div>
            <li>
              <a>Login</a>
            </li>
            <li>
              <button className="btn btn-primary text-white mt-1.5">Get Started</button>
            </li>
          </ul>
        </div>
        <a href="/">
          <Image width={141} height={43} src={Logo} alt="" loader={imageLoader} />
        </a>
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
                <a href="publishing">Publishing</a>
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
            <a href="pricing">Pricing</a>
          </li>
          <li className="mr-4">
            <a href="about">About</a>
          </li>
          <li className="mr-4">
            <a href="customers">Customers</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <div className="btn-group my-2 mr-4">
            <button
              className={
                languageMode == 'EN'
                  ? 'btn-sm bg-secondary rounded-l-full text-white'
                  : 'btn-sm bg-slate-200 rounded-l-full'
              }
              onClick={() => setLanguageMode('EN')}>
              EN
            </button>
            <button
              className={
                languageMode == 'BN'
                  ? 'btn-sm bg-secondary text-white rounded-r-full'
                  : 'btn-sm bg-slate-200 rounded-r-full'
              }
              onClick={() => setLanguageMode('BN')}>
              BN
            </button>
          </div>
          <li className="text-primary mr-4">
            <a href="login">Login</a>
          </li>
          <button className="btn btn-primary text-white text-center capitalize rounded-full px-8">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
