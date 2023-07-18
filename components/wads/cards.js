import Image from 'next/image'
import React from 'react'
import Carousel from '@/components/wads/carousel'
import { tokenomics } from "../../app/dataComponet"

export default function Cards() {


  return (
    <>
      {/* hero */}
      <section>
        <div className="max-w-[1280px] Satoshi mx-auto" style={{
          borderRadius: '1084px',
          background: 'linear-gradient(180deg, #F8F8F8 0%, rgba(248, 248, 248, 0.00) 100%)'
        }}>
          {/* Grid */}
          <Carousel />
          <h2 className="text-[#150035] lg:mt-28 md:mt-16 mt-8 lg:mb-12 md:mb-8 mb-4 lg:text-[40px] md:text-3xl sm:text-2xl text-xl text-center dark:text-white">
            Tokenomics
          </h2>
          <div className="flex flex-wrap  lg:gap-10 !justify-center lg:items-center">
            {tokenomics?.map((datacard, idx) => {
              console.log(datacard)
              return (
                <>
                  <div className="lg:w-[31%] sm:w-[45%] lg:p-6 p-4 w-full bg-[url(/images/cardBg.svg)] bg-cover object-cover h-[308px] rounded-[24PX] overflow-hidden">
                    <div className="">
                      <Image
                        alt="logos"
                        className=""
                        width={71}
                        height={71}
                        src={datacard.Image}
                      />
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
      </section >
    </>
  )
}
