import React from "react";

export default function AboutWad() {
  return (
    <section
      className="relative flex items-center overflow-hidden py-8 md:mb-6 md:pt-12 lg:pb-12 lg:pt-24"
      id="about"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      <img className="absolute left-0" src="/images/lineL.png" />
      <img className="absolute right-0" src="/images/lineR.png" />
      <div className="Satoshi z-40 mx-auto max-w-[1280px]">
        <div className="z-40 grid overflow-hidden rounded-2xl bg-black lg:rounded-[45px]  lg:bg-[url(/images/bg-wad.png)] bg-cover dark:shadow-cardabout lg:h-[513px] lg:grid-cols-2">
          <div></div>
          <div className="flex h-full items-center">
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#ffffff] dark:text-white sm:text-2xl md:text-3xl lg:text-[40px]">
                About $WAD
              </h2>
              <p className="mt-3 text-sm font-normal text-white dark:text-white md:text-lg ">
                $WAD Ecosystem aims to help the community to propel towards the
                journey of Financial Freedom, Elevation, Innovation, and Real
                World Growth. In the era of digital engagement, our goal is to
                develop, deploy as well as to design the ecosystem that
                leverages our users in terms of exploration, evolution, and
                great experience.
                <br /> With the power of technology, we serve our mission to
                revolutionize the game of Financial Inclusivity, Global
                Accessibility, Transparency, Truth, Value Sustainability, Token
                Utility, and Community Growth.
                <br /> Be a part of the digital revolution with $WAD’s
                user-friendly ecosystem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
