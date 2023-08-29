"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { staking } from "../../app/dataComponet";

export default function Teamslider() {
  return (
    <>
      <section
        className="py-10 slider-section lg:py-20"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        <img
          src="/images/keybg2.svg"
          alt="background"
          className="absolute bottom-0 left-0 right-0 w-full "
        />

        <div className="Satoshi mx-auto max-w-[1280px]">
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/images/staking.svg"
              alt="keyFeature"
              height={10}
              width={10}
              className="h-[74px] w-[100%]"
            />
            <h2 className="absolute top-[12%] mb-4  text-center   text-[48px] font-bold text-[#150035]   dark:text-white   md:mb-8 lg:mb-12">
              Staking
            </h2>
            <Image
              src="/images/lineC.svg"
              alt="keyFeature"
              height={10}
              width={10}
              className="mt-2 h-[30px] w-[100%]"
            />
          </div>
          <h2 className="mb-4 mt-[20px] text-center text-sm font-normal text-[#516371] dark:text-white   md:mb-8   lg:mb-12 lg:px-20 lg:text-xl">
            The $WAD team has designed an efficient allocative staking pool that
            reward our users up to 100% at an annual return rate.There is also a
            feasibility of availing diffrent staking pools services depending on
            which locking period suits you best.
          </h2>
          <div className="grid gap-5 space-y-8 sm:space-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {/* <div className="flex flex-wrap w-full gap-3 lg:flex-nowrap"> */}

            {staking?.map((teamscard, idx) => {
              return (
                <div className="relative w-full p-6 bg-[url(/images/stakingbg.svg)] bg-[length:100%_100%] dark:bg-[url(/images/stakingdark.svg)] mx-auto sm:p-8 md:p-14 lg:p-4 lg:px-12" key={idx}>
                  {/* <img
                    src="/images/stakingbg.svg"
                    alt="staking"
                    className="absolute top-0 bottom-0 left-0 right-0 hidden w-full h-full sm:block"
                  />
                   <img
                    src="/images/stakingmb.svg"
                    alt="staking"
                    className="absolute top-0 bottom-0 left-0 right-0 block w-full h-auto sm:hidden"
                  /> */}
                  <div className="flex flex-col   px-4 lg:px-0 lg:py-[50px]">
                    <h1 className=" flex items-center justify-center gap-2 text-center text-xl font-bold capitalize text-[#000] dark:text-[#FFF]  sm:text-2xl md:mb-8 md:text-3xl lg:mb-1 lg:text-[22px]">
                      <Image
                        src={"/images/star.svg"}
                        alt="star"
                        width={10}
                        height={10}
                        className="w-5 h-5"
                      />
                      {teamscard.pool}
                    </h1>
                    <h2 className="mt-[8px]  text-center text-sm font-bold capitalize text-[#516371]    md:mb-8 md:text-base lg:mb-12 lg:text-sm 2xl:text-base">
                      {teamscard.description}
                    </h2>
                    <div className="mb-2 mt-[20px] flex justify-between">
                      <div className="Satoshi block font-normal text-[#516371]    lg:text-sm 2xl:text-base">
                        DPY
                      </div>
                      <div className="Satoshi block text-[#000]  dark:text-[#FFF]  lg:text-sm 2xl:text-base">
                        1.369%
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="block font-normal text-[#516371]    lg:text-sm 2xl:text-base">
                        APY
                      </div>
                      <div className="block  text-[#000]  dark:text-[#FFF]  lg:text-sm 2xl:text-base">
                        300%
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="block font-normal text-[#516371]    lg:text-sm 2xl:text-base">
                        Total Staked
                      </div>
                      <div className="block  text-[#000] dark:text-white  lg:text-sm 2xl:text-base">
                        0.00 $WAD
                      </div>
                    </div>
                    <div className="flex justify-between mt-4">
                      <div>
                        <h1 className="block font-bold stakingtext lg:text-sm 2xl:text-base">
                          $WAD Earned
                        </h1>
                        <h1 className="block font-black text-[#000] dark:text-[#FFF]   lg:text-sm 2xl:text-base">
                          0.00
                        </h1>
                      </div>
                      <div>
                        <button className="rounded-[40px] bg-[#BEBEBE] px-6  py-2 text-[#000]">
                          HARVEST
                        </button>
                      </div>
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-[46px] flex justify-center items-center">
                      <button className="walletbg  rounded-[40px] px-6 py-2.5 text-[14px] font-medium  uppercase text-[#FFF]">
                       Comming Soon
                      </button>
                    </div>
        </div>
      </section>
    </>
  );
}
