"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { wadteams, settings2 } from "../../app/dataComponet";
import OurPartner from "./our-partner";

export default function PaymentCard() {
  return (
    <>
      <section className=" lg:py-20 slider-section">
        <div className="Satoshi relative mx-auto px-4 max-w-[1280px]">
          <img
            src="/images/ourpartner.png"
            className="absolute bottom-0 left-0 right-0 block w-full dark:hidden"
          />
          <img
            src="/images/ourpartner.png"
            className="absolute bottom-0 left-0 right-0 hidden w-full dark:block"
          />
          <div className="grid grid-cols-1 gap-6">
            {/* {wadteams?.map((teamscard, idx) => {
                return (
                  <> */}
            {/* card1 */}
            <div
              className=" z-40 flex items-center overflow-hidden rounded-[45px] bg-[url(/images/payment1.png)] bg-cover md:h-[414px]"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <div className="grid w-full gap-6 px-2 py-10 md:grid-cols-2 md:px-10 lg:gap-20">
                <div className="my-auto md:flex justify-between md:h-[298px]">
                  <div className="justify-between md:flex md:flex-col">
                    <h3 className="block text-xl font-bold text-white whitespace-nowrap dark:text-white md:text-2xl lg:text-3xl">
                      $WAD Statistics
                    </h3>
                    <div>
                      <p className=" mb-8 whitespace-nowrap text-sm font-bold text-white dark:text-white md:text-[26px] ">
                        Your Gateway to Collective Success!
                      </p>
                      <p className=" mb-3 text-sm font-normal text-white dark:text-white md:text-[16px] ">
                        Total Supply
                      </p>
                      <h4 className=" text-lg font-normal text-[#ffffff] dark:text-white md:text-xl lg:text-2xl ">
                      100,000,000
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <p className=" mb-3 border-b-2 pb-1 text-[16px] font-medium text-white dark:text-white md:text-lg lg:mb-4 lg:text-xl ">
                      Powered by ETH and BSC
                    </p>
                    <p className=" mb-3 pb-1 text-sm font-medium text-white dark:text-white md:text-[16px] lg:mb-4 ">
                      $WAD contract addresses
                    </p>
                    <p className=" mb-3 pb-1 text-sm font-medium text-white dark:text-white md:text-[16px] lg:mb-4 ">
                      ETH: 0xcf0c122c6b73ff809c693db761e7baebe62b6a2e
                    </p>
                    <p className=" mb-3 pb-1 text-sm font-medium text-white dark:text-white md:mb-8 md:text-[16px] lg:mb-12 ">
                      BSC: 0xfb5b838b6cfeedc2873ab27866079ac55363d37e
                    </p>
                    <div className="flex items-center">
                      <div className="text-[18px] font-bold text-[#FFF]">
                        ( $WAD Community ) (Connect Wallet ) 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card2 */}
            {/* <div
              className=" z-40 flex items-center overflow-hidden rounded-[45px] bg-[url(/images/payment2.png)] bg-cover md:h-[414px]"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <div className="grid w-full gap-6 px-2 py-10 md:grid-cols-2 md:px-10 lg:gap-20">
                <div className="my-auto md:flex justify-between md:h-[298px]">
                  <div className="justify-between md:flex md:flex-col">
                    <h3 className="block text-xl font-bold text-white whitespace-nowrap dark:text-white md:text-2xl lg:text-3xl">
                      $WAD Tokenomics
                    </h3>
                    <div>
                      <p className=" mb-8 text-sm font-bold text-white dark:text-white md:text-[26px] ">
                        Your Path to Prosperity!
                      </p>
                      <p className=" mb-3 mt-[22px] text-sm font-normal text-white dark:text-white md:text-[16px] ">
                        Total Supply
                      </p>
                      <h4 className=" text-lg font-normal text-[#ffffff] dark:text-white md:text-xl lg:text-2xl ">
                        100,000,000
                      </h4>
                    </div>
                  </div>
                  
                </div>
                <div className="flex flex-col md:ml-16">
                  <div>
                    <p className=" mb-3 pb-1 text-sm font-normal text-white dark:text-white md:text-[16px] lg:mb-5 ">
                      25% Ecosystem
                    </p>
                    <p className=" mb-3 pb-1 text-sm font-normal text-white dark:text-white md:text-[16px] lg:mb-5 ">
                      10% CEX Exchange / Listing
                    </p>
                    <p className=" mb-3 pb-1 text-sm font-normal text-white dark:text-white md:mb-8 md:text-[16px] lg:mb-5 ">
                      5% Reserves
                    </p>
                    <p className=" mb-3 pb-1 text-sm font-normal text-white dark:text-white md:mb-8 md:text-[16px] lg:mb-5 ">
                      5% Team Wallet
                    </p>
                    <p className=" mb-3 pb-1 text-sm font-normal text-white dark:text-white md:mb-8 md:text-[16px] lg:mb-12 ">
                      55% Liquidity / Max Wallet
                    </p>
                    <div className="flex items-center">
                      <div className="text-[18px] font-bold text-[#FFF]">
                        ( $WAD Community ) (Connect Wallet )
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* card2 */}
            {/* <div className=" z-40 flex items-center overflow-hidden rounded-[45px] bg-[url(/images/payment3.png)] bg-cover md:h-[414px]"
            data-aos="fade-up"
            data-aos-duration="2500"
            >
              <div className="grid w-full gap-6 px-10 py-10 md:grid-cols-2 lg:gap-20">
                <div className="my-auto md:flex md:h-[298px]">
                  <div className="justify-between md:flex md:flex-col">
                    <h3 className="block text-xl font-bold text-white whitespace-nowrap dark:text-white md:text-2xl lg:text-3xl">
                      $WAD Tokenomics
                    </h3>
                    <div>
                      <p className=" mb-3 text-sm font-medium text-white dark:text-white md:text-[16px] ">
                        Total Supply
                      </p>
                      <h4 className=" text-lg font-normal text-[#ffffff] dark:text-white md:text-xl lg:text-2xl ">
                        9,402,230,878
                      </h4>
                    </div>
                  </div>

                  <Image
                    width={300}
                    height={300}
                    alt="logos"
                    className="w-full"
                    src="/images/paymentImage3.png"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <p className=" mb-3 border-b-2 pb-1 text-[16px] font-medium text-white dark:text-white md:text-lg lg:mb-4 lg:text-xl ">
                      Solidity Finance
                    </p>

                    <div className="flex items-center lg:mb-10">
                      <button className="inline-flex items-center justify-center w-auto px-8 py-3 mr-5 font-medium text-black transition duration-300 bg-white rounded-full hover:scale-110 text-cente gap-x-3 whitespace-nowrap focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0">
                        Binance Smart Chain
                      </button>
                      <button className="inline-flex items-center justify-center w-auto px-8 py-3 font-medium text-black transition duration-300 bg-white rounded-full hover:scale-110 text-cente gap-x-3 whitespace-nowrap focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0">
                        Ethereum
                      </button>
                    </div>
                    <p className=" mb-3 border-b-2 pb-1 text-[16px] font-medium text-white dark:text-white md:text-lg lg:mb-4 lg:text-xl ">
                      CertiK
                    </p>

                    <div className="flex items-center">
                      <button className="inline-flex items-center justify-center w-auto px-8 py-3 mr-5 font-medium text-black transition duration-300 bg-white rounded-full hover:scale-110 text-cente gap-x-3 whitespace-nowrap focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0">
                        $WAD Token
                      </button>
                      <button className="inline-flex items-center justify-center w-auto px-8 py-3 font-medium text-black transition duration-300 bg-white rounded-full hover:scale-110 text-cente gap-x-3 whitespace-nowrap focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0">
                        WADFi
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <OurPartner />
        </div>
      </section>
    </>
  );
}
