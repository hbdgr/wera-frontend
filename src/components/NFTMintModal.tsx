import React, { useState, useEffect, useCallback } from "react";
import { Address, PublicClient } from "viem";

import { FaTimes } from "react-icons/fa";

import * as web3 from "../actions/nft-minter";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  walletClient: PublicClient;
  account: `0x${string}`;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, walletClient, account }) => {
  const [nftPrice, setNftPrice] = useState<bigint>(0n);

  const [weth, setWeth] = useState<web3.IERC20>();
  const [wethAddress, setWethAddress] = useState<Address>("0x");
  const [wethAllowance, setWethAllowance] = useState<bigint>(0n);

  const nftMinter: web3.NFTMinter = web3.getNftMinter(walletClient);

  // ----- Wait for Transactions -----
  const [isWaitingForConfirmation, setIsWaitingForConfirmation] = useState(false);

  const waitForTransaction = async (hash: web3.SolidityBytes) => {
    setIsWaitingForConfirmation(true); // Show "waiting for confirmation"
    const receipt = await walletClient.waitForTransactionReceipt({ hash });
    setIsWaitingForConfirmation(false); // Hide "waiting for confirmation"


    if (receipt.status === "success") {
      console.log("Transaction confirmed");
      await updateWethAllowance(weth!);
    } else {
      console.log("Transaction failed");
    }
  };

  // ----- Update Functions -----

  const updateWethAllowance = useCallback(async (weth: web3.IERC20) => {
    const allowance = await web3.getWETHAllowance(weth, account, nftMinter.address);
    setWethAllowance(allowance);
    console.log("WETH Allowance: ", allowance);
  }, [setWethAllowance]);

  const updateNftPrice = useCallback(async () => {
    setNftPrice(await web3.getNftPrice(nftMinter));
  }, [nftMinter, setNftPrice]);

  useEffect(() => {
    if (weth) return;

    const fetchWeth = async () => {
      const address = await web3.getWETHAddress(nftMinter);
      setWethAddress(address);

      const wethInstance = web3.getWETH(walletClient, address);
      setWeth(wethInstance);

      await updateWethAllowance(wethInstance);
    };

    fetchWeth();
  }, [weth, nftMinter, walletClient, updateWethAllowance]);

  useEffect(() => {
    updateNftPrice();
  }, [updateNftPrice]);

  // ----- Mint Functions -----

  const canApprove = () => {
    return wethAllowance < nftPrice;
  }

  const canMint = () => {
    return wethAllowance >= nftPrice;
  };

  const onApprove = async () => {
    const hash = await web3.approveWETH(weth!, nftMinter.address, nftPrice);
    await waitForTransaction(hash);
  };
  const onMint = async () => {
    const hash = await web3.purchaseNFT(nftMinter);
    await waitForTransaction(hash);
  };

  // ----- UI -----

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-80">
        <h2 className="text-xl font-semibold text-center mb-2">Solar Resident Info</h2>

        <div className="mt-4">
          {/* Top Separator */}
          <hr className="border-t-2 border-gray-400 mb-4" />

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold">Account:</span>
              <span
                title={account}
                className="text-gray-600 text-sm"
              >
                {`${account.slice(0, 6)}...${account.slice(-4)}`}
              </span>
            </div>
            <hr className="border-t border-gray-300" />
            <div className="flex justify-between">
              <span className="font-semibold">WETH Address:</span>
              <span
                title={wethAddress}
                className="text-gray-600 text-sm"
              >
                {`${wethAddress.slice(0, 6)}...${wethAddress.slice(-4)}`}
              </span>
            </div>
            <hr className="border-t border-gray-300" />
            <div className="flex justify-between">
              <span className="font-semibold">Price:</span>
              <span className="text-gray-600 text-sm">
                {web3.formatEtherBalance(nftPrice)} WETH
              </span>
            </div>
          </div>

          {/* Bottom Separator */}
          <hr className="border-t-2 border-gray-400 mt-4" />
        </div>

        <div className="mt-6 flex flex-col items-center space-y-4">
          <button
            onClick={onApprove}
            disabled={!canApprove}
              className={`px-4 py-2 rounded-lg transition duration-150 ${
                canApprove()
                  ? "bg-blue-500 text-white active:bg-blue-700"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            Approve WETH
          </button>
          <button
            onClick={onMint}
            disabled={!canMint}
            className={`px-4 py-2 rounded-lg transition duration-150 ${
              canMint()
                ? "bg-green-500 text-white active:bg-green-700"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            Mint Residency!
          </button>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-red-500 hover:text-red-700"
          >
            <FaTimes size={20} />
          </button>

          {isWaitingForConfirmation && (
            <div className="mt-4 text-gray-500 text-sm italic">
              Waiting for confirmation...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
