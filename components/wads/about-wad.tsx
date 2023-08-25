import Image from "next/image";
import React from "react";

export default function AboutWad() {
  return (
    <section
      className="relative flex items-center justify-center py-8 overflow-hidden md:mb-6 md:pt-12 lg:pb-12 lg:pt-24"
      id="about"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      <img className="absolute left-0" src="/images/lineL.png" />
      <img className="absolute right-0" src="/images/lineR.png" />
       <div className="z-40 mx-auto   md:max-w-[1280px]">
         <div className="Satoshi  z-40 grid items-center justify-items-center justify-center overflow-hidden     bg-[length:100%_100%] bg-no-repeat object-cover object-center  dark:shadow-cardabout h-auto lg:h-[670px] lg:grid-cols-2 rounded-[45px] bg-[url(/images/bgwad.png)]  ">
          <div className="mt-20 ml-20 sm:mt-10 lg:mt-0">
            <img src="/images/aboutwadbg.png" alt="" className="lg:w-[50rem] lg:h-[40rem]" />
          </div>
          <div className="items-center justify-center mb-20 lg:mb-0 lg:flex lg:mt-10">
            <div className="pl-16 pr-10 text-justify sm:px-24 md:px-32 lg:p-6">
              <div className=""> 
              <h2 className="text-xl font-bold text-[#ffffff] dark:text-white sm:text-2xl md:text-3xl lg:text-[40px]">
                About $WAD
              </h2>
              <p className="text-sm font-normal text-white lg:mt-3 lg:mb-3 dark:text-white md:text-lg ">
                WAD - Win All Day, aims to turn every single token into the
                epitome of a positive change. Its main objective is to help the
                community through a raffle system, empowering cultures, and
                giving charity to propel towards the journey of Compassion,
                Prosperity, and Financial Freedom.
               </p>
               <p className="text-sm font-normal text-white lg:mt-10 lg:mb-3 dark:text-white md:text-lg">
                In the era of digital engagement, our goal is to spread the
                message of ‘’Winning Collectively’’ by breaking the barriers of
                cultural differences. Serving our purpose to unite Dubai’s 180
                nationalities under one universal flag.
                </p>
                <p className="text-sm font-normal text-white lg:mt-10 lg:mb-3 dark:text-white md:text-lg">
                Be a part of the WAD’s utility token - Where unity and culture
                prosper!
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>
  );
}
