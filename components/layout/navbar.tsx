import React from 'react';
import Link from 'next/dist/client/link';
import ThemeButton from '@/app/themButton1';
import Ul from '../UL';


export default function Navbar() {
  return (
    <div className='w-full fixed z-[9999] border-b-[1px] text-black px-4  border-fd-lightBlue' style={{ background: '#FFF', boxShadow: '0px 4px 30px 0px rgba(0, 0, 0, 0.04)' }}>
      <div className='container max-w-[1280px] mx-auto'>
        <div className='flex justify-between w-full py-4 align-middle bg-black-1'>
          <img className='w-[70px] md:w-[100px]' src="/images/logo-top.png" alt="Logo" />
          <ThemeButton />
          <div className='flex justify-center flex-1 items-center'>
            <Ul id="navbar-collapse-with-animation" className="!z-[999999] lg:bg-transparent md:w-auto lg:p-0 pb-3 md:block md:pb-0 md:mt-0">
              <ul className='flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center md:justify-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7'>
                <li className="mx-5 nav-item">
                  <Link href="/">
                    <div className='nav-link p-0 text-small'>Home</div>
                  </Link>
                </li>
                <li className="mx-5 nav-item">
                  <Link href="/rating-index">
                    <div className='nav-link p-0 text-small'>Tokenomics</div>
                  </Link>
                </li>
                <li className="mx-5 nav-item">
                  <Link href="/investment">
                    <div className='nav-link p-0 text-small'>About WAD</div>
                  </Link>
                </li>
                <li className="mx-5 nav-item">
                  <Link href="/gallery">
                    <div className='nav-link p-0 text-small'>Key Features</div>
                  </Link>
                </li>
                <li className="mx-5 nav-item">
                  <Link href="/news">
                    <div className='nav-link p-0 text-small'>Core Values</div>
                  </Link>
                </li>
                <li className="mx-5 nav-item">
                  <Link href="/news">
                    <div className='nav-link p-0 text-small'>More</div>
                  </Link>
                </li>
              </ul>
            </Ul>
          </div>
          <Link href="/rating-index">
            <button className="wadbtn sm:w-[195px] rounded-full w-auto inline-flex justify-center items-center gap-x-3 text-cente text-white font-medium focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-4 px-8 dark:focus:ring-0" style={{ background: 'linear-gradient(32deg, #F42D32 68.96%, #FCCB4C 100%)', boxShadow: '0px 25px 30px 0px rgba(21, 0, 53, 0.16)' }}>
              Get WAD
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
