import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <footer className="relative border-t-2 text-center  text-black dark:text-[#BAC8D2] lg:text-left">
        <div className="absolute right-6 top-10 lg:right-28  xl:right-36">
          <div className="relative -z-[2] h-16 w-20 md:h-24 md:w-32 lg:h-32 lg:w-40"></div>
        </div>
        <div className="container mx-auto max-w-[1280px] px-4 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <Link
                href=""
                className="flex items-center justify-center md:mb-4  lg:justify-start"
              >
                <div className="relative h-7 w-40 xl:h-7 xl:w-40">
                  <img
                    className="w-[70px] md:w-[100px]"
                    src="/images/logo-top.png"
                    alt="Logo"
                  />
                </div>
              </Link>

              <p className=" text-[14px] text-black dark:text-[#BAC8D2] my-4 lg:my-8">
               Your token to Innovation, Empowerment, Global Economy, and Ecosystem Growth!
              </p>
              <div className="mt-2 flex w-full  flex-col bg-transparent">
                <h1 className="HelveticaneueBold text-xl text-[#516371] dark:text-white">
                  Follow Us
                </h1>
                <div className="mb-3 mt-2 flex w-full flex-row  justify-center space-x-3 align-middle lg:justify-start ">
                  <Link href="social-icon">
                    <svg
                      className="w-[25px] text-black dark:text-white "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                    </svg>
                  </Link>
                  <Link href="social-icon">
                    <svg
                      className="w-[25px] text-black dark:text-white "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
                    </svg>
                  </Link>
                  <Link href="social-icon">
                    <svg
                      className="w-[25px] text-black dark:text-white "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
                    </svg>
                  </Link>
                  <Link href="social-icon">
                    <svg
                      className="w-[25px] text-black dark:text-white "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <h6 className=" HelveticaneueBold mb-4 flex justify-center text-[18px] text-[#516371] dark:text-white md:justify-start">
                Home
              </h6>
              <p className="mb-4 text-[14px]">
                <Link
                  href="/aboutus"
                  className="text-black dark:text-[#BAC8D2]"
                >
                  Tokenomics
                </Link>
              </p>
              <p className="mb-4  text-[14px]">
                <Link
                  href="/pricing"
                  className="text-black dark:text-[#BAC8D2]"
                >
                  {" "}
                  About WAD
                </Link>
              </p>
              <p className="mb-4 text-[14px]">
                <Link
                  href="/terms-condition"
                  className="text-black dark:text-[#BAC8D2]"
                >
                  {" "}
                  Key Features
                </Link>
              </p>
              <p className="text-[14px]">
                <Link
                  href="/privacypolicy"
                  className="text-black dark:text-[#BAC8D2]"
                >
                  {" "}
                  Core Values
                </Link>
              </p>
              <p className="text-[14px]">
                <Link
                  href="/privacypolicy"
                  className="text-black dark:text-[#BAC8D2]"
                >
                  Where to Buy
                </Link>
              </p>
              <p className="text-[14px]">
                <Link
                  href="/privacypolicy"
                  className="text-black dark:text-[#BAC8D2]"
                >
                  Road Map
                </Link>
              </p>
            </div>

            <div className="">
              <h6 className=" HelveticaneueBold mb-4 flex justify-center text-[18px] text-[#516371] dark:text-white md:justify-start">
                WAD Statistics
              </h6>
              <p className="mb-4 text-[14px]">
                <Link
                  href={"/features/employee-recognition"}
                  className="text-black dark:text-[#BAC8D2]"
                >
                  WAD Tokenomics
                </Link>
              </p>
              <p className="mb-4 text-[14px]">
                <Link
                  href={"/features/pulse-survey"}
                  className="text-black dark:text-[#BAC8D2]"
                >
                  WAD Audits
                </Link>
              </p>
              <p className="mb-4 text-[14px]">
                <Link
                  href={"/features/pulse-survey"}
                  className="text-black dark:text-[#BAC8D2]"
                >
                  Our Partners
                </Link>
              </p>
              <p className="text-[14px]">
                <Link
                  href={"/features/pulse-survey"}
                  className="text-black dark:text-[#BAC8D2]"
                >
                  Core Team
                </Link>
              </p>
              <p className="text-[14px]">
                <Link
                  href={"/features/pulse-survey"}
                  className="text-black dark:text-[#BAC8D2]"
                >
                  Join WAD Community
                </Link>
              </p>
            </div>

            <div className="">
              <div className="mt-2 md:mt-0">
                <h3 className="text-xl md:text-[28px]">Contact Us</h3>
                <ul className="flex flex-col gap-3 pt-2 text-xs font-thin md:text-sm">
                  <li className="flex items-centers gap-2">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      width={16}
                      height={16}
                      data-icon="location-dot"
                      className="svg-inline--fa fa-location-dot w-5 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                      />
                    </svg>
                    <a className="flex" href="/">
                      {" "}
                      12110 Sunset Hills Rd, Suite 600, Reston, VA 20190
                    </a>
                  </li>
                  <li className="mx-1 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    <a href="mailto: wad@winallday.com">wad@winallday.com</a>
                  </li>
                  <li className="mx-1 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    <a href="mailto: info@basatanwertech.com">
                      {" "}
                      info@basatanwertech.com
                    </a>
                  </li>
                  <li className="flex ">
                    <img
                      className="h-4 w-6 -rotate-90"
                      src="/images/mbl.png"
                      alt="image"
                      style={{ filter: "invert(1)" }}
                    />
                    <a href="tel:+70 214 7760"> +703.214.7760</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap  justify-center  pt-6 text-[14px] ">
            <div className="">
              <span>© 2023 Win All Day.</span>
              <Link
                className="font-semibold text-black dark:text-[#BAC8D2]"
                href=""
              >
                All Rights Reserved • Privacy Policy.
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
