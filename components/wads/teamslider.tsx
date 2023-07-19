"use client"
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { wadteams, settings2 } from "../../app/dataComponet";

export default function Teamslider() {
  return (
    <>
      <section className="lg:py-20 py-10 slider-section">
        <div className="max-w-[1280px] Satoshi mx-auto">
          <p className="md:text-[16px] text-sm font-normal text-center mb-6 text-[#516371] dark:text-white ">
            Core Team
          </p>
          <h2 className="text-[#150035]  lg:mb-12 md:mb-8 mb-4 lg:text-[40px] md:text-3xl sm:text-2xl text-xl text-center dark:text-white">
            WAD Team
          </h2>
       
            <Slider className=" mx-auto" {...settings2}>
              {wadteams?.map((teamscard, idx) => {
                return (
                  <>
                    <div className="lg:p-6 p-4 w-full">
                      <div className="">
                        <Image
                          alt="logos"
                          className="rounded-xl"
                          width={100}
                          height={112}
                          src={teamscard.Image}
                        />
                        <h4 className="block md:mt-6 mt-3 lg:text-lg font-extrabold text-[#000] dark:text-white">
                          {teamscard.title}
                        </h4>
                        <p className="mt-3 md:text-[16px] font-medium text-sm text-[#000] dark:text-white ">
                          {teamscard.creater}
                        </p>
                        <p className="mt-3 lg:text-lg md:text-[16px] text-sm font-normal text-[#516371] dark:text-white ">
                          {teamscard.description}
                        </p>
                  
                      </div>

                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
      </section >
    </>
  )
}
