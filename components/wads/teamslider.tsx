"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { wadteams, settings2 } from "../../app/dataComponet";

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
          <p className="mb-6 text-center text-sm font-normal text-[#516371] dark:text-white md:text-[16px] ">
            Core Team
          </p>
          <h2 className="mb-4  text-center text-xl font-bold text-[#150035] dark:text-white sm:text-2xl md:mb-8 md:text-3xl lg:mb-12 lg:text-[40px]">
            WAD Team
          </h2>

          <Slider className="mx-auto" {...settings2}>
            {wadteams?.map((teamscard, idx) => {
              return (
                <div className="p-4" key={idx} >
                  <div className="w-full flex justify-center flex-col items-center rounded-[20px] bg-[url(/images/cardBg.svg)] bg-cover object-cover p-4 lg:py-5">
                    <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#f98c41]">
                      <Image
                        alt="logos"
                        className="rounded-xl"
                        width={100}
                        height={112}
                        src={teamscard.Image}
                      />
                    </div>
                    <h4 className="mt-3 block font-black text-[#000] dark:text-white md:mt-6 lg:text-lg">
                      {teamscard.title}
                    </h4>
                    <p className="mt-3 text-sm font-medium text-[#000] dark:text-white md:text-[16px] ">
                      {teamscard.creater}
                    </p>
                    {/* <p className="mt-3 text-sm font-normal text-[#516371] dark:text-white md:text-[16px] lg:text-lg ">
                        {teamscard.description}
                      </p> */}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}
