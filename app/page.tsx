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
import { useEffect, useState } from "react";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import OurPartner from "@/components/wads/our-partner";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    AOS.init({});
  }, []);
  const [popupVisible, setPopupVisible] = useState(false);
  
  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div className=" pt-20 dark:bg-black lg:pt-[125px]">
      {/* hero */}
      <section data-aos="fade-up" data-aos-duration="1500">
        <div className="Satoshi mx-auto max-w-[1280px]">
           <div className="flex flex-col-reverse md:grid sm:grid-cols-2 lg:gap-x-8 xl:gap-x-12">
            <div className=" relative z-50 md:mt-[80px]">
              <p className="mb-3 text-base font-normal text-[#516371]">
                $WAD ECOSYSTEM (Win All Day)
              </p>
              <h1 className="block text-2xl font-bold text-[#150035] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px]">
                Your <span className="tokenText">Token</span> To The Better
                Future
              </h1>
              <p className="para mt-4 w-full text-xl font-normal text-[#516371]  lg:w-[34rem]">
                Introducing $WAD, the Win All Day token - Launched by the Youth
                of Dubai, aiming to unite 180 nationalities under a single
                banner.Illuminate your path towards victory by earning rewards
                on each purchase.
              </p>
              <h1 className="herotext mt-3 text-[15px] font-medium">
                WAD, the Premium token at your fingertips!
              </h1>
              <div className="flex flex-col items-center gap-2 mt-5 sm:flex-row sm:gap-3 lg:mt-12">
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1-Ct2UDzdme31bNwjdD93elMatNfao9-uE5PUHqI6ysQ/edit?usp=sharing"
                >
                  <button className="wadbtn inline-flex h-[50px] w-[195px] items-center  justify-center gap-x-3 rounded-full    text-center text-[15px] font-medium  text-white transition  duration-300 hover:scale-110 focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0  ">
                   $WAD WhitePaper 
                  </button>
                </Link>
                <div
                  className=" p-[2px] sm:w-auto"
                  style={{
                    background:
                      "linear-gradient(83deg, #F42D32 68.96%, #FCCB4C 100%)",
                    borderRadius: "100px",
                  }}
                >
                  <div
                    className="rounded-[100px] bg-[#FFF] dark:bg-[#000]"
                    onClick={openPopup}
                  >
                    <button className="flex h-[50px] w-[195px] items-center justify-center gap-x-3 text-center font-medium text-white transition focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0  ">
                      <Image
                        src="/images/palybtn.svg"
                        alt="palybtn"
                        width={32}
                        height={32}
                      />
                      <span className="text-black text-center dark:text-[#FFF]">Explore</span>
                    </button>
                  </div>
                </div>
              </div>
              </div>
             <div className="relative lg:-ml-10 mt-20 h-[350px] md:h-[550px] md:mt-[80px]">
              <img
                className="w-full h-full animateUpDown rounded-xl"
                src="/images/heroBanner.svg"
                alt="Image Description"
              />
            </div>
           </div>
         </div>
       
      </section>
      <div className="">
          {popupVisible && (
            <div className="fixed inset-0 !z-[99999]  bg-[#3a3939f1]" onClick={closePopup}>
              <div className="flex items-center justify-center min-h-screen">
                <div className="relative z-[999] mx-auto  rounded-lg bg-white     shadow-lg lg:w-[800px]">
                 
                  <div className="p-4 pb-6 modal-body">
                  <video controls width="100%" autoPlay>
      <source src="/images/videoexplore.mp4" type="video/mp4" />
      Sorry, your browser doesnt support embedded videos.
    </video>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
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
