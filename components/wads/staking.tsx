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
        <div className="Satoshi mx-auto max-w-[1280px]">
          <h1 className="   text-center text-xl font-bold text-[#150035] dark:text-white sm:text-2xl md:mb-8 md:text-3xl lg:mb-4 lg:text-[40px]">
            Staking
          </h1>
          <h2 className="mb-4  text-center text-sm font-bold text-[#150035] dark:text-white sm:text-2xl md:mb-8 md:text-3xl lg:mb-12 lg:text-lg">
            The WAD team has designed an efficient allocative staking pool that
            reward our users up to 100% at an annual return rate.There is also a
            feasibility of availing diffrent staking pools services depending on
            which locking period suits you best.
          </h2>
          <div className="grid grid-cols-3">
            {staking?.map((teamscard, idx) => {
              return (
                <div className="p-4" key={idx}>
                  <div className="flex flex-col object-cover w-full h-full p-4 px-6 bg-cover stakingbg1 lg:py-5">
                    <h1 className="  text-center text-xl font-bold capitalize text-[#FFF] dark:text-white sm:text-2xl md:mb-8 md:text-3xl lg:mb-1 lg:text-[30px]">
                      {teamscard.pool}
                    </h1>
                    <h2 className="mb-4 px-2 text-center text-sm font-bold capitalize text-[#FFF] dark:text-white sm:text-2xl md:mb-8 md:text-base lg:mb-12 lg:text-base">
                      {teamscard.description}
                    </h2>
                    <div className="flex justify-between mb-2">
                      <div className="block font-normal text-[#FFF] dark:text-white   lg:text-lg">
                        DPY
                      </div>
                      <div className="block  text-[#FFF] dark:text-white   lg:text-lg">
                        1.369%
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="block font-normal text-[#FFF] dark:text-white   lg:text-lg">
                        APY
                      </div>
                      <div className="block  text-[#FFF] dark:text-white   lg:text-lg">
                        300%
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="block font-normal text-[#FFF] dark:text-white   lg:text-lg">
                        Total Staked
                      </div>
                      <div className="block  text-[#FFF] dark:text-white   lg:text-lg">
                        0.00 WAD
                      </div>
                    </div>
                    <div className="flex justify-between mt-4">
                      <div>
                        <h1 className="block font-medium text-[#FFF] dark:text-white   lg:text-lg">
                          WAD Earned
                        </h1>
                        <h1 className="block font-black text-[#FFF] dark:text-white   lg:text-lg">
                          0.00
                        </h1>
                      </div>
                      <div>
                        <button className="rounded-[40px] bg-[#FFF] px-6  py-2 text-[#000]">
                          HARVEST
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="w-full rounded-[40px] bg-[#FFF] px-6 py-2.5 text-[14px] font-medium  uppercase text-[#000]">
                        Connect Wallet
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
