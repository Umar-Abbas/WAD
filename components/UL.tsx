"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Ul(props: any) {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            {" "}
            <div style={{ justifyContent: "start" }}
                className={`flex-1 !z-[999999] md:bg-transparent bg-purple-600 lg:w-auto lg:p-0 py-2 flex flex-col-reverse justify-end  fixed top-0 right-0 bottom-0 md:relative pb-3 lg:block md:pb-0 md:mt-0 ${toggle
                    ? "md:w-[50%] w-[70%] "
                    : " lg:inline-block hidden"
                    }`} id={props.id}>
                {/* <div
                className={`hs-collapse ${toggle ? 'flex' : 'hidden'} overflow-hidden grow transition-all duration-300 gap-x-[196px] basis-full sm:flex items-center  ${props.className}`}
                
            > */}
                {props.children}
                <div className="lg:hidden 2xl:gap-x-7 order-1 lg:gap-x-4 md:gap-x-2 block">
                    <button
                        className="absolute top-3 right-3 px-4 py-2 font-bold bg-transparent rounded hover:bg-transparent"
                        onClick={() => setToggle(!toggle)}
                    >
                        <Image
                            width={20}
                            height={20}
                            className="fill-white"
                            src='/images/xmarkw.svg' alt='logo'
                        />
                    </button>
                    <ul className='flex flex-col gap-y-4 gap-x-0 mt-5 text-white md:flex-row lg:justify-center md:gap-y-0- sm:gap-x-7 md:mt-0 sm:pl-7'>
                        <li className="mx-5 nav-item">
                            <Link href="/">
                                <div className='nav-link  p-0  text-small' >Home    </div>
                            </Link>
                        </li>
                        <li className="mx-5 nav-item">
                            <Link href="/">
                                <div className='nav-link  p-0  text-small' >Tokenomics</div>
                            </Link>
                        </li>
                        <li className="mx-5 nav-item">
                            <Link href="/">
                                <div className='nav-link  p-0  text-small' >About WAD</div>
                            </Link>
                        </li>
                        <li className="mx-5 nav-item">
                            <Link href="/">
                                <div className='nav-link  p-0  text-small' >Key Features</div>
                            </Link>
                        </li>
                        <li className="mx-5 nav-item">
                            <Link href="/">
                                <div className='nav-link  p-0  text-small' >Core Values</div>
                            </Link>
                        </li>
                        <li className="mx-5 nav-item">
                            <Link href="/">
                                <div className='nav-link  p-0  text-small' >More</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lg:hidden  flex justify-end  items-center" >




                <Link href="/rating-index">
                    <button className="wadbtn sm:w-[195px] rounded-full w-auto inline-flex justify-center items-center gap-x-3 text-cente text-white font-medium focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-4 px-8 dark:focus:ring-0" style={{ background: 'linear-gradient(32deg, #F42D32 68.96%, #FCCB4C 100%)', boxShadow: '0px 25px 30px 0px rgba(21, 0, 53, 0.16)' }}>
                        Get WAD
                    </button>
                </Link>
                <button onClick={() => setToggle(!toggle)} type="button" className="hs-collapse-toggl ml-3 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 341 308" fill="none">
                        <rect width="341" height="308" rx="24" fill="url(#paint0_linear_202_74)" />
                        <path d="M50 64.8333C50 54.9693 57.685 47 67.1972 47H273.564C283.076 47 290.761 54.9693 290.761 64.8333C290.761 74.6974 283.076 82.6667 273.564 82.6667H67.1972C57.685 82.6667 50 74.6974 50 64.8333ZM50 154C50 144.136 57.685 136.167 67.1972 136.167H273.564C283.076 136.167 290.761 144.136 290.761 154C290.761 163.864 283.076 171.833 273.564 171.833H67.1972C57.685 171.833 50 163.864 50 154ZM290.761 243.167C290.761 253.031 283.076 261 273.564 261H67.1972C57.685 261 50 253.031 50 243.167C50 233.303 57.685 225.333 67.1972 225.333H273.564C283.076 225.333 290.761 233.303 290.761 243.167Z" fill="white" />
                        <defs>
                            <linearGradient id="paint0_linear_202_74" x1="23.8887" y1="308" x2="361.01" y2="1.51012" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#BB0100" />
                                <stop offset="0.640194" stop-color="#F42D32" />
                                <stop offset="1" stop-color="#FFCD2C" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
            </div>


        </>
    );
}