import Image from "next/image";
import React from "react";

export default function Roadmap() {
  return (
    <div>
      <section>
        <div className="Satoshi z-40 mx-auto max-w-[1280px]">
          <div className="flex w-full flex-wrap md:flex-nowrap">
            <div className="w-1/2  lg:w-[27%]">
              <h4 className="textleanir text-center text-2xl sm:text-[30px] lg:hidden block">Launch</h4>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="festuredC mb-4 h-auto sm:h-[220px] w-full overflow-hidden rounded-[24px] bg-white p-3 sm:p-10 shadow-mapcard dark:bg-card-bg dark:shadow-card md:mb-0 lg:p-8"
              >
                <ul>
                  <li className="mb-2 mt-1 sm:list-disc text-[11px] sm:text-sm font-normal text-[#000] dark:text-white md:text-[16px] ">
                    In the first phase of inception, the concept and creation of
                    cryptocurrency came to life, and its foundational technology
                    developed.
                  </li>
                </ul>
              </div>
              <h4 className="textleanir text-center text-2xl sm:text-[30px] lg:hidden block">Phase 3</h4>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="festuredC h-auto sm:h-[220px] w-full overflow-hidden rounded-[24PX] bg-white p-3 sm:p-10 shadow-mapcard dark:bg-card-bg dark:shadow-card md:mt-10 lg:mt-28 lg:p-8"
              >
                <ul>
                  <li className="mb-2 mt-1 sm:list-disc text-[11px] sm:text-sm font-normal text-[#000] dark:text-white md:text-[16px] ">
                    In the third phase, cryptocurrency enters the stage of media
                    hype and rapid growth, resulting in investors buying tokens,
                    increasing their price and market capitalization.
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden h-10 w-[45%] lg:block">
              <div className="relative">
                <img
                  src="/images/arrowrightl.svg"
                  className="absolute left-5 top-4"
                />

                <h2 className="textleanir text-center text-[40px]">Launch</h2>
                <img src="/images/arrowdownM.svg" className="mx-auto"  data-aos="fade-down" />
              </div>
              <div className="relative">
                <img
                  src="/images/arrowrightl.svg"
                  className="absolute right-5 top-4 rotate-180"
                  
                />
                <h2 className="textleanir text-center text-[40px]">Phase 2</h2>
                <img src="/images/arrowdownM.svg" className="mx-auto"   data-aos="fade-down" />
              </div>
              <div className="relative">
                <img
                  src="/images/arrowrightl.svg"
                  className="absolute left-5 top-4"
                />

                <h2 className="textleanir text-center text-[40px]">Phase 3</h2>
                <img src="/images/arrowdownM.svg" className="mx-auto"  data-aos="fade-down" />
              </div>
              <div className="relative">
                <img
                  src="/images/arrowrightl.svg"
                  className="absolute right-5 top-4 rotate-180"
                />
                <h2 className="textleanir text-center text-[40px]">Phase 4</h2>
              </div>
            </div>
            <div className="w-1/2 lg:w-[27%]">
            <h4 className="textleanir text-center text-2xl sm:text-[30px] lg:hidden block">Phase 2</h4>
              <div  data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="100" className="festuredC mb-4  h-auto sm:h-[220px] w-full overflow-hidden rounded-[24PX] bg-white p-3 sm:p-10 shadow-mapcard dark:bg-card-bg dark:shadow-card md:mb-0 md:mt-14 lg:mt-28 lg:p-8">
                <ul>
                  <li className="mb-2 mt-1 text-[11px] sm:list-disc sm:text-sm font-normal text-[#000] dark:text-white md:text-[16px] ">
                    In the second phase, the launch of cryptocurrency via ICO,
                    also known as the Initial coin offering occurs, and to
                    generate initial funds for marketing and development
                    investors purchase the tokens.
                  </li>
                </ul>
              </div>
              
              <h4 className="textleanir text-center text-2xl sm:text-[30px] lg:hidden block">Phase 4</h4>
              <div  data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="100" className="festuredC h-auto sm:h-[220px] w-full overflow-hidden rounded-[24PX] bg-white p-3 sm:p-10  shadow-mapcard dark:bg-card-bg dark:shadow-card md:mt-14 lg:mt-28 lg:p-8">
                <ul>
                  <li className="mb-2 mt-1 sm:list-disc text-[11px] sm:text-sm font-normal text-[#000] dark:text-white md:text-[16px] ">
                    In the fourth phase, the price fluctuation of crypto becomes
                    less extreme, resulting in a stabilized market. With the
                    help of well-developed technology, cryptocurrency integrates
                    successfully into diverse ecosystems and industries.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
