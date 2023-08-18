"use client";
import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";
//@ts-ignore
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
const chains = [arbitrum, mainnet, polygon];
const projectId = "9ea2696ae9f5e6d571790076a33daa7c";
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);
interface Props {
  children?: ReactNode;
}

const QueryWrapper = ({ children }: Props) => (
  <>
    <WagmiConfig config={wagmiConfig}>
      <ThemeProvider
        attribute="class"
        themes={["pink", "red", "purple", "light", "dark"]}
      >
        {children}
      </ThemeProvider>
    </WagmiConfig>
    <div className="z-[9999] relative">
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  </>
);

export default QueryWrapper;
