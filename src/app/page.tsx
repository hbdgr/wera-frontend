"use client";

import React, { useEffect, useCallback } from "react";
import { useAccount } from "wagmi";
import { createWalletClient, custom, publicActions, PublicClient } from "viem";

import Header from "./header";
import SolarResidentView from "../components/SolarResidentView";
import { debugLog } from "../log";

export default function Home() {
  const { isConnected, address, chain } = useAccount();
  const account = address as `0x${string}`;

  const walletClient = isConnected
    ? createWalletClient({
        chain,
        transport: custom(window.ethereum!),
        account,
      }).extend(publicActions) as unknown as PublicClient
    : null;


  const getNativeBalance = useCallback(async (): Promise<bigint> => {
    return walletClient!.getBalance({
      address: account,
    });
  }, [walletClient, account]);

  useEffect(() => {
    const debugInfo = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      debugLog("isConnected", isConnected);
      if (isConnected) {
        debugLog("account", account);
        debugLog("chain name", chain?.name);
        debugLog("chain rpcs", JSON.stringify(chain?.rpcUrls));

        debugLog("balance", await getNativeBalance());
      }
    };

    debugInfo();
  }, [account, chain, isConnected, getNativeBalance]);

  return (
    <main className="
      flex flex-col min-h-screen items-center justify-between
      relative bg-cover bg-center
      w-full lg:w-3/4 h-screen m-auto
      shadow-inner bg-transparent border border-wera-yellow/10
      "
    >
      <Header />

      <div className="
        bottom-0 left-0 w-full h-4 bg-gradient-to-b
        from-wera-yellow/10 from-10% to-80% to-transparent border-t border-wera-bg"
      ></div>

      <div className="
        relative flex items-center justify-between
        w-full lg:min-w-[600px] lg:w-2/4 h-[500px] my-auto mt-20
        shadow-inner bg-transparent border lg:rounded-xl border-wera-yellow/60
      ">

        {isConnected && walletClient ? (
          <SolarResidentView walletClient={walletClient} account={account} />
        ) : (
          <div className="
            mx-auto my-auto
            px-6 py-3 font-semibold text-xl text-wera-dark lg:text-2xl
          ">
            Connect Wallet First
          </div>
        )}

      </div>
    </main>
  );
}
