import { Address, PublicClient, formatEther, getContract, GetContractReturnType } from "viem";

import NFTMinter from "../artifacts/NFTMinter.json";

export type SolidityBytes = `0x${string}`;

// -- Utils --

export const formatEtherBalance = (balance: bigint): string => {
  return parseFloat( // remove trailing zeros
    parseFloat( // to 8 decimal places
      formatEther(balance),
    ).toFixed(8),
  ).toString();
};

// -- NFT Minter --

export const getNftMinter = (walletClient: PublicClient) => getContract({
  address: process.env.NEXT_PUBLIC_NFT_MINTER_ADDRESS as Address,
  abi: NFTMinter.abi,
  client: walletClient,
});

export const getNftPrice = async (
  nftMinter: GetContractReturnType<typeof NFTMinter.abi, PublicClient>,
): Promise<bigint> => {
  return nftMinter.read.nftPrice() as Promise<bigint>;
};

export const getWETHAddress = async (
  nftMinter: GetContractReturnType<typeof NFTMinter.abi, PublicClient>,
): Promise<Address> => {
  return nftMinter.read.weth() as Promise<Address>;
};
