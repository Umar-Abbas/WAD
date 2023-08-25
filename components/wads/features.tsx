import Image from "next/image";
import React from "react";
import Carousel from "@/components/wads/carousel";
import { feartures, pillars, tokenomics } from "../../app/dataComponet";

export default function Feartures() {
  return (
    <>
      {/* hero */}
      <section
        className="relative mx-auto max-w-[1440px] md:pb-6 md:pt-12 lg:pb-12 lg:pt-24"
        id="keyFeatures"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        <img
          src="/images/keybg2.svg"
          alt="background"
          className="absolute -right-[10%] bottom-0 top-0 w-full"
        />

        <img
          src="/images/keybg.svg"
          alt="background"
          className="absolute -top-[40%] right-[35%] w-full"
        />

        <div className="Satoshi mx-auto max-w-[1280px]">
          <div className="relative">
            <Image
              src="/images/keyFeature.svg"
              alt="keyFeature"
              height={10}
              width={10}
              className="h-[100px] w-[100%]"
            />
            <h2 className="absolute left-[34%] top-[21%] mb-4 text-center text-xl font-bold text-[#150035] dark:text-white sm:text-2xl md:mb-8 md:text-3xl lg:mb-12 lg:text-[64px]">
              Key Features
            </h2>
            <Image
              src="/images/lineC.svg"
              alt="keyFeature"
              height={10}
              width={10}
              className="h-[30px] w-[100%]"
            />
          </div>
          <div className="mt-[102px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 ">
            {feartures?.map((datacard, idx) => {
              console.log(datacard);
              return (
                <>
                  <div
                    data-aos="flip-up"
                    data-aos-duration="1000"
                    className="  h-[400px] w-full overflow-hidden rounded-[20px] bg-[url(/images/Feature.svg)] bg-cover object-cover p-4  lg:p-6"
                  >
                    <div className="px-[16px]">
                      <div className="inline-block rounded-xl px-[40px] pb-[10px] pt-[20px]">
                        <Image
                          priority={true}
                          alt="logos"
                          className="rounded-xl dark:shadow-pillarImage "
                          width={100}
                          height={112}
                          src={datacard.Image}
                        />
                      </div>
                      <h4 className="mb-[5px] mt-1 block  font-black text-[#000]  lg:text-[22px]">
                        {datacard.title}
                      </h4>
                      <p className="mt-1 text-sm font-normal leading-[24px] text-[#516371]  md:text-sm ">
                        {datacard.description}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {feartures?.map((datacard, idx) => {
                return (
                  <>
                    <div  data-aos="flip-left" data-aos-duration="2000" className="h-[250px] overflow-hidden rounded-[24PX] bg-[url(/images/cardBg.svg)] bg-cover object-cover p-6 sm:w-[45%] md:h-[308px] lg:w-[30%] xl:w-[31%]">
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
            </div> */}
        </div>
      </section>
      <section
        className="py-20"
        id="coreValues"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        <img
          src="/images/threepilarbg.svg"
          alt="background"
          className="absolute bottom-0 left-0 right-0 w-full -top-40"
        />
        <div className="Satoshi mx-auto max-w-[1280px]">
          <div className="mx-auto text-center">
            <div className="relative flex flex-col items-center justify-center">
              <Image
                src="/images/threepillar.svg"
                alt="keyFeature"
                height={10}
                width={10}
                className="h-[60px] w-[100%]"
              />
              <h2 className="absolute top-[23%] mb-4  text-center text-xl font-bold text-[#150035] dark:text-white sm:text-2xl md:mb-8 md:text-3xl lg:mb-12 lg:text-[48px]">
                $WAD Three Pillars
              </h2>
              <Image
                src="/images/lineC.svg"
                alt="keyFeature"
                height={10}
                width={10}
                className="mt-2 h-[30px] w-[100%]"
              />
            </div>
          </div>
          <div className="mt-[50px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 ">
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
                        className="wadbtn mt-6 inline-flex w-auto items-center justify-center gap-x-3 rounded-full px-4 py-4 text-center text-sm font-medium  text-white transition  duration-300 hover:scale-110 focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0 sm:w-[250px]"
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
        <div className="Satoshi mx-auto max-w-[1280px] mt-[100px]">
        <div className="relative flex flex-col items-center justify-center">
              <Image
                src="/images/buyWAD.svg"
                alt="keyFeature"
                height={10}
                width={10}
                className="h-[70px] w-[100%]"
              />
              <h2 className="absolute top-[10%] mb-4  text-center text-xl font-bold text-[#150035] dark:text-white sm:text-2xl md:mb-8 md:text-3xl lg:mb-12 lg:text-[48px]">
              Where to buy $WAD
              </h2>
              <Image
                src="/images/lineC.svg"
                alt="keyFeature"
                height={10}
                width={10}
                className="mt-2 h-[30px] w-[100%]"
              />
            </div>
          <p className="mx-auto mb-4 px-4 text-center text-sm font-normal text-[#516371] dark:text-white md:text-[16px] lg:mb-7 lg:w-1/2 ">
            $WAD is now available across 100+ Global Exchanges. <br />
            Need help buying $WAD? Our assistance never sleeps! We are offering
            24/7 services on $WAD Telegram
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
