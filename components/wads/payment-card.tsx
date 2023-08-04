"use client"
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { wadteams, settings2 } from "../../app/dataComponet";
import OurPartner from './our-partner';

export default function PaymentCard() {
  return (
    <>
      <section className="lf:py-20 py-10 slider-section">
        <div className="max-w-[1280px] Satoshi relative mx-auto">
          <img
            src='/images/carouselbg-wu.png' className='absolute bottom-0 w-full block dark:hidden left-0 right-0' />
          <img src='/images/carouselbg-bu.png' className='absolute bottom-0 w-full dark:block hidden left-0 right-0' />
          <div className='grid grid-cols-1 gap-6'>
            {/* {wadteams?.map((teamscard, idx) => {
                return (
                  <> */}
            {/* card1 */}
            <div className=' z-40 flex items-center md:h-[414px] bg-[url(/images/payment1.png)] bg-cover rounded-[45px] overflow-hidden'>
              <div className='grid md:grid-cols-2 w-full px-10 lg:gap-20 gap-6  py-10'>
                <div className="md:flex md:h-[298px] my-auto">
                  <div className='md:flex md:flex-col justify-between'>
                    <h3 className="block lg:text-3xl md:text-2xl whitespace-nowrap text-xl font-bold text-white dark:text-white">
                      WAD Statistics
                    </h3>
                    <div>
                      <p className=" md:text-[16px] mb-3 font-medium text-sm text-white dark:text-white ">
                        Total Supply
                      </p>
                      <h4 className=" lg:text-2xl md:text-xl text-lg font-normal text-[#ffffff] dark:text-white ">
                        9,402,230,878
                      </h4>
                    </div>
                  </div>
                  <Image
                    width={300}
                    height={300}
                    alt="logos"
                    className="rounded-xl"
                    src='/images/paymentImage.png'
                  />
                </div>
                <div className="flex items-center justify-center flex-col">
                  <div>
                    <p className=" lg:text-xl md:text-lg border-b-2 lg:mb-4 mb-3 pb-1 font-medium text-[16px] text-white dark:text-white ">
                      Powered by ETH and BSC
                    </p>
                    <p className=" md:text-[16px] lg:mb-4 mb-3 pb-1 font-normal text-sm text-white dark:text-white ">
                      WAD contract addresses
                    </p>
                    <p className=" md:text-[16px] lg:mb-4 mb-3 pb-1 font-normal text-sm text-white dark:text-white ">
                      ETH: 0xcf0c122c6b73ff809c693db761e7baebe62b6a2e
                    </p>
                    <p className=" md:text-[16px] lg:mb-12 md:mb-8 mb-3 pb-1 font-normal text-sm text-white dark:text-white ">
                      BSC: 0xfb5b838b6cfeedc2873ab27866079ac55363d37e
                    </p>
                    <div className='flex items-center' >
                      <button className="bg-white mr-5 w-auto inline-flex justify-center items-center gap-x-3 text-cente rounded-full  whitespace-nowrap text-black font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-3 px-8 dark:focus:ring-0" >
                        Join WAD Community
                      </button>
                      <button className="bg-white w-auto inline-flex justify-center items-center gap-x-3 text-cente rounded-full  whitespace-nowrap text-black font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-3 px-8 dark:focus:ring-0" >
                        Join WAD Community
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className=' z-40 flex items-center md:h-[414px] bg-[url(/images/payment2.png)] bg-cover rounded-[45px] overflow-hidden'>
              <div className='grid md:grid-cols-2 w-full px-10 lg:gap-20 gap-6  py-10'>
                <div className="md:flex md:h-[298px] my-auto">
                  <div className='md:flex md:flex-col justify-between'>
                    <h3 className="block lg:text-3xl md:text-2xl whitespace-nowrap text-xl font-bold text-white dark:text-white">
                      WAD Tokenomics
                    </h3>
                    <div>
                      <p className=" md:text-[16px] mb-3 font-medium text-sm text-white dark:text-white ">
                        Total Supply
                      </p>
                      <h4 className=" lg:text-2xl md:text-xl text-lg font-normal text-[#ffffff] dark:text-white ">
                        9,402,230,878
                      </h4>
                    </div>
                  </div>
                  <Image
                    width={300}
                    height={300}
                    alt="logos"
                    className="rounded-xl"
                    src='/images/paymentImage1.png'
                  />
                </div>
                <div className="flex items-center justify-center flex-col">
                  <div>
                    <p className=" lg:text-xl md:text-lg border-b-2 lg:mb-4 mb-3 pb-1 font-medium text-[16px] text-white dark:text-white ">
                      Powered by ETH and BSC
                    </p>
                    <p className=" md:text-[16px] lg:mb-4 mb-3 pb-1 font-normal text-sm text-white dark:text-white ">
                      WAD contract addresses
                    </p>
                    <p className=" md:text-[16px] lg:mb-4 mb-3 pb-1 font-normal text-sm text-white dark:text-white ">
                      ETH: 0xcf0c122c6b73ff809c693db761e7baebe62b6a2e
                    </p>
                    <p className=" md:text-[16px] lg:mb-12 md:mb-8 mb-3 pb-1 font-normal text-sm text-white dark:text-white ">
                      BSC: 0xfb5b838b6cfeedc2873ab27866079ac55363d37e
                    </p>
                    <div className='flex items-center' >
                      <button className="bg-white mr-5 w-auto inline-flex justify-center items-center gap-x-3 text-cente rounded-full  whitespace-nowrap text-black font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-3 px-8 dark:focus:ring-0" >
                        EtherScan (ETH)
                      </button>
                      <button className="bg-white w-auto inline-flex justify-center items-center gap-x-3 text-cente rounded-full  whitespace-nowrap text-black font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-3 px-8 dark:focus:ring-0" >
                        BscScan (BSC)
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className=' z-40 flex items-center md:h-[414px] bg-[url(/images/payment3.png)] bg-cover rounded-[45px] overflow-hidden'>
              <div className='grid md:grid-cols-2 w-full px-10 lg:gap-20 gap-6  py-10'>
                <div className="md:flex md:h-[298px] my-auto">
                  <div className='md:flex md:flex-col justify-between'>
                    <h3 className="block lg:text-3xl md:text-2xl whitespace-nowrap text-xl font-bold text-white dark:text-white">
                      WAD Tokenomics
                    </h3>
                    <div>
                      <p className=" md:text-[16px] mb-3 font-medium text-sm text-white dark:text-white ">
                        Total Supply
                      </p>
                      <h4 className=" lg:text-2xl md:text-xl text-lg font-normal text-[#ffffff] dark:text-white ">
                        9,402,230,878
                      </h4>
                    </div>
                  </div>

                  <Image
                    width={300}
                    height={300}
                    alt="logos"
                    className="w-full"
                    src='/images/paymentImage3.png'
                  />

                </div>
                <div className="flex items-center justify-center flex-col">
                  <div>
                    <p className=" lg:text-xl md:text-lg border-b-2 lg:mb-4 mb-3 pb-1 font-medium text-[16px] text-white dark:text-white ">
                      Solidity Finance
                    </p>

                    <div className='flex items-center lg:mb-10' >
                      <button className="bg-white mr-5 w-auto inline-flex justify-center items-center gap-x-3 text-cente rounded-full  whitespace-nowrap text-black font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-3 px-8 dark:focus:ring-0" >
                        Binance Smart Chain
                      </button>
                      <button className="bg-white w-auto inline-flex justify-center items-center gap-x-3 text-cente rounded-full  whitespace-nowrap text-black font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-3 px-8 dark:focus:ring-0" >
                        Ethereum
                      </button>
                    </div>
                    <p className=" lg:text-xl md:text-lg border-b-2 lg:mb-4 mb-3 pb-1 font-medium text-[16px] text-white dark:text-white ">
                      CertiK
                    </p>

                    <div className='flex items-center' >
                      <button className="bg-white mr-5 w-auto inline-flex justify-center items-center gap-x-3 text-cente rounded-full  whitespace-nowrap text-black font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-3 px-8 dark:focus:ring-0" >
                        WAD Token
                      </button>
                      <button className="bg-white w-auto inline-flex justify-center items-center gap-x-3 text-cente rounded-full  whitespace-nowrap text-black font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-3 px-8 dark:focus:ring-0" >
                        WADFi
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <OurPartner />
        </div>

      </section >
    </>
  )
}
