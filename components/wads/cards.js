import Image from "next/image";
import React from "react";
import { useState } from "react";
import Carousel from "@/components/wads/carousel";
import { tokenomics } from "../../app/dataComponet";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function Cards() {
  const [hoveredBox, setHoveredBox] = useState(null);
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const data = [
    {
      stats: "Eco System",
      usage: "25%",
      coin: "350,000,000",
    },
    {
      stats: "Exchange Listing",
      usage: "10%",
      coin: " 350,000,000 ",
    },
    {
      stats: "Reserved",
      usage: "5%",
      coin: " 350,000,000",
    },
    {
      stats: "Team Wallet",
      usage: "5%",
      coin: "350,000,000",
    },
    {
      stats: "Liquidity/Token",
      usage: "55%",
      coin: "350,000,000",
    },
    {
      stats: "Total",
      usage: "100%",
      coin: "350,000,000",
    },
   
  ];

  const options = {
    chart: {
      type: "donut",
      id: "apexchart-example",
      events: {
        dataPointMouseEnter: function (event, chartContext, config) {
          setHoveredLabel(config.dataPointIndex);
        },
      },
    },
    xaxis: {
      categories: [],
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: [],
      },
    },
    dataLabels: {
      enabled: true,
    },
    labels: [
      "Eco System",
      "Exchange Listing",
      "Reserved",
      "Team Wallet",
      "Liquidity/Token",
    ],
    legend: {
      show: false,
    },
  };
  const series = [25, 10, 5, 5, 55];
  return (
    <>
      {/* hero */}
       
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
      <img src="/images/backgroundtoken.svg" alt="background"  className="absolute left-0 right-0 w-full 2xl:-top-[8%]" />
        <div className="Satoshi  relative mx-auto max-w-[1280px]">
          <div
            className="relative z-30 pt-3 sm:pt-5 lg:pt-16 xl:pt-4"
            id="tokenomics"
          >
            <div className="mb-5 text-center md:mb-8 md:text-3xl lg:mb-12">
              <div className="relative flex flex-col items-center justify-center">
                <Image
                  src="/images/tokennomicsh.svg"
                  alt="keyFeature"
                  height={10}
                  width={10}
                  className="h-[72px] w-[100%]"
                />
                <h2 className="absolute top-[23%] mb-4  text-center text-xl font-bold text-[#150035] dark:text-white sm:text-2xl md:mb-8 md:text-3xl lg:mb-12 lg:text-[48px]">
                  Tokenomics
                </h2>
                <Image
                  src="/images/lineC.svg"
                  alt="keyFeature"
                  height={10}
                  width={10}
                  className="mt-2 h-[30px] w-[100%]"
                />
              </div>
              <p className="mt-5 text-lg font-bold para tokenomicsbg dark:text-white">
                Explore the financial DNA of Cryptocurrency!
              </p>
            </div>
            <div className="mt-[73px]">
              <div className="flex flex-col items-center justify-between lg:flex-row ">
                <div className="grid grid-cols-2 gap-2 ">
                  {data.map((item, index) => (
                    <div
                      className={` lg:h-[116px] sm:w-[250px] p-[2px] ${
                        hoveredLabel === index ? "hovered-div" : ""
                      }`}
                      key={index}
                      style={{
                        background:
                          "linear-gradient(74deg, rgb(247 6 14 / 14%) 0%, rgb(252, 203, 76) 100%)",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="rounded-[20px] bg-[#FFF] p-5">
                        <div className="">
                          <h1 className=" block font-black text-[rgb(0,0,0)] lg:text-[16px]">
                            {item.stats}
                          </h1>
                          <div className="flex items-center gap-2">
                            <h1 className="tokenomicsbg block font-black   lg:text-[32px]">
                              {item.usage}
                            </h1>
                            <span className="text-sm  font-normal text-[#516371]">
                              ({item.coin})
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="">
                  <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="300"
                    height="300"
                  />
                </div>
                <div>
                  <div className="grid justify-center grid-cols-3 gap-5 mt-5 lg:block md:grid-cols-5 lg:space-y-4">
                    <div>
                      <h1 className="block font-bold uppercase text-[#516371] dark:text-white lg:text-[14px]">
                        Token Name
                      </h1>
                      <h1 className=" block font-black text-[#000] dark:text-white lg:text-[20px]">
                        Win All Day
                      </h1>
                    </div>
                    <div>
                    <h1 className="block font-bold uppercase text-[#516371] dark:text-white lg:text-[14px]">
                        Token Symbol
                      </h1>
                      <h1 className=" block font-black text-[#000] dark:text-white lg:text-[20px]">
                        WAD{" "}
                      </h1>
                    </div>
                    <div>
                    <h1 className="block font-bold uppercase text-[#516371] dark:text-white lg:text-[14px]">
                        Token Supply
                      </h1>
                      <h1 className=" block font-black text-[#000] dark:text-white lg:text-[20px]">
                        10,000,00 WAD
                      </h1>
                    </div>
                    <div>
                    <h1 className="block font-bold uppercase text-[#516371] dark:text-white lg:text-[14px]">
                        BLockChain Network
                      </h1>
                      <h1 className=" block font-black text-[#000] dark:text-white lg:text-[20px]">
                        Binance Smart Chain (Bsc)
                      </h1>
                    </div>
                    <div>
                    <h1 className="block font-bold uppercase text-[#516371] dark:text-white lg:text-[14px]">
                        Audit By
                      </h1>
                      <h1 className=" block font-black text-[#000] dark:text-white lg:text-[20px]">
                        Certix
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        <div className="Satoshi relative mx-auto max-w-[1280px]">
          <img
            src="/images/carouselbgw.png"
            className="absolute top-0 left-0 right-0 block w-full dark:hidden"
          />
          <img
            src="/images/carouselbgb.png"
            className="absolute top-0 left-0 right-0 hidden w-full dark:block"
          />
           <Carousel />
          <div
            className="relative z-30 pt-3 sm:pt-5 lg:pt-16 xl:pt-28"
            id="tokenomics"
          >
            <div className="mb-5 text-center md:mb-8 md:text-3xl lg:mb-12">
              <h2 className="text-xl font-bold text-[#150035] dark:text-white sm:text-2xl  lg:text-[40px]">
                Tokenomics
              </h2>
              <p className="para mt-3 text-lg font-bold text-[#000] dark:text-white">
                Explore the Financial DNA of Cryptocurrency!
              </p>
            </div>
            <div className="">
              <div className="flex items-center justify-between">
                <div className="grid grid-cols-2 gap-2 ">
                  {data.map((item, index) => (
                    <div
                      className={` h-auto w-full    p-[2px] ${
                        hoveredLabel === index ? "hovered-div" : ""
                      }`}
                      key={index}
                      style={{
                        background:
                          "linear-gradient(74deg, rgb(247 6 14 / 14%) 0%, rgb(252, 203, 76) 100%)",
                          borderRadius:"20px"
                       }}
                    >
                      <div className="bg-[#FFF] rounded-[20px] p-5">
                      <div className="">

                        <h1 className=" block font-black text-[rgb(0,0,0)]  dark:text-white lg:text-[16px]">
                          {item.stats}
                        </h1>
                        <div>
                          <h1 className="tokenomicsbg block font-black   lg:text-[32px]">
                            {item.usage}
                          </h1>
                        </div>
                      </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="300"
                    height="300"
                  />
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <h1 className="block font-black uppercase text-[#646464] dark:text-white lg:text-[14px]">
                        Token Name
                      </h1>
                      <h1 className=" block font-black text-[#000] dark:text-white lg:text-[18px]">
                        Win All Day
                      </h1>
                    </div>
                    <div>
                      <h1 className="block font-black uppercase text-[#646464] dark:text-white lg:text-[14px]">
                        Token Symbol
                      </h1>
                      <h1 className=" block font-black text-[#000] dark:text-white lg:text-[18px]">
                        WAD{" "}
                      </h1>
                    </div>
                    <div>
                      <h1 className="block font-black uppercase text-[#646464] dark:text-white lg:text-[14px]">
                        Token Supply
                      </h1>
                      <h1 className=" block font-black text-[#000] dark:text-white lg:text-[18px]">
                        10,000,00 WAD
                      </h1>
                    </div>
                    <div>
                      <h1 className="block font-black uppercase text-[#646464] dark:text-white lg:text-[14px]">
                        BLockChain Network
                      </h1>
                      <h1 className=" block font-black text-[#000] dark:text-white lg:text-[18px]">
                        Binance Smart Chain (Bsc)
                      </h1>
                    </div>
                    <div>
                      <h1 className="block font-black uppercase text-[#646464] dark:text-white lg:text-[14px]">
                        Audit By
                      </h1>
                      <h1 className=" block font-black text-[#000] dark:text-white lg:text-[18px]">
                        Certix
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
