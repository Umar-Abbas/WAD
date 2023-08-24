'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ourclient, ourclientd, settings } from "../../app/dataComponet";

export default function OurPartner() {

    return (

        <div className="relative z-30 pb-10 lg:pb-52 md:pb-20 slider-section">
            {/* <img src="/images/ourpartner.png" className="absolute bottom-0" /> */}
            <div className="mx-auto mb-3 text-center lg:w-2/3 lg:mb-8 md:mb-6">
                <h2 className="text-[#516371] lg:pt-24 md:pt-10 pt-7 text-[16px] dark:text-white">
                    As Seen On
                </h2>
            </div>
            <Slider className="lg:w-[670px] dark:hidden block mx-auto" {...settings}>
                {ourclient.map((carouselD, idx) => {
                    return (
                        <>
                            <div className="">
                                <div className="flex lg:px-5 h-[50px] px-3 py-4 items-center justify-center">
                                    <img
                                        alt="logos"
                                        className="h-20 mx-auto"
                                        src={carouselD.Image}
                                    />
                                </div>
                            </div>
                        </>
                    );
                })}
            </Slider>
            <Slider className="lg:w-[670px] !hidden dark:!block mx-auto" {...settings}>
                {ourclientd.map((carouselD, idx) => {
                    return (
                        <>
                            <div className="">
                                <div className="flex lg:px-5 h-[50px] px-3 py-4 items-center justify-center">
                                    <img
                                        alt="logos"
                                        className="h-20 mx-auto"
                                        src={carouselD.Image}
                                    />
                                </div>
                            </div>
                        </>
                    );
                })}
            </Slider>
        </div>

    );
}
