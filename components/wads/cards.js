import Image from 'next/image'
import React from 'react'
import Carousel from '@/components/wads/carousel'
import { tokenomics } from "../../app/dataComponet"

export default function Cards() {


  return (
    <>
      {/* hero */}
      <section>
        <div className="max-w-[1280px] Satoshi relative mx-auto">
          <img src='/images/carouselbgw.png' className='absolute top-0 w-full block dark:hidden left-0 right-0'  />
          <img src='/images/carouselbgb.png' className='absolute top-0 w-full dark:block hidden left-0 right-0'  />
          {/* Grid */}
          <Carousel />
        <div className='z-30 relative'>
        <h2 className="text-[#150035]  xl:mt-28 lg:mt-16 sm:mt-5 mt-3 lg:mb-12 md:mb-8 mb-5 lg:text-[40px] md:text-3xl sm:text-2xl text-xl text-center dark:text-white">
            Tokenomics
          </h2>
          <div className="flex flex-wrap lg:gap-10 gap-4 !justify-center lg:items-center">
            {tokenomics?.map((datacard, idx) => {
              console.log(datacard)
              return (
                <>
                  <div className="lg:w-[30%] xl:w-[31%] sm:w-[45%] p-6 w-full bg-[url(/images/cardBg.svg)] bg-cover object-cover md:h-[308px] h-[250px] rounded-[24PX] overflow-hidden">
                    <div className="sm:text-left text-center">
                    <div className='flex sm:justify-start justify-center'>
                    <Image
                        alt="logos"
                        className=""
                        width={71}
                        height={71}
                        src={datacard.Image}
                      />
                    </div>
                      <h4 className="block mt-3 lg:text-[22px] font-extrabold text-white dark:text-white">
                        {datacard.title}

                      </h4>
                      <p className="mt-3 md:text-lg text-sm font-normal text-white dark:text-white ">
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
      </section >
    </>
  )
}
