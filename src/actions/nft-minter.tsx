import { Address, PublicClient, formatEther, getContract, GetContractReturnType, formatUnits } from "viem";

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
  address: process.env.NFT_MINTER_ADDRESS as Address,
  abi: NFTMinter.abi,
  client: walletClient,
});

export const getNftPrice = async (
  nftMinter: GetContractReturnType<typeof NFTMinter.abi, PublicClient>,
): Promise<bigint> => {
  return nftMinter.read.nftPrice() as Promise<bigint>;
};
