import Image from "next/image";
import React from "react";

export default function WadCommunity() {
  return (
    <section
      className="relative flex items-center py-8 overflow-hidden md:py-12 lg:py-5"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      {/* <img src="/images/keybg.svg" alt="background"  className="absolute bottom-0" /> */}

      <img className="absolute left-0" src="/images/lineL.png" />
      <img className="absolute right-0" src="/images/lineR.png" />
      <div className="Satoshi z-40 mx-auto max-w-[1280px]">
        <div className="z-40  grid  h-auto items-center justify-items-center overflow-hidden rounded-[45px] bg-[url(/images/bgwad.png)] bg-[length:100%_100%] lg:grid-cols-2">
          <div>
            <img src="/images/comunitybg.png" alt="" className="" />
          </div>
          <div className="flex items-center h-full mb-5 md:mb-0">
            <div className="px-6 md:pl-16">
              <h2 className="text-xl font-bold text-[#ffffff] dark:text-white sm:text-2xl md:text-3xl lg:text-[40px]">
                Join $WAD Community
              </h2>
              <p className="my-4 text-sm font-normal text-white dark:text-[#8E8E8E] md:text-lg ">
                Are you ready to explore the world of limitless possibilities?
                Join the $WAD community, your gateway to winning exciting
                prizes.
              </p>
              <p className="my-4 text-sm font-normal text-white dark:text-[#8E8E8E] md:text-lg ">
                With $WAD, embark on the journey of Utility tokens, rooted in
                Dubai. Wrapped in a Raffle system, where every purchase leads
                you toward a new opportunity and victory.
              </p>
              <p className="my-4 text-sm font-normal text-white dark:text-[#8E8E8E] md:text-lg ">
                LLet’s join hands to fulfill the $WAD’s vision of shaping a
                better future, for all!
              </p>
              <button className="inline-flex items-center justify-center w-auto px-8 py-3 mt-6 font-medium text-white transition duration-300 rounded-full comunitybg gap-x-3 whitespace-nowrap hover:scale-110 focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0">
                Join the $WAD community now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
