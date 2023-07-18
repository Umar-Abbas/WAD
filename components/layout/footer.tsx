
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <footer className="text-center relative lg:text-left  border-t-2 dark:text-[#BAC8D2] text-black">
        <div className="absolute xl:right-36 lg:right-28 right-6  top-10">
          <div className="-z-[2] relative lg:w-40 md:w-32 lg:h-32 md:h-24 h-16 w-20">


          </div>
        </div>
        <div className="container px-4 max-w-[1280px] mx-auto py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="">
              <Link href='' className="flex lg:justify-start justify-center items-center  md:mb-4">
                <div className='relative xl:w-40 xl:h-7 h-7 w-40'>
                  <img className='w-[70px] md:w-[100px]' src="/images/logo-top.png" alt="Logo" />

                </div>
              </Link>

              <p className=" text-[14px] dark:text-[#BAC8D2] text-black lg:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex flex-col w-full  bg-transparent mt-2">
                <h1 className="text-xl HelveticaneueBold text-[#516371] dark:text-white">Follow Us</h1>
                <div className="flex lg:justify-start justify-center flex-row mb-3  w-full align-middle mt-2 space-x-3 ">
                  <Link href="social-icon">
                    <svg className="w-[25px] text-black dark:text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" /></svg>
                  </Link>
                  <Link href="social-icon">
                    <svg className="w-[25px] text-black dark:text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" /></svg>
                  </Link>
                  <Link href="social-icon">
                    <svg className="w-[25px] text-black dark:text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" /></svg>
                  </Link>
                  <Link href="social-icon">
                    <svg className="w-[25px] text-black dark:text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <h6 className=" text-[18px] text-[#516371] dark:text-white HelveticaneueBold mb-4 flex justify-center md:justify-start">
                Home

              </h6>
              <p className="mb-4 text-[14px]">
                <Link href='/aboutus'
                  className="dark:text-[#BAC8D2] text-black">Tokenomics

                </Link>
              </p>
              <p className="mb-4  text-[14px]">
                <Link href='/pricing' className="dark:text-[#BAC8D2] text-black">    About WAD

                </Link>
              </p>
              <p className="mb-4 text-[14px]">
                <Link href='/terms-condition' className="dark:text-[#BAC8D2] text-black">  Key Features

                </Link>
              </p>
              <p className="text-[14px]">
                <Link href='/privacypolicy' className="dark:text-[#BAC8D2] text-black">  Core Values

                </Link>
              </p>
              <p className="text-[14px]">
                <Link href='/privacypolicy' className="dark:text-[#BAC8D2] text-black">
                  Where to Buy

                </Link>
              </p>
              <p className="text-[14px]">
                <Link href='/privacypolicy' className="dark:text-[#BAC8D2] text-black">

                  Road Map
                </Link>
              </p>
            </div>

            <div className="">
              <h6 className=" text-[18px] text-[#516371] dark:text-white HelveticaneueBold mb-4 flex justify-center md:justify-start">
                WAD Statistics

              </h6>
              <p className="mb-4 text-[14px]">
                <Link href={'/features/employee-recognition'} className="dark:text-[#BAC8D2] text-black">WAD Tokenomics

                </Link>
              </p>
              <p className="mb-4 text-[14px]">
                <Link href={'/features/pulse-survey'} className="dark:text-[#BAC8D2] text-black">WAD Audits

                </Link>
              </p>
              <p className="mb-4 text-[14px]">
                <Link href={'/features/pulse-survey'} className="dark:text-[#BAC8D2] text-black">
                  Our Partners
                </Link>
              </p>
              <p className="text-[14px]">
                <Link href={'/features/pulse-survey'} className="dark:text-[#BAC8D2] text-black">
                  Core Team
                </Link>
              </p>
              <p className="text-[14px]">
                <Link href={'/features/pulse-survey'} className="dark:text-[#BAC8D2] text-black">
                  Join WAD Community
                </Link>
              </p>
            </div>

            <div className="">
              <div className="mt-2 md:mt-0"><h3 className="md:text-[28px] text-xl">Contact Us</h3>
                <ul className="flex flex-col gap-3 pt-2 text-xs font-thin md:text-sm">
                  <li className="flex items-start gap-1">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" className="svg-inline--fa fa-location-dot w-10 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg><a className="flex" href="/"> 12110 Sunset Hills Rd, Suite 600, Reston, VA 20190</a>
                  </li>
                  <li className="flex items-center gap-2 mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" /></svg><a href="mailto: wad@winallday.com">wad@winallday.com</a></li><li className="flex items-center gap-2 mx-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" /></svg><a href="mailto: info@basatanwertech.com"> info@basatanwertech.com</a></li><li className="flex "><img className="w-6 h-4 -rotate-90" src="/images/mbl.png" alt="image" style={{ "filter": "invert(1)" }} />
                    <a href="tel:+70 214 7760"> +703.214.7760</a></li></ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center  flex-wrap  pt-6 text-[14px] ">
            <div className="">
              <span>© 2023 Win All Day.
              </span>
              <Link className="dark:text-[#BAC8D2] text-black font-semibold" href="">All Rights Reserved • Privacy Policy.</Link>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

