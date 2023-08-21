"use client";
import AboutWad from "@/components/wads/about-wad";
import Cards from "@/components/wads/cards";
import Feartures from "@/components/wads/features";
import PaymentCard from "@/components/wads/payment-card";
import Roadmap from "@/components/wads/roadmap";
import Teamslider from "@/components/wads/teamslider";
import Staking from "@/components/wads/staking";
import WadCommunity from "@/components/wads/wad-community";
import Image from "next/image";
import { useEffect } from "react";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="px-4 pt-20 bg-white dark:bg-black lg:pt-36">
      {/* hero */}
      <section data-aos="fade-up" data-aos-duration="1500">
        <div className="Satoshi mx-auto max-w-[1280px]">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 sm:items-center lg:gap-x-8 xl:gap-x-12">
            <div className="relative z-50">
              <p className="mb-4 text-lg font-normal text-[#516371]">
                WAD Ecosystem
              </p>
              <h1 className="block text-2xl font-bold text-[#150035] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px]">
                Your Token To The Better Future
              </h1>
              <p className="para mt-3 text-lg font-bold text-[#000] dark:text-white">
                Empower the ecosystem with transformative utility tokens for all
              </p>
              <div className="flex flex-col items-center gap-2 mt-5 sm:flex-row sm:gap-3 lg:mt-8">
                <button className="wadbtn text-cente inline-flex  w-auto items-center justify-center gap-x-3 rounded-full px-8 py-4 font-medium  text-white transition  duration-300 hover:scale-110 focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0 sm:w-[195px]">
                  Get WAD
                </button>
                <div className="w-full sm:w-auto">
                  <button className="flex items-center justify-center w-full px-8 py-4 font-medium text-white transition text-cente gap-x-3 focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0 sm:w-auto">
                    <Image
                      src="/images/palybtn.svg"
                      alt="palybtn"
                      width={54}
                      height={54}
                    />
                    <span className="text-black dark:text-white">Explore</span>
                  </button>
                </div>
              </div>
              <img
                src="/images/spiralArrow.png"
                className="pointer-events-none absolute bottom-[-70px] right-[100%]"
                data-aos="fade-up-right"
                data-aos-duration="2000"
                data-aos-delay="300"
              />
              <img
                src="/images/orangeCircles.png"
                className="circleRotaion pointer-events-none absolute right-0 top-[-70px]"
              />
            </div>
            {/* End Col */}
            <div className="relative mt-10 h-[550px] md:mt-0">
              <img
                className="w-full h-full animateUpDown rounded-xl"
                src="/images/heroBanner.png"
                alt="Image Description"
              />
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </section>
      <Feartures />
      <Cards />
      <AboutWad />
   
      <PaymentCard />
      <Teamslider />
      <Staking />
      <WadCommunity />
      <Roadmap />
    </div>
  );
}
