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
                    <Link
                        onClick={() => setToggle(!toggle)}
                        className="flex items-center font-medium lg:bg-transparent hover:bg-slate-500 lg:py-5 py-3 md:p-2 px-10 md:w-auto w-full text-white sm:py-6" href="/lottrey" aria-current="page">
                        <Image src='/images/lottery-logo.svg'
                            className="mr-2"
                            width={20}
                            height={20}
                            alt="lottery"
                        />
                        Lottrey</Link>
                    <Link
                        onClick={() => setToggle(!toggle)}
                        className="flex items-center font-medium text-white/[.8] hover lg:bg-transparent hover:bg-slate-500 lg:py-5 py-3 md:p-2 px-10 md:w-auto w-full:text-white sm:py-6" href="/winner">
                        <Image src='/images/winner-logo.svg'
                            className="mr-2"
                            width={20}
                            height={20}
                            alt="lottery"
                        />
                        Winners
                    </Link>
                    <Link
                        onClick={() => setToggle(!toggle)}
                        className="flex items-center font-medium text-white/[.8] hover lg:bg-transparent hover:bg-slate-500 lg:py-5 py-3 md:p-2 px-10 md:w-auto w-full:text-white sm:py-6 lg:mr-8" href="/wallet">
                        <Image src='/images/wallet-logo.svg'
                            className="mr-2"
                            width={20}
                            height={20}
                            alt="lottery"
                        />
                        Wallet</Link>
                    <Link
                        onClick={() => setToggle(!toggle)}
                        className="flex items-center font-medium text-white/[.8] hover lg:bg-transparent hover:bg-slate-500 lg:py-5 py-3 md:p-2 px-10 md:w-auto w-full:text-white sm:py-6 lg:mr-8" href="/shoping-cart">
                        <Image
                            width={20}
                            height={20}
                            alt='copyicon'
                            className='p-[1px] mr-2'
                            src='/images/wishlist-icon.svg'
                        />
                        Wishlist
                    </Link>
                </div>
            </div>
            <div className="md:hidden  flex  items-center" >

                <Link className="relative font-medium text-white/[.8] hover lg:bg-transparent lg:p-2 px-4 lg:w-auto w-full:text-white py-3" href="/shoping-cart">
                    <div className="relative w-8 h-8">
                        <Image
                            width={28}
                            height={28}
                            alt='copyicon'
                            className='ml-1'
                            src='/images/carticon.svg'
                        />
                        <span className="bg-[#fff] rounded-full w-3 h-3 absolute right-0 top-0 flex items-center justify-center font-bold text-[10px] p-1 text-purple-600 ">5</span>
                    </div>
                </Link>

                <button onClick={() => setToggle(!toggle)} type="button" className="hs-collapse-toggle p-1 inline-flex justify-center items-center gap-2 rounded-md border-2 border-white/[.8] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                    <Image
                        width={28}
                        height={28}
                        alt='sfsf'
                        className=''
                        src='/images/menu.svg'
                    />
                </button>
            </div>

        </>
    );
}