"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/dist/client/link';
import ThemeButton from '@/app/themButton1';


export default function Header4() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1023) {
        setToggle(false);
      }
    })
    window.addEventListener('scroll', () => {
      if (window.scrollY > 65) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    })
  })
  return (
    <div className={`w-full fixed z-[9999] border-b-[1px] border-fd-lightBlue ${scroll ? 'bg-[#fff] text-black' : 'bg-white text-black'}`}
      style={{
        background: '#FFF',
        boxShadow: '0px 4px 30px 0px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div className='container max-w-[1280px] mx-auto'>
        <div className='flex justify-between w-full py-4 align-middle bg-black-1'>
          <img className='w-[70px] md:w-[100px]' src="/images/logo-top.png" alt="Logo" />
          <ThemeButton />
          <div className='flex justify-center flex-1 items-center'>

            <div className="lg:hidden">
              <button onClick={toggleMenu} type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            <div
              className={`flex-1 !z-[999999] lg:bg-transparent bg-purple-600 lg:w-auto  lg:p-0   fixed top-0 left-0 bottom-0 lg:relative justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${isMenuOpen
                ? "md:w-[50%] w-[70%] "
                : " lg:inline-block md:hidden hidden"
                }`}>
              <ul className='flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center md:justify-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7'>
                <li className="mx-5 nav-item">
                  <Link href="/">
                    <div className='nav-link  p-0  text-small' >Home    </div>
                  </Link>
                </li>
                <li className="mx-5 nav-item">
                  <Link href="/rating-index">
                    <div className='nav-link  p-0  text-small' >Tokenomics</div>
                  </Link>
                </li>
                <li className="mx-5 nav-item">
                  <Link href="/investment">
                    <div className='nav-link  p-0  text-small' >About WAD</div>
                  </Link>
                </li>
                <li className="mx-5 nav-item">
                  <Link href="/gallery">
                    <div className='nav-link  p-0  text-small' >Key Features</div>
                  </Link>
                </li>
                <li className="mx-5 nav-item">
                  <Link href="/news">
                    <div className='nav-link  p-0  text-small' >Core Values</div>
                  </Link>
                </li>
                <li className="mx-5 nav-item">
                  <Link href="/news">
                    <div className='nav-link  p-0  text-small' >More</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link href="/rating-index">
            <button className="wadbtn sm:w-[195px] rounded-full w-auto inline-flex justify-center items-center gap-x-3 text-cente  text-white font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-4 px-8 dark:focus:ring-0"
              style={{

                background: 'linear-gradient(32deg, #F42D32 68.96%, #FCCB4C 100%)',
                boxShadow: '0px 25px 30px 0px rgba(21, 0, 53, 0.16)'
              }}>
              Get WAD
            </button>  </Link>
        </div>
      </div>

    </div>

  )
}
