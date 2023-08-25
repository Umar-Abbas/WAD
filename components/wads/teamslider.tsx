"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { wadteams, settings2 } from "../../app/dataComponet";
import Link from "next/link";

export default function Teamslider() {
  return (
    <>
      <section
        className="py-10 slider-section lg:py-20"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        <img
          src="/images/wadteambg.svg"
          alt="background"
          className="absolute left-0 right-0 w-full "
        />
        <div className="Satoshi mx-auto max-w-[1280px]">
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/images/wadteam.svg"
              alt="keyFeature"
              height={10}
              width={10}
              className="h-[32px] w-[100%] md:h-[72px]"
            />
            <h2 className="absolute mb-4 text-center  text-xl font-bold text-[#150035] dark:text-white sm:text-2xl md:top-[23%] md:mb-8 md:text-3xl lg:mb-12 lg:text-[48px]">
              $WAD Team
            </h2>
            <Image
              src="/images/lineC.svg"
              alt="keyFeature"
              height={10}
              width={10}
              className="mt-2 h-[23px] w-[100%] md:h-[30px]"
            />
          </div>
          <Slider className="" {...settings2}>
            {wadteams?.map((teamscard, idx) => {
              return (
                <div className="mt-[50px] p-4" key={idx}>
                  <div className="relative flex h-[470px] w-full flex-col items-center justify-center rounded-[20px] bg-cover  object-cover px-4 lg:py-5  2xl:px-8">
                    <Image
                      src="/images/teambg.svg"
                      alt="img"
                      width={10}
                      height={10}
                      className="absolute w-full h-full"
                    />
                    <div className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#f98c41]">
                      <Image
                        alt="logos"
                        className="rounded-xl"
                        width={100}
                        height={112}
                        src={teamscard.Image}
                      />
                    </div>
                    <h4 className="relative mt-3 block font-black text-[#000] md:mt-6 lg:text-lg">
                      {teamscard.title}
                    </h4>
                    <p className="dd relative mt-3  text-sm font-normal text-[#000] md:text-xl">
                      {teamscard.creater}
                    </p>
                    <p className="relative mt-3 text-center text-sm font-normal text-[#516371] md:text-[16px] lg:text-sm 2xl:px-14 ">
                      {teamscard.description}
                    </p>
                    <div className="relative flex justify-center gap-3 mt-3">
                      <div>
                        <Link href={""}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 48 48"
                            fill="none"
                          >
                            <rect
                              width="48"
                              height="48"
                              rx="24"
                              fill="url(#paint0_linear_162_4206)"
                            />
                            <path
                              d="M37.3126 15.6013C36.309 16.0459 35.2294 16.3425 34.0908 16.4828C35.2484 15.7955 36.139 14.6993 36.557 13.4043C35.4737 14.0393 34.2736 14.5059 32.9968 14.7517C31.9772 13.6706 30.523 13 28.9117 13C25.8165 13 23.3077 15.4868 23.3077 18.5531C23.3077 18.987 23.3586 19.4096 23.4541 19.82C18.7977 19.5863 14.6678 17.3727 11.9049 14.0135C11.4194 14.8343 11.1463 15.7955 11.1463 16.8098C11.1463 18.7374 12.1332 20.4345 13.6383 21.4343C12.7197 21.4063 11.8548 21.1506 11.0977 20.741C11.0977 20.7577 11.0977 20.7827 11.0977 20.8062C11.0977 23.5001 13.0299 25.7433 15.591 26.2539C15.123 26.3821 14.6283 26.4534 14.1186 26.4534C13.7567 26.4534 13.4039 26.4124 13.0626 26.351C13.7757 28.5525 15.8444 30.1615 18.2955 30.2093C16.3777 31.6962 13.9623 32.5868 11.3359 32.5868C10.8823 32.5868 10.4385 32.561 10 32.5079C12.4814 34.079 15.4279 35 18.5906 35C28.8965 35 34.5346 26.5368 34.5346 19.1949C34.5346 18.9544 34.527 18.7147 34.5156 18.478C35.6156 17.7012 36.5639 16.721 37.3126 15.6013Z"
                              fill="white"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_162_4206"
                                x1="-8.73846"
                                y1="48"
                                x2="50.0464"
                                y2="43.1332"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#F42D32" />
                                <stop offset="1" stop-color="#FCCB4C" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                      <div>
                        <Link href={""}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 56 56"
                            fill="none"
                          >
                            <path
                              d="M28.6666 4C15.4114 4 4.66663 14.7448 4.66663 28C4.66663 41.2552 15.4114 52 28.6666 52C41.9218 52 52.6666 41.2552 52.6666 28C52.6666 14.7448 41.9218 4 28.6666 4Z"
                              fill="url(#paint0_linear_162_4211)"
                            />
                            <path
                              d="M31.1582 35.518H37.1969L38.1454 29.3836H31.1582V26.0306C31.1582 23.4826 31.9912 21.2228 34.3747 21.2228H38.2049V15.8701C37.5317 15.7791 36.1084 15.5808 33.4192 15.5808C27.8029 15.5808 24.5105 18.5465 24.5105 25.3038V29.3848H18.7367V35.5191H24.5094V52.3798C25.6527 52.5501 26.8112 52.6668 28 52.6668C29.0745 52.6668 30.1234 52.5688 31.1582 52.4288V35.518Z"
                              fill="white"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_162_4211"
                                x1="-4.07184"
                                y1="52"
                                x2="54.713"
                                y2="47.1332"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#F42D32" />
                                <stop offset="1" stop-color="#FCCB4C" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                      <div>
                        <Link href={""}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 48 48"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_190_119)">
                              <path
                                d="M24.0016 48.0032C37.2573 48.0032 48.0032 37.2573 48.0032 24.0016C48.0032 10.7459 37.2573 0 24.0016 0C10.7459 0 0 10.7459 0 24.0016C0 37.2573 10.7459 48.0032 24.0016 48.0032Z"
                                fill="url(#paint0_linear_190_119)"
                              />
                              <path
                                d="M16.0559 25.9244L18.8185 33.4138L31.0727 16.3916L16.0559 25.9244Z"
                                fill="#C2DAEC"
                              />
                              <path
                                d="M19.1195 27.5876L18.8566 33.4898L25.3227 28.0027L19.1195 27.5876Z"
                                fill="#9FCDE2"
                              />
                              <path
                                d="M34.0698 13.515L9.91299 22.6962C9.23184 22.956 9.24768 23.9286 9.9415 24.1599L16.17 26.2635L30.3536 17.1108L19.1195 27.5878L27.8667 34.2249C28.7759 34.9156 30.097 34.4499 30.3726 33.3442L35.0994 14.4338C35.2515 13.8255 34.6559 13.2932 34.0666 13.5182L34.0698 13.515Z"
                                fill="#ECF8FD"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_190_119"
                                x1="-8.73904"
                                y1="48.0032"
                                x2="50.0497"
                                y2="43.136"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#F42D32" />
                                <stop offset="1" stop-color="#FCCB4C" />
                              </linearGradient>
                              <clipPath id="clip0_190_119">
                                <rect width="48" height="48" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}
