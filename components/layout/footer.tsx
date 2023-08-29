import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <footer className="relative border-t-2 text-center  text-black dark:text-[#BAC8D2] lg:text-left">
        <div className="absolute right-6 top-10 lg:right-28 xl:right-36">
          <div className="relative -z-[2] h-16 w-20 md:h-24 md:w-32 lg:h-32 lg:w-40"></div>
        </div>
        <div className="container mx-auto max-w-[1280px] px-4 py-10 text-center md:text-left">
          <div className="items-center justify-between justify-items-center md:grid md:grid-cols-4">
            <div className="lg:max-w-[288px]">
              <Link
                href=""
                className="flex items-center justify-center md:mb-4 lg:justify-start"
              >
                <div className="relative w-40 h-7 xl:h-7 xl:w-40">
                  <img
                    className="w-[70px] md:w-[100px]"
                    src="/images/logo-top.png"
                    alt="Logo"
                  />
                </div>
              </Link>

              <p className=" my-4 text-[14px] text-black dark:text-[#8E8E8E] lg:my-8">
                Your token to Innovation, Empowerment, Global Economy, and
                Ecosystem Growth!
              </p>
              <div className="flex flex-col w-full mt-2 bg-transparent">
                <h1 className="HelveticaneueBold text-xl text-[#516371] dark:text-white">
                  Follow Us
                </h1>
                <div className="flex flex-row justify-center w-full mt-2 mb-3 space-x-3 align-middle lg:justify-start ">
                  <Link
                    href="social-icon "
                    className="dark:rounded-[10px] dark:border dark:bg-[#FFF]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M12.499 7.37695C11.2726 7.37695 10.0965 7.86412 9.22934 8.73129C8.36217 9.59846 7.875 10.7746 7.875 12.001C7.875 13.2273 8.36217 14.4034 9.22934 15.2706C10.0965 16.1378 11.2726 16.625 12.499 16.625C13.7254 16.625 14.9015 16.1378 15.7687 15.2706C16.6358 14.4034 17.123 13.2273 17.123 12.001C17.123 10.7746 16.6358 9.59846 15.7687 8.73129C14.9015 7.86412 13.7254 7.37695 12.499 7.37695ZM12.499 15.004C11.7023 15.004 10.9382 14.6875 10.3749 14.1241C9.81149 13.5607 9.495 12.7967 9.495 12C9.495 11.2032 9.81149 10.4392 10.3749 9.8758C10.9382 9.31245 11.7023 8.99595 12.499 8.99595C13.2957 8.99595 14.0598 9.31245 14.6231 9.8758C15.1865 10.4392 15.503 11.2032 15.503 12C15.503 12.7967 15.1865 13.5607 14.6231 14.1241C14.0598 14.6875 13.2957 15.004 12.499 15.004Z"
                        fill="black"
                      />
                      <path
                        d="M17.3046 8.28491C17.8999 8.28491 18.3826 7.80227 18.3826 7.20691C18.3826 6.61154 17.8999 6.12891 17.3046 6.12891C16.7092 6.12891 16.2266 6.61154 16.2266 7.20691C16.2266 7.80227 16.7092 8.28491 17.3046 8.28491Z"
                        fill="black"
                      />
                      <path
                        d="M21.0349 6.11088C20.8034 5.51306 20.4496 4.97017 19.9962 4.51694C19.5428 4.06372 18.9998 3.71015 18.4019 3.47888C17.7022 3.21624 16.9631 3.07422 16.2159 3.05888C15.2529 3.01688 14.9479 3.00488 12.5059 3.00488C10.0639 3.00488 9.75091 3.00488 8.79591 3.05888C8.04929 3.07344 7.31066 3.21548 6.61191 3.47888C6.01384 3.70988 5.47067 4.06335 5.01724 4.51661C4.56381 4.96987 4.21013 5.51291 3.97891 6.11088C3.71621 6.8105 3.57452 7.54972 3.55991 8.29688C3.51691 9.25888 3.50391 9.56388 3.50391 12.0069C3.50391 14.4489 3.50391 14.7599 3.55991 15.7169C3.57491 16.4649 3.71591 17.2029 3.97891 17.9039C4.21078 18.5016 4.5648 19.0445 5.01834 19.4977C5.47188 19.9509 6.01497 20.3045 6.61291 20.5359C7.31034 20.8091 8.04928 20.9613 8.79791 20.9859C9.76091 21.0279 10.0659 21.0409 12.5079 21.0409C14.9499 21.0409 15.2629 21.0409 16.2179 20.9859C16.965 20.9707 17.7041 20.829 18.4039 20.5669C19.0017 20.3351 19.5445 19.9812 19.9979 19.5279C20.4512 19.0745 20.8051 18.5316 21.0369 17.9339C21.2999 17.2339 21.4409 16.4959 21.4559 15.7479C21.4989 14.7859 21.5119 14.4809 21.5119 12.0379C21.5119 9.59488 21.5119 9.28488 21.4559 8.32788C21.4443 7.57016 21.3018 6.82013 21.0349 6.11088ZM19.8169 15.6429C19.8105 16.2192 19.7053 16.7901 19.5059 17.3309C19.3557 17.7198 19.1258 18.0729 18.831 18.3676C18.5361 18.6622 18.1829 18.8919 17.7939 19.0419C17.2591 19.2403 16.6943 19.3455 16.1239 19.3529C15.1739 19.3969 14.9059 19.4079 12.4699 19.4079C10.0319 19.4079 9.78291 19.4079 8.81491 19.3529C8.24483 19.3459 7.68023 19.2407 7.14591 19.0419C6.75559 18.8929 6.40091 18.6636 6.1048 18.3688C5.80868 18.0741 5.57774 17.7205 5.42691 17.3309C5.23035 16.7959 5.12522 16.2317 5.11591 15.6619C5.07291 14.7119 5.06291 14.4439 5.06291 12.0079C5.06291 9.57088 5.06291 9.32188 5.11591 8.35288C5.12237 7.77691 5.22756 7.2063 5.42691 6.66588C5.73191 5.87688 6.35691 5.25588 7.14591 4.95388C7.6805 4.75602 8.24493 4.65085 8.81491 4.64288C9.76591 4.59988 10.0329 4.58788 12.4699 4.58788C14.9069 4.58788 15.1569 4.58788 16.1239 4.64288C16.6943 4.64974 17.2593 4.75495 17.7939 4.95388C18.1828 5.10416 18.536 5.33408 18.8309 5.62891C19.1257 5.92374 19.3556 6.27695 19.5059 6.66588C19.7025 7.20083 19.8076 7.76504 19.8169 8.33488C19.8599 9.28588 19.8709 9.55288 19.8709 11.9899C19.8709 14.4259 19.8709 14.6879 19.8279 15.6439H19.8169V15.6429Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="social-icon"
                    className="dark:rounded-[10px] dark:border dark:bg-[#FFF]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M16.903 9.00004H14.5V7.00004C14.5 5.96804 14.584 5.31804 16.063 5.31804H16.931C17.483 5.31804 17.931 4.87004 17.931 4.31804V3.06404C17.931 2.54104 17.53 2.09404 17.008 2.05904C16.404 2.01804 15.799 1.99904 15.193 2.00004C12.48 2.00004 10.5 3.65704 10.5 6.69904V9.00004H8.5C7.948 9.00004 7.5 9.44804 7.5 10V12C7.5 12.552 7.948 13 8.5 13L10.5 12.999V21C10.5 21.552 10.948 22 11.5 22H13.5C14.052 22 14.5 21.552 14.5 21V12.997L16.674 12.996C17.182 12.996 17.609 12.615 17.667 12.11L17.896 10.114C17.965 9.52104 17.501 9.00004 16.903 9.00004Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="social-icon"
                    className="dark:rounded-[10px] dark:border dark:bg-[#FFF]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.929 8.969H13.643V10.819C14.178 9.755 15.55 8.799 17.611 8.799C21.562 8.799 22.5 10.917 22.5 14.803V22H18.5V15.688C18.5 13.475 17.965 12.227 16.603 12.227C14.714 12.227 13.929 13.572 13.929 15.687V22H9.929V8.969ZM3.07 21.83H7.07V8.799H3.07V21.83ZM7.643 4.55C7.64315 4.88528 7.57666 5.21724 7.44739 5.52659C7.31812 5.83594 7.12865 6.11651 6.89 6.352C6.4064 6.83262 5.75181 7.10165 5.07 7.1C4.38939 7.09954 3.73631 6.8312 3.252 6.353C3.01421 6.11671 2.82539 5.83582 2.69634 5.52643C2.5673 5.21704 2.50058 4.88522 2.5 4.55C2.5 3.873 2.77 3.225 3.253 2.747C3.73689 2.26816 4.39024 1.9997 5.071 2C5.753 2 6.407 2.269 6.89 2.747C7.372 3.225 7.643 3.873 7.643 4.55Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="social-icon"
                    className="dark:rounded-[10px] dark:border dark:bg-[#FFF]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M22.5 5.01242C21.7511 5.35943 20.9567 5.58721 20.1433 5.68818C20.9905 5.15705 21.6411 4.31598 21.9474 3.31386C21.142 3.81376 20.2608 4.16598 19.3419 4.35529C18.5934 3.52125 17.527 3 16.3468 3C14.0807 3 12.2434 4.92156 12.2434 7.29155C12.2434 7.62796 12.2798 7.95547 12.3497 8.26965C8.93953 8.09062 5.91609 6.38209 3.89227 3.78559C3.53914 4.41943 3.3368 5.15673 3.3368 5.94313C3.3368 7.4321 4.06125 8.74563 5.16219 9.51528C4.51059 9.49394 3.87332 9.30986 3.30359 8.97843C3.30336 8.99641 3.30336 9.01438 3.30336 9.03244C3.30336 11.1118 4.71773 12.8464 6.59477 13.2406C5.99054 13.4125 5.35674 13.4377 4.7418 13.3142C5.26391 15.0192 6.7793 16.2599 8.57477 16.2947C7.17047 17.4457 5.40117 18.1318 3.47883 18.1318C3.14758 18.1318 2.82102 18.1115 2.5 18.0718C4.31586 19.2895 6.47266 20 8.78984 20C16.3373 20 20.4644 13.4605 20.4644 7.78926C20.4644 7.60312 20.4605 7.41804 20.4525 7.23403C21.2558 6.62664 21.9492 5.87434 22.5 5.01242Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-evenly md:col-span-4 md:col-start-2 md:contents">
              <div className="">
                <div className="mt-2 md:mt-0">
                  <h1 className="text-start text-xl font-bold md:text-[16px]">
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3 pt-2 text-xs font-normal   text-[#516371] dark:text-[#8E8E8E] md:text-base">
                    <li className="">
                      <a className="flex" href="/">
                        Home
                      </a>
                    </li>
                    <li className="">
                      <a className="flex" href="/">
                        Tokenomics
                      </a>
                    </li>{" "}
                    <li className="">
                      <a className="flex" href="/">
                        About $WAD
                      </a>
                    </li>{" "}
                    <li className="">
                      <a className="flex" href="/">
                        Key Features
                      </a>
                    </li>{" "}
                    <li className="">
                      <a className="flex" href="/">
                        Core Values
                      </a>
                    </li>{" "}
                    <li className="">
                      <a className="flex" href="/">
                        Where to Buy
                      </a>
                    </li>
                    <li className="">
                      <a className="flex" href="/">
                        Road Map
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="mt-2 md:mt-0">
                  <ul className="flex flex-col gap-3 pt-5 text-xs font-normal   text-[#516371] dark:text-[#8E8E8E] md:text-base">
                    <li className="">
                      <a className="flex" href="/">
                        $WAD Statistics
                      </a>
                    </li>
                    <li className="">
                      <a className="flex" href="/">
                        $WAD Tokenomics
                      </a>
                    </li>{" "}
                    <li className="">
                      <a className="flex" href="/">
                        $WAD Audits
                      </a>
                    </li>{" "}
                    <li className="">
                      <a className="flex" href="/">
                        Our Partners
                      </a>
                    </li>{" "}
                    <li className="">
                      <a className="flex" href="/">
                        Core Team
                      </a>
                    </li>{" "}
                    <li className="">
                      <a className="flex" href="/">
                        Join $WAD Community
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="max-w-[288px]">
              <div className="mt-2 md:mt-0">
                <h3 className="text-xl font-bold text-[#150035] dark:text-[#FFF] md:text-[16px]">
                  Contact
                </h3>
                <ul className="flex flex-col gap-3 pt-2 text-xs font-thin md:text-sm">
                  <li className="flex gap-2 items-centers">
                    <div className="dark:rounded-[10px] dark:border dark:bg-[#FFF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3.24375 5.39531L5.73984 2.90156C5.91592 2.72471 6.1252 2.58439 6.35567 2.48867C6.58614 2.39294 6.83325 2.34369 7.08281 2.34375C7.5914 2.34375 8.06953 2.54297 8.42812 2.90156L11.1141 5.5875C11.2909 5.76358 11.4312 5.97286 11.527 6.20333C11.6227 6.4338 11.6719 6.68091 11.6719 6.93047C11.6719 7.43906 11.4727 7.91719 11.1141 8.27578L9.15 10.2398C9.60974 11.2532 10.2489 12.175 11.0367 12.9609C11.8225 13.7506 12.7443 14.3922 13.7578 14.8547L15.7219 12.8906C15.898 12.7138 16.1072 12.5735 16.3377 12.4777C16.5682 12.382 16.8153 12.3328 17.0648 12.3328C17.5734 12.3328 18.0516 12.532 18.4102 12.8906L21.0984 15.5742C21.2755 15.7506 21.4159 15.9603 21.5117 16.1912C21.6074 16.4221 21.6565 16.6696 21.6562 16.9195C21.6562 17.4281 21.457 17.9062 21.0984 18.2648L18.607 20.7562C18.0352 21.3305 17.2453 21.6562 16.4344 21.6562C16.2633 21.6562 16.0992 21.6422 15.9375 21.6141C12.7781 21.0938 9.64453 19.4133 7.11562 16.8867C4.58906 14.3625 2.91094 11.2312 2.38359 8.0625C2.22422 7.09453 2.54531 6.09844 3.24375 5.39531Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <a className="flex dark:text-[#8E8E8E]" href="tel:+971 55 538 9227">
                      {" "}
                      +971 55 538 9227
                    </a>
                  </li>

                  <li className="flex items-center gap-2 ">
                    <div className="dark:rounded-[10px] dark:border dark:bg-[#FFF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4.64272 4.7998H20.5427C22.0427 4.7998 22.7987 5.5078 22.7987 6.9478V17.0518C22.7987 18.4798 22.0427 19.1998 20.5427 19.1998H4.64272C3.14272 19.1998 2.38672 18.4798 2.38672 17.0518V6.9478C2.38672 5.5078 3.14272 4.7998 4.64272 4.7998ZM12.5867 15.1198L20.6747 8.4838C20.9627 8.2438 21.1907 7.6918 20.8307 7.1998C20.4827 6.7078 19.8467 6.6958 19.4267 6.9958L12.5867 11.6278L5.75872 6.9958C5.33872 6.6958 4.70272 6.7078 4.35472 7.1998C3.99472 7.6918 4.22272 8.2438 4.51072 8.4838L12.5867 15.1198Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <a className="dark:text-[#8E8E8E]" href="mailto: wad@winallday.com">wad@winallday.com</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="dark:rounded-[10px] dark:border dark:bg-[#FFF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4.64272 4.7998H20.5427C22.0427 4.7998 22.7987 5.5078 22.7987 6.9478V17.0518C22.7987 18.4798 22.0427 19.1998 20.5427 19.1998H4.64272C3.14272 19.1998 2.38672 18.4798 2.38672 17.0518V6.9478C2.38672 5.5078 3.14272 4.7998 4.64272 4.7998ZM12.5867 15.1198L20.6747 8.4838C20.9627 8.2438 21.1907 7.6918 20.8307 7.1998C20.4827 6.7078 19.8467 6.6958 19.4267 6.9958L12.5867 11.6278L5.75872 6.9958C5.33872 6.6958 4.70272 6.7078 4.35472 7.1998C3.99472 7.6918 4.22272 8.2438 4.51072 8.4838L12.5867 15.1198Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <a className="dark:text-[#8E8E8E]" href="mailto: info@basatanwertech.com">
                      {" "}
                      info@basatanwertech.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2 ">
                    <div className="p-1 dark:rounded-[10px] dark:border dark:bg-[#FFF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="19"
                        viewBox="0 0 14 19"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_101_1617)">
                          <path
                            d="M6.13594 18.525C4.23281 16.1426 0 10.3684 0 7.125C0 3.18992 3.13396 0 7 0C10.8646 0 14 3.18992 14 7.125C14 10.3684 9.73438 16.1426 7.86406 18.525C7.41562 19.0928 6.58437 19.0928 6.13594 18.525ZM7 9.5C8.28698 9.5 9.33333 8.43496 9.33333 7.125C9.33333 5.81504 8.28698 4.75 7 4.75C5.71302 4.75 4.66667 5.81504 4.66667 7.125C4.66667 8.43496 5.71302 9.5 7 9.5Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_101_1617">
                            <rect width="14" height="19" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <Link className="dark:text-[#8E8E8E]" href="https://goo.gl/maps/CQujbc13gdQY1uPK7" target="_blank"> 12110 Sunset Hills Rd, Suite 600, Reston, VA 20190</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap  justify-center  pt-6 text-[14px] ">
            <div className="flex flex-col items-center justify-center">
              <span className="text-[#202020] dark:text-[#FFF] text-sm font-normal">© 2023 Win All Day.</span>
              <Link
                className=" text-[#516371] text-sm font-normal dark:text-[#BAC8D2]"
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
