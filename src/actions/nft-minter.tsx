import { Address, PublicClient, formatEther, getContract, GetContractReturnType } from "viem";

import NFTMinterArt from "../artifacts/NFTMinter.json";
import IERC20Art from "../artifacts/IERC20.json";

export type SolidityBytes = `0x${string}`;
export type NFTMinter = GetContractReturnType<typeof NFTMinterArt.abi, PublicClient>;
export type IERC20 = GetContractReturnType<typeof IERC20Art.abi, PublicClient>;

// -- Utils --

export const formatEtherBalance = (balance: bigint): string => {
  return parseFloat( // remove trailing zeros
    parseFloat( // to 8 decimal places
      formatEther(balance),
    ).toFixed(8),
  ).toString();
};

// -- NFT Minter --

export const getNftMinter = (walletClient: PublicClient): NFTMinter => getContract({
  address: process.env.NEXT_PUBLIC_NFT_MINTER_ADDRESS as Address,
  abi: NFTMinterArt.abi,
  client: walletClient,
});

export const getNftPrice = async (
  nftMinter: NFTMinter,
): Promise<bigint> => {
  return nftMinter.read.nftPrice() as Promise<bigint>;
};

export const getWETHAddress = async (
  nftMinter: NFTMinter,
): Promise<Address> => {
  return nftMinter.read.weth() as Promise<Address>;
};

export const purchaseNFT = async (
  nftMinter: NFTMinter,
): Promise<SolidityBytes> => {
  const hash = await nftMinter.write.purchaseNft();

  console.log("purchase NFT: ", hash);
  return hash;
}

export const isWhitelisted = async (
  nftMinter: NFTMinter,
  account: Address,
): Promise<boolean> => {
  return nftMinter.read.whitelist([account]) as Promise<boolean>;
}

// -- Get WETH --

export const getWETH = (
  walletClient: PublicClient,
  wethAddress: Address,
): IERC20 => getContract({
  address: wethAddress,
  abi: IERC20Art.abi,
  client: walletClient,
});

export const getWETHBalance = async (
  weth: IERC20,
  user: Address,
): Promise<bigint> => {
  return weth.read.balanceOf([user]) as Promise<bigint>;
}

export const getWETHAllowance = async (
  weth: IERC20,
  owner: Address,
  spender: Address,
): Promise<bigint> => {
  return weth.read.allowance([owner, spender]) as Promise<bigint>;
}

export const approveWETH = async (
  weth: IERC20,
  spender: Address,
  amount: bigint,
): Promise<SolidityBytes> => {
  const hash = await weth.write.approve([spender, amount]);

  console.log("approve WETH: ", hash);
  return hash;
}
