import React, { useState, useEffect, useCallback } from "react";
import { PublicClient } from "viem";

import { getNftMinter, getNftPrice, formatEtherBalance } from "../actions/nft-minter";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  walletClient: PublicClient;
  account: `0x${string}`;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, walletClient, account }) => {
  const [nftPrice, setNftPrice] = useState<string>("");

  const nftMinter = getNftMinter(walletClient);

  // ----- Update Functions -----

  const updateNftPrice = useCallback(async () => {
    const price = await getNftPrice(nftMinter);
    setNftPrice(formatEtherBalance(price));
  }, [nftMinter, setNftPrice]);

  useEffect(() => {
    updateNftPrice();

    return () => {};
  }, [updateNftPrice]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Solar Resident Info</h2>
        <p>Account: {account}</p>
        <p>Price: {nftPrice} WETH</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
