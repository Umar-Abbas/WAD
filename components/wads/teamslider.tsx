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
      <img src="/images/wadteambg.svg" alt="background"  className="absolute left-0 right-0 w-full " />
        <div className="Satoshi mx-auto max-w-[1280px]">
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/images/wadteam.svg"
              alt="keyFeature"
              height={10}
              width={10}
              className="h-[72px] w-[100%]"
            />
            <h2 className="absolute top-[23%] mb-4  text-center text-xl font-bold text-[#150035] dark:text-white sm:text-2xl md:mb-8 md:text-3xl lg:mb-12 lg:text-[48px]">
              $WAD Team
            </h2>
            <Image
              src="/images/lineC.svg"
              alt="keyFeature"
              height={10}
              width={10}
              className="mt-2 h-[30px] w-[100%]"
            />
          </div>
          <Slider className="" {...settings2}>
            {wadteams?.map((teamscard, idx) => {
              return (
                <div className="mt-[50px] p-4" key={idx}>
                  <div className="relative px-8 flex h-[470px] w-full flex-col items-center justify-center  rounded-[20px] bg-cover object-cover  lg:py-5">
                    <Image
                      src="/images/teambg.svg"
                      alt="img"
                      width={10}
                      height={10}
                      className="absolute w-full h-full"
                    />
                    <div className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#f98c41]">
                      <Image
                        alt="logos"
                        className="rounded-xl"
                        width={100}
                        height={112}
                        src={teamscard.Image}
                      />
                    </div>
                    <h4 className="relative mt-3 block font-black text-[#000] md:mt-6 lg:text-lg">
                      {teamscard.title}
                    </h4>
                    <p className="dd relative mt-3  text-sm font-normal text-[#000] md:text-xl">
                      {teamscard.creater}
                    </p>
                    <p className="mt-3 px-14 relative text-center text-sm font-normal text-[#516371] md:text-[16px] lg:text-sm ">
                        {teamscard.description}
                      </p>
                      <p className="relative text-sm font-medium  mt-[16px] uppercase tokenomicsbg">read more</p>
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
