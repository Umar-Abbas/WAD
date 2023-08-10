import Image from "next/image";
import React from "react";
import Carousel from "@/components/wads/carousel";
import { feartures, pillars } from "../../app/dataComponet";

export default function Feartures() {
  return (
    <>
      {/* hero */}
      <section
        className="md:pb-6 md:pt-12 lg:pb-12 lg:pt-24"
        id="keyFeatures"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        <div className="Satoshi mx-auto max-w-[1280px]">
          <h2 className="mb-4 text-center text-xl font-bold text-[#150035] dark:text-white sm:text-2xl md:mb-8 md:text-3xl lg:mb-12 lg:text-[40px]">
            Key Features
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 ">
            {feartures?.map((datacard, idx) => {
              console.log(datacard);
              return (
                <>
                  <div
                    data-aos="flip-up"
                    data-aos-duration="1000"
                    className="festuredC h-[325px] w-full overflow-hidden rounded-[24PX] bg-white p-4 shadow-cardshado dark:bg-card-bg dark:shadow-card lg:p-6"
                  >
                    <div className="">
                      <div className="ml-6 inline-block  rounded-xl">
                        <Image
                          priority={true}
                          alt="logos"
                          className="rounded-xl dark:shadow-pillarImage "
                          width={100}
                          height={112}
                          src={datacard.Image}
                        />
                      </div>
                      <h4 className="mt-1 block font-black text-[#000] dark:text-white lg:text-[22px]">
                        {datacard.title}
                      </h4>
                      <p className="mt-1 text-sm font-normal text-[#516371] dark:text-white md:text-base ">
                        {datacard.description}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section
        className="py-20"
        id="coreValues"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        <div className="Satoshi mx-auto max-w-[1280px]">
          <div className="mx-auto text-center">
            <p className="mb-4 text-sm font-normal text-[#516371] dark:text-white md:text-lg">
              Our Core Values
            </p>
            <h2 className="mb-4 text-xl font-bold text-[#150035] dark:text-white sm:text-2xl md:mb-8 md:text-3xl lg:mb-12 lg:text-[40px]">
              Three Pillars of Excellence!
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 ">
            {pillars?.map((data, idx) => {
              console.log(data);
              return (
                <>
                  <div
                    className="w-full p-4 lg:p-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                  >
                    <div className="">
                      <div className="inline-block rounded-xl dark:shadow-pillarImage">
                        <Image
                          priority={true}
                          alt="logos"
                          className="rounded-xl "
                          width={100}
                          height={112}
                          src={data.Image}
                        />
                      </div>
                      <h4 className="mt-3 block font-bold text-[#000] dark:text-white md:mt-6 lg:text-[22px]">
                        {data.title}
                      </h4>
                      <p className="mt-3 h-[150px] text-sm font-normal text-[#516371] dark:text-white md:text-[16px]">
                        {data.description}
                      </p>
                      <button
                        className="wadbtn hover:scale-110 duration-300 mt-6 inline-flex w-auto items-center justify-center gap-x-3 rounded-full px-4 py-4 text-center  text-sm font-medium  text-white transition focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0 sm:w-[250px]"
                        style={{
                          background:
                            "linear-gradient(32deg, #F42D32 68.96%, #FCCB4C 100%)",
                          boxShadow: "0px 25px 30px 0px rgba(21, 0, 53, 0.16)",
                        }}
                      >
                        {data.btntext}
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section
        className="pb-20"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        <div className="Satoshi mx-auto max-w-[1280px]">
          <h2 className="mb-4 text-center text-xl font-bold text-[#150035] dark:text-white sm:text-2xl md:text-3xl lg:text-[40px]">
            Where to buy WAD
          </h2>
          <p className="mx-auto mb-4 px-4 text-center text-sm font-normal text-[#516371] dark:text-white md:text-[16px] lg:mb-7 lg:w-1/2 ">
            WAD is now available across 100+ Global Exchanges. <br />
            Need help buying WAD? Our assistance never sleeps! We are offering
            24/7 services on WAD Telegram
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6 ">
            <div
              className=""
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <Image
                priority={true}
                width={600}
                height={800}
                alt="logos"
                className="w-full rounded-xl"
                src="/images/buywad1.svg"
              />
            </div>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
              <Image
                priority={true}
                width={400}
                height={400}
                alt="logos"
                className="w-full rounded-xl"
                src="/images/buywad5.svg"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="100"
              />
              <Image
                priority={true}
                width={400}
                height={400}
                alt="logos"
                className="w-full rounded-xl"
                src="/images/buywad4.svg"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
              />{" "}
              <Image
                priority={true}
                width={400}
                height={400}
                alt="logos"
                className="w-full rounded-xl"
                src="/images/buywad2.svg"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300"
              />{" "}
              <Image
                priority={true}
                width={400}
                height={400}
                alt="logos"
                className="w-full rounded-xl"
                src="/images/buywad3.svg"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="400"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
