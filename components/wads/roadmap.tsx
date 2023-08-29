import Image from "next/image";
import React from "react";

export default function Roadmap() {
  return (
    <div className="">
      <section>
        <div className="Satoshi relative z-40 mx-auto max-w-[1280px]">
          <img
            src="/images/roadmapb.svg"
            alt="background"
            className="absolute left-0 right-0 w-full "
          />

          <div className="relative">
            <Image
              src="/images/roadmap.svg"
              alt="keyFeature"
              height={10}
              width={10}
              className="h-[50px] w-[100%] md:h-[100px]"
            />
            <h2 className="absolute left-[40%] top-[18%] mb-4 text-center text-xl font-bold text-[#150035] dark:text-white sm:text-2xl md:mb-8 md:text-3xl lg:mb-12 lg:text-[48px]">
              Road Map
            </h2>
            <Image
              src="/images/lineC.svg"
              alt="keyFeature"
              height={10}
              width={10}
              className="h-[30px] w-[100%]"
            />
          </div>
          <div className="flex w-full flex-wrap justify-center md:mt-[120px] md:flex-nowrap">
            <div className="w-full lg:w-[27%]  ">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="   mb-20 mt-5 h-auto w-full   overflow-hidden rounded-[24px] bg-[url(/images/Feature.svg)] bg-cover object-cover p-10 dark:bg-[url(/images/quarter2bg.svg)]    sm:h-[230px] sm:p-10 md:mb-0 lg:p-8"
              >
                <ul className="bullet">
                  <li className="bullet mb-2 mt-1 text-[11px] font-normal text-[#516371] dark:text-[#8E8E8E] sm:list-disc sm:text-sm md:text-[14px] ">
                    In the second phase, the launch of utility tokens - $WAD,
                    Win All Day occurs; offering the raffle system to the users
                    to get a chance to win rewards on each purchase.
                  </li>
                </ul>
                <div className="flex items-center justify-between ">
                  <h1 className="quartertext text-end  text-[20px] font-black ">
                    Q4,2023
                  </h1>
                  <h1 className="roadmaptext text-end  text-[40px] font-black ">
                    2
                  </h1>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                className=" mb-20 mt-10 h-auto w-full overflow-hidden rounded-[24px] bg-[url(/images/Feature.svg)] bg-cover object-cover p-10 dark:bg-[url(/images/quarter2bg.svg)]    sm:h-[255px] sm:p-10 md:mb-0 lg:p-8"
              >
                <ul className="bullet">
                  <li className="bullet  text-[11px] font-normal text-[#516371] dark:text-[#8E8E8E] sm:list-disc sm:text-sm md:text-[14px] ">
                    In the third phase, the $WAD token enters the stage of hype
                    and rapid growth, resulting in peak engagement of the
                    users.The raffle system is encouraging users to actively
                    participate and anticipate seeking winning opportunities.
                  </li>
                </ul>
                <div className="flex items-center justify-between ">
                  <h1 className="quartertext text-end  text-[20px] font-black ">
                    Q1,2024
                  </h1>
                  <h1 className="roadmaptext text-end  text-[40px] font-black ">
                    3
                  </h1>
                </div>
              </div>
            </div>
            <div className="hidden   w-[30%] lg:block ">
              <Image
                src="/images/roadmapim.svg"
                alt="keyFeature"
                height={10}
                width={10}
                className="w-full h-full"
              />
            </div>

            <div className="w-full lg:w-[27%]  ">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="-mt-10 mb-20 h-auto w-full overflow-hidden rounded-[24px] bg-[url(/images/road2.svg)] bg-cover object-cover p-10 dark:bg-[url(/images/quarter1bg.svg)]    sm:h-[250px] sm:p-10 md:mb-0 lg:p-8"
              >
                <ul className="bullet">
                  <li className="bullet mb-2 mt-1 text-[11px] font-normal text-[#516371] dark:text-[#8E8E8E] sm:list-disc sm:text-sm md:text-[14px] ">
                    In the first phase of inception, the concept and creation of
                    utility tokens came to life, and its foundational technology
                    has been introduced and developed.
                  </li>
                </ul>
                <div className="flex items-center justify-between ">
                  <h1 className="quartertext text-end  text-[20px] font-black ">
                    Q3,2023
                  </h1>
                  <h1 className="roadmaptext text-end  text-[40px] font-black ">
                    1
                  </h1>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="  mb-5 h-auto w-full overflow-hidden rounded-[24px] bg-[url(/images/road2.svg)] bg-cover object-cover p-10 dark:bg-[url(/images/quarter1bg.svg)] sm:h-[250px]    sm:p-10 md:mb-0 md:mt-24 lg:p-8"
              >
                <ul className="bullet">
                  <li className="bullet text-[11px] font-normal text-[#516371] dark:text-[#8E8E8E] sm:list-disc sm:text-sm md:text-[14px] ">
                    In the fourth phase, the impact $WAD token has is far beyond
                    winning only. Token purchasing in the Raffle system impacts
                    society for good by supporting the charity to serve a bigger
                    purpose in various causes.
                  </li>
                </ul>
                <div className="flex items-center justify-between ">
                  <h1 className="quartertext text-end  text-[20px] font-black ">
                    Q2,2024
                  </h1>
                  <h1 className="roadmaptext text-end  text-[40px] font-black ">
                    4
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
