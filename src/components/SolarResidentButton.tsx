import React, { useState } from "react";
import NFTMintModal from "./NFTMintModal";
import { PublicClient } from "viem";

const SolarResidentButton: React.FC<{ walletClient: PublicClient; account: `0x${string}` }> = ({
  walletClient,
  account,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex w-full">

      <NFTMintModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        walletClient={walletClient}
        account={account}
      />

      <button
        onClick={handleOpenModal}
        className="
          mx-auto my-auto
          px-6 py-3 font-semibold text-xl lg:text-2xl
          shadow-lg rounded-full border
          bg-transparent text-wera-yellow border-wera-yellow
          hover:text-wera-dark hover:bg-wera-yellow hover:border-wera-yellow
          active:text-wera-dark active:bg-wera-yellow active:border-wera-yellow
        "
      >
        Become Solar Resident
      </button>

    </div>
  );
};

export default SolarResidentButton;
