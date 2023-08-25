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
            className="absolute left-0 right-0 w-full"
          />

          <div className="relative">
            <Image
              src="/images/roadmap.svg"
              alt="keyFeature"
              height={10}
              width={10}
              className="md:h-[100px] h-[50px] w-[100%]"
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
          <div className="md:mt-[120px] flex w-full flex-wrap justify-center md:flex-nowrap">
            <div className="w-full lg:w-[27%]  ">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="   mt-5 h-auto w-full mb-20   overflow-hidden rounded-[24px] bg-[url(/images/Feature.svg)] bg-cover object-cover p-10    sm:h-[230px] sm:p-10 md:mb-0 lg:p-8"
              >
                <ul className="bullet">
                  <li className="bullet mb-2 mt-1 text-[11px] font-normal text-[#516371] dark:text-[#000] sm:list-disc sm:text-sm md:text-[14px] ">
                    In the first phase of inception, the concept and creation of
                    cryptocurrency came to life, and its foundational technology
                    developed.
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
                className=" mb-20 mt-10 h-auto w-full overflow-hidden rounded-[24px] bg-[url(/images/Feature.svg)] bg-cover object-cover p-10    sm:h-[230px] sm:p-10 md:mb-0 lg:p-8"
              >
                <ul className="bullet">
                  <li className="bullet mb-2 mt-1 text-[11px] font-normal text-[#516371] dark:text-[#000] sm:list-disc sm:text-sm md:text-[14px] ">
                    In the first phase of inception, the concept and creation of
                    cryptocurrency came to life, and its foundational technology
                    developed.
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
            <div className="hidden  w-[30%] lg:block ">
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
                className="-mt-10 mb-20 h-auto w-full overflow-hidden rounded-[24px] bg-[url(/images/road2.svg)] bg-cover object-cover p-10    sm:h-[230px] sm:p-10 md:mb-0 lg:p-8"
              >
                <ul className="bullet">
                  <li className="bullet mb-2 mt-1 text-[11px] font-normal text-[#516371] dark:text-[#000] sm:list-disc sm:text-sm md:text-[14px] ">
                    In the first phase of inception, the concept and creation of
                    cryptocurrency came to life, and its foundational technology
                    developed.
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
                className=" mb-20 md:mt-24 h-auto w-full overflow-hidden rounded-[24px] bg-[url(/images/road2.svg)] bg-cover object-cover p-10    sm:h-[230px] sm:p-10 md:mb-0 lg:p-8"
              >
                <ul className="bullet">
                  <li className="bullet mb-2 mt-1 text-[11px] font-normal text-[#516371] dark:text-[#000] sm:list-disc sm:text-sm md:text-[14px] ">
                    In the first phase of inception, the concept and creation of
                    cryptocurrency came to life, and its foundational technology
                    developed.
                  </li>
                </ul>
                <div className="flex items-center justify-between ">
                  <h1 className="quartertext text-end  text-[20px] font-black ">
                    Q3,2024
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
