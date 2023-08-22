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
    },
    {
      stats: "Exchange Listing",
      usage: "10%",
    },
    {
      stats: "Reserved",
      usage: "5%",
    },
    {
      stats: "Team Wallet",
      usage: "5%",
    },
    {
      stats: "Liquidity/Token",
      usage: "55%",
    },
    {
      stats: "Total",
      usage: "100%",
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
        <div className="Satoshi relative mx-auto max-w-[1280px]">
          <img
            src="/images/carouselbgw.png"
            className="absolute top-0 left-0 right-0 block w-full dark:hidden"
          />
          <img
            src="/images/carouselbgb.png"
            className="absolute top-0 left-0 right-0 hidden w-full dark:block"
          />
          {/* Grid */}
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
            <div className="flex flex-wrap !justify-center gap-4 lg:items-center lg:gap-10">
              <div className="grid items-center justify-center grid-cols-3 gap-0">
                <div className="grid grid-cols-2 gap-2 ">
                  {data.map((item, index) => (
                    <div
                      className={`rounded-[10px] bg-[url(/images/cardBg.svg)] bg-cover object-cover p-4 ${
                        hoveredLabel === index ? "hovered-div" : ""
                      }`}
                      key={index}
                    >
                      <div className="">
                        <h1 className=" block font-black text-white dark:text-white lg:text-[20px]">
                          {item.stats}
                        </h1>
                        <h1 className="block font-black text-white dark:text-white lg:text-[20px]">
                          {item.usage}
                        </h1>
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
      </section>
    </>
  );
}
