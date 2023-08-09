import React from "react";

export default function WadCommunity() {
  return (
    <section className="relative flex items-center overflow-hidden py-8 md:py-12 lg:py-24">
      <img className="absolute left-0" src="/images/lineL.png" />
      <img className="absolute right-0" src="/images/lineR.png" />
      <div className="Satoshi z-40 mx-auto max-w-[1280px]">
        <div className="z-40 grid h-[350px] items-center overflow-hidden rounded-[45px] bg-[url(/images/WadCommunityBG.png)] bg-cover dark:shadow-cardabout md:h-[400px] lg:h-[513px] lg:grid-cols-2">
          <div className="flex h-full items-center">
            <div className="px-6 md:pl-16">
              <h2 className="text-xl font-bold text-[#ffffff] dark:text-white sm:text-2xl md:text-3xl lg:text-[40px]">
                Join WAD Community
              </h2>
              <p className="my-4 text-sm font-normal text-white dark:text-white md:text-lg ">
                Are you ready to explore the world of limitless possibilities?
                Join the WAD community, and embark on the journey of Crypto
                Adventure!<br/> With WAD, enter the world of Global Economy,
                Connection, Collaboration, Growth, and Future Success. Don’t
                miss the opportunity to be a part of Crypto Evolution.<br /> Let’s
                join hands to fulfill the WAD’s vision of shaping a better
                future, for all!
              </p>
              <button className="text-cente mt-6 inline-flex w-auto items-center justify-center gap-x-3 whitespace-nowrap rounded-full  bg-white px-8 py-3  font-medium text-black transition focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0">
              Join the WAD community now
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
