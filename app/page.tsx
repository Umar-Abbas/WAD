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
import OurPartner from "@/components/wads/our-partner";

export default function Page() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className=" pt-20 dark:bg-black lg:pt-[125px]">
      {/* hero */}
      <section data-aos="fade-up" data-aos-duration="1500">
        <div className="Satoshi mx-auto max-w-[1280px]">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:gap-x-8 xl:gap-x-12">
            <div className="relative z-50 mt-[80px]">
              <p className="mb-3 text-base font-normal text-[#516371]">
                WAD ECOSYSTEM (Win All Day)
              </p>
              <h1 className="block text-2xl font-bold text-[#150035] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px]">
                Your <span className="tokenText">Token</span> To The Better
                Future.
              </h1>
              <p className="para mt-4 text-xl font-normal text-[#516371] dark:text-white w-full lg:w-[34rem]">
                Introducing WAD, the Win All Day token - Launched by the Youth
                of Dubai, aiming to unite 180 nationalities under a single
                banner.Illuminate your path towards victory by earning rewards
                on each purchase.
              </p>
              <div className="flex flex-col items-center gap-2 mt-5 sm:flex-row sm:gap-3 lg:mt-12">
                <button className="wadbtn inline-flex h-[50px] w-[195px] items-center  justify-center gap-x-3 rounded-full    text-center text-[15px] font-medium  text-white transition  duration-300 hover:scale-110 focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0  ">
                  Get WAD
                </button>
                <div
                  className=" p-[2px] sm:w-auto"
                  style={{
                    background:
                      "linear-gradient(83deg, #F42D32 68.96%, #FCCB4C 100%)",
                    borderRadius: "100px",
                  }}
                >
                  <div className="rounded-[100px] bg-[#FFF]">
                    <button className="text-cente flex h-[50px] w-[195px] items-center justify-center gap-x-3 font-medium text-white transition focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0  ">
                      <Image
                        src="/images/palybtn.svg"
                        alt="palybtn"
                        width={32}
                        height={32}
                      />
                      <span className="text-black dark:text-white">
                        Explore
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* <img
                src="/images/spiralArrow.png"
                className="pointer-events-none absolute bottom-[-70px] right-[100%]"
                data-aos="fade-up-right"
                data-aos-duration="2000"
                data-aos-delay="300"
              /> */}
              {/* <img
                src="/images/orangeCircles.png"
                className="circleRotaion pointer-events-none absolute right-0 top-[-140px]"
              /> */}
            </div>
            {/* End Col */}
            <div className="relative mt-10 h-[550px] md:mt-0">
              <img
                className="w-full h-full animateUpDown rounded-xl"
                src="/images/heroBanner.svg"
                alt="Image Description"
              />
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </section>

      <Cards />
      <AboutWad />
      <Feartures />
      <Roadmap />
      <PaymentCard />
      <Teamslider />
      <Staking />
      <WadCommunity />
    </div>
  );
}
