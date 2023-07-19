import Image from 'next/image'
import React from 'react'
import Carousel from '@/components/wads/carousel'
import { feartures, pillars } from "../../app/dataComponet"

export default function Feartures() {


  return (
    <>
      {/* hero */}
      <section>
        <div className="max-w-[1280px] Satoshi mx-auto">

          <h2 className="text-[#150035] lg:mb-12 md:mb-8 mb-4 lg:text-[40px] md:text-3xl sm:text-2xl text-xl text-center dark:text-white">
            Key Features
          </h2>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 ">
            {feartures?.map((datacard, idx) => {
              console.log(datacard)
              return (
                <>
                  <div className="lg:p-6 p-4 w-full h-[267px] bg-white dark:bg-card-bg dark:shadow-card shadow-cardshado festuredC rounded-[24PX] overflow-hidden">
                    <div className="">
                      <div className="inline-block rounded-xl  ml-6">
                        <Image
                         priority={true}
                          alt="logos"
                          className="dark:shadow-pillarImage rounded-xl "
                          width={100}
                          height={112}
                          src={datacard.Image}
                        />
                      </div>
                      <h4 className="block mt-1 lg:text-[22px] font-extrabold text-[#000] dark:text-white">
                        {datacard.title}

                      </h4>
                      <p className="mt-1 md:text-[16px] text-sm font-normal text-[#516371] dark:text-white ">
                        {datacard.description}
                      </p>
                    </div>

                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section >
      <section className="py-20">
        <div className="max-w-[1280px] Satoshi mx-auto">
          <p className="md:text-[16px] text-sm font-normal text-[#516371] dark:text-white ">
            Core values
          </p>
          <h2 className="text-[#150035] lg:mb-12 md:mb-8 mb-4 lg:text-[40px] md:text-3xl sm:text-2xl text-xl text-center dark:text-white">
            WAD’s Three Pillars
          </h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 ">
            {pillars?.map((data, idx) => {
              console.log(data)
              return (
                <>
                  <div className="lg:p-6 p-4 w-full">
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
                      <h4 className="block md:mt-6 mt-3 lg:text-[22px] font-extrabold text-[#000] dark:text-white">
                        {data.title}
                      </h4>
                      <p className="mt-3 md:text-[16px] text-sm font-normal text-[#516371] dark:text-white ">
                        {data.description}
                      </p>
                      <button className="wadbtn mt-6 rounded-full sm:w-[219px] w-auto inline-flex justify-center items-center gap-x-3 text-cente  text-white font-medium  focus:outline-none focus:ring-0 focus:ring-offset-0 transition py-4 px-8 dark:focus:ring-0"
                        style={{

                          background: 'linear-gradient(32deg, #F42D32 68.96%, #FCCB4C 100%)',
                          boxShadow: '0px 25px 30px 0px rgba(21, 0, 53, 0.16)'
                        }} >
                        {data.btntext}
                      </button>
                    </div>

                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section >
      <section className="pb-20">
        <div className="max-w-[1280px] Satoshi mx-auto">
          <h2 className="text-[#150035] mb-4 lg:text-[40px] md:text-3xl sm:text-2xl text-xl text-center dark:text-white">
            Where to buy WAD
          </h2>
          <p className="md:text-[16px] lg:w-1/2 lg:mb-7 mb-4 mx-auto px-4 text-center text-sm font-normal text-[#516371] dark:text-white ">
            WAD is available on over 100 exchanges globally. For help buying or storing WAD, we offer 24/7 support in WAD Telegram.
          </p>

          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 ">
            <div className="">
              <Image
               priority={true}
                width={600}
                height={800}
                alt="logos"
                className="rounded-xl w-full"
                src='/images/buywad1.svg'
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:gap-6 gap-4">
              <Image
               priority={true}
                width={400}
                height={400}
                alt="logos"
                className="rounded-xl w-full"
                src='/images/buywad5.svg'
              />
              <Image
               priority={true}
                width={400}
                height={400}
                alt="logos"
                className="rounded-xl w-full"
                src='/images/buywad4.svg'
              />  <Image
               priority={true}
                width={400}
                height={400}
                alt="logos"
                className="rounded-xl w-full"
                src='/images/buywad2.svg'
              />  <Image
               priority={true}
                width={400}
                height={400}
                alt="logos"
                className="rounded-xl w-full"
                src='/images/buywad3.svg'
              />
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
