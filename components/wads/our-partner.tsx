'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { imgcarusel, settings } from "../../app/dataComponet";

export default function OurPartner() {

    return (
        <div className="max-w-[1280px] H-[440PX] Satoshi mx-auto bg-[url(/images/ourclientBg.png)] bg-cover">
            {/* Grid */}

            <div className="pb-20 slider-section">
                <div className="lg:w-2/3 mx-auto lg:mb-8 md:mb-6 mb-3 text-center">
                    <h2 className="text-[#516371] lg:pt-24 md:pt-10 pt-7 text-[16px] dark:text-white">
                        As Seen On
                    </h2>
                </div>
                <Slider className="lg:w-[670px]  mx-auto" {...settings}>
                    {imgcarusel.map((carouselD, idx) => {
                        return (
                            <>
                                <div className=" ">
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
        </div>
    );
}
