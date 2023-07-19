'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { imgcarusel, settings } from "../../app/dataComponet";

export default function Carousel() {

  return (
    <div className="pb-20 slider-section">
      <div className="lg:w-2/3 mx-auto lg:mb-8 md:mb-6 mb-3 text-center">
        <h2 className="text-[#516371] lg:pt-24 md:pt-10 pt-7 text-[16px] dark:text-white">
          As Seen On
        </h2>
      </div>
      <Slider className="md:w-[670px] w-[85%]  mx-auto" {...settings}>
        {imgcarusel.map((carouselD, idx) => {
          return (
            <>
              <div className=" ">
                <div className="flex lg:px-5 h-[50px] px-3 items-center justify-center">
                  <img
                    alt="logos"
                    className="w-full mx-auto"
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
