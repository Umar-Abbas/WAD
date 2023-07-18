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
                className={`flex-1 !z-[999999] lg:bg-transparent bg-purple-600 lg:w-auto lg:p-0 py-2 flex flex-col-reverse md:justify-end  fixed top-0 right-0 bottom-0 md:relative pb-3 md:block md:pb-0 md:mt-0 ${toggle
                    ? "md:w-[50%] w-[70%] "
                    : " lg:inline-block md:block hidden"
                    }`} id={props.id}>
                {/* <div
                className={`hs-collapse ${toggle ? 'flex' : 'hidden'} overflow-hidden grow transition-all duration-300 gap-x-[196px] basis-full sm:flex items-center  ${props.className}`}
                
            > */}
                {props.children}
                <div className="md:hidden 2xl:gap-x-7 order-1 lg:gap-x-4 md:gap-x-2 block">
                    <button
                        className="absolute top-3 right-3 px-4 py-2 font-bold text-white bg-transparent rounded hover:bg-transparent"
                        onClick={() => setToggle(!toggle)}
                    >
                        <Image
                            width={20}
                            height={20}
                            className="fill-white"
                            src='/images/xmarkw.svg' alt='logo'
                        />
                    </button>
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
            <div className="md:hidden  flex  items-center" >

             

                <div className="lg:hidden">
              <button  onClick={() => setToggle(!toggle)} type="button" className="hs-collapse-toggle p-2 bg-black inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            </div>

        </>
    );
}