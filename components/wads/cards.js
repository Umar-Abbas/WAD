import Image from "next/image";
import React from "react";
import Carousel from "@/components/wads/carousel";
import { tokenomics } from "../../app/dataComponet";

export default function Cards() {
  return (
    <>
      {/* hero */}
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        <div className="Satoshi relative mx-auto max-w-[1280px]">
          <img
            src="/images/carouselbgw.png"
            className="absolute left-0 right-0 top-0 block w-full dark:hidden"
          />
          <img
            src="/images/carouselbgb.png"
            className="absolute left-0 right-0 top-0 hidden w-full dark:block"
          />
          {/* Grid */}
          <Carousel />
          <div
            className="relative z-30 pt-3 sm:pt-5 lg:pt-16 xl:pt-28"
            id="tokenomics"
          >
            <div className="mb-5 text-center md:mb-8 md:text-3xl lg:mb-12">
              <h2 className="text-xl font-bold text-[#150035] dark:text-white sm:text-2xl  lg:text-[40px]">
                Tokenomics
              </h2>
              <p className="para mt-3 text-lg font-bold text-[#000] dark:text-white">
                Explore the Financial DNA of Cryptocurrency!
              </p>
            </div>
            <div className="flex flex-wrap !justify-center gap-4 lg:items-center lg:gap-10">
              {tokenomics?.map((datacard, idx) => {
                return (
                  <>
                    <div  data-aos="flip-left" data-aos-duration="2000" className="h-[250px] w-full overflow-hidden rounded-[24PX] bg-[url(/images/cardBg.svg)] bg-cover object-cover p-6 sm:w-[45%] md:h-[308px] lg:w-[30%] xl:w-[31%]">
                      <div className="text-center sm:text-left">
                        <div className="flex justify-center sm:justify-start">
                          <Image
                            alt="logos"
                            className=""
                            width={71}
                            height={71}
                            src={datacard.Image}
                          />
                        </div>
                        <h4 className="mt-3 block font-black text-white dark:text-white lg:text-[22px]">
                          {datacard.title}
                        </h4>
                        <p className="mt-3 text-sm font-normal text-white dark:text-white md:text-base ">
                          {datacard.description}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
