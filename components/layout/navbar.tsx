"use client";
import React from "react";
import Link from "next/dist/client/link";
import ThemeButton from "@/app/themButton1";
import Ul from "../UL";
import { useWeb3Modal } from "@web3modal/react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useBalance,
  useNetwork,
} from "wagmi";

export default function Navbar() {
  const { open, close } = useWeb3Modal();
  const { address, connector: activeConnector, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  function truncate(str: string, n: number) {
    return str.length > n ? str.slice(0, 4) + "..." + str.slice(-4) : str;
  }
  return (
    <div
      className="border-fd-lightBlue fixed z-[9999] w-full border-b-[1px] px-4  text-black"
      style={{
        background: "#FFF",
        boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="container mx-auto max-w-[1280px]">
        <div className="bg-black-1 flex w-full justify-between py-4 align-middle">
          <img
            className="w-[70px] md:w-[100px]"
            src="/images/logo-top.png"
            alt="Logo"
          />
          <ThemeButton />
          <div className="flex flex-1 items-center justify-end lg:justify-center">
            <Ul
              id="navbar-collapse-with-animation"
              className="!z-[999999] pb-3 md:mt-0 md:block md:w-auto md:pb-0 lg:bg-transparent lg:p-0"
            >
              <ul className=" hidden w-full flex-col justify-center gap-x-0 gap-y-4 sm:mt-0 sm:items-center sm:gap-y-0 lg:inline-flex lg:flex-row lg:space-x-6  xl:gap-x-7">
                <li className="l nav-item whitespace-nowrap">
                  <Link href="/">
                    <div className="nav-link text-small p-0">Home</div>
                  </Link>
                </li>
                <li className="l nav-item whitespace-nowrap">
                  <a href="/#tokenomics">
                    <div className="nav-link text-small p-0">Tokenomics</div>
                  </a>
                </li>
                <li className="l nav-item whitespace-nowrap">
                  <a href="/#about" style={{ scrollBehavior: "smooth" }}>
                    <div className="nav-link text-small p-0">About WAD</div>
                  </a>
                </li>
                <li className="l nav-item whitespace-nowrap">
                  <a href="/#keyFeatures">
                    <div className="nav-link text-small p-0">Key Features</div>
                  </a>
                </li>
                <li className="l nav-item whitespace-nowrap">
                  <a href="/#coreValues">
                    <div className="nav-link text-small p-0">Core Values</div>
                  </a>
                </li>
                <li className="l nav-item whitespace-nowrap">
                  <Link href="/">
                    <div className="nav-link text-small p-0">More</div>
                  </Link>
                </li>
              </ul>
            </Ul>
          </div>
          <button
          onClick={() => open()}
            className="wadbtn text-cente inline-flex w-auto items-center justify-center gap-x-3 rounded-full px-8 py-4 font-medium text-white transition transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-0 focus:ring-offset-0 dark:focus:ring-0 sm:w-[195px]"
            style={{
              background:
                "linear-gradient(32deg, #F42D32 68.96%, #FCCB4C 100%)",
              boxShadow: "0px 25px 30px 0px rgba(21, 0, 53, 0.16)",
            }}
          >
            {isConnected
              ? truncate(`${ensName ? `${ensName} (${address})` : address}`, 8)
              : "Connect Wallet"}
          </button>
        </div>
      </div>
    </div>
  );
}
