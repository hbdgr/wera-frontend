import React, { useState, useEffect, useCallback } from "react";
import { Address, PublicClient } from "viem";

import { FaTimes } from "react-icons/fa";

import { getNftMinter, getNftPrice, formatEtherBalance, getWETHAddress } from "../actions/nft-minter";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  walletClient: PublicClient;
  account: `0x${string}`;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, walletClient, account }) => {
  const [nftPrice, setNftPrice] = useState<string>("");
  const [wethAddress, setWethAddress] = useState<Address>("0x");

  const nftMinter = getNftMinter(walletClient);

  // ----- Update Functions -----

  const updateWethAddress = useCallback(async () => {
    const weth = await getWETHAddress(nftMinter);
    setWethAddress((weth));
  }, [nftMinter, setWethAddress]);

  const updateNftPrice = useCallback(async () => {
    const price = await getNftPrice(nftMinter);
    setNftPrice(formatEtherBalance(price));
  }, [nftMinter, setNftPrice]);

  useEffect(() => {
    updateWethAddress();
    updateNftPrice();

    return () => {};
  }, [updateWethAddress, updateNftPrice]);

  // ----- Mint Functions -----

  const canApprove = true;
  const canMint = false;
  const onApprove = () => {
    // Approve logic
  };
  const onMint = () => {
    // Mint logic
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
              <span className="text-gray-600 text-sm">{nftPrice} WETH</span>
            </div>
          </div>

          {/* Bottom Separator */}
          <hr className="border-t-2 border-gray-400 mt-4" />
        </div>

        <div className="mt-6 flex flex-col items-center space-y-4">
          <button
            onClick={onApprove}
            disabled={!canApprove} // Replace 'canApprove' with your logic
            className={`px-4 py-2 rounded-lg ${
              canApprove
                ? "bg-blue-500 text-white"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            Approve WETH
          </button>
          <button
            onClick={onMint}
            disabled={!canMint} // Replace 'canMint' with your logic
            className={`px-4 py-2 rounded-lg ${
              canMint
                ? "bg-green-500 text-white"
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
