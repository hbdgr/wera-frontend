import React, { useState, useEffect } from "react";
import Image from "next/image";

import NFTMintModal from "./NFTMintModal";
import { PublicClient } from "viem";

import * as web3 from "../actions/nft-minter";

const SolarResidentView: React.FC<{ walletClient: PublicClient; account: `0x${string}` }> = ({
  walletClient,
  account,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isWhitelisted, setIsWhitelisted] = useState<boolean>(false);
  const [isResident, setIsResident] = useState<boolean>(false);
  const [baseURI, setBaseURI] = useState<string>("");

  const nftMinter: web3.NFTMinter = web3.getNftMinter(walletClient);
  console.log("NFT Minter: ", nftMinter.address);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {

    const checkResident = async () => {
      const resident = await web3.isResident(nftMinter, account);
      console.log("resident?:", resident);
      setIsResident(resident);
    }

    const checkWhitelist = async () => {
      const whitelisted = await web3.isWhitelisted(nftMinter, account);
      console.log("whitelisted?:", whitelisted);
      setIsWhitelisted(whitelisted);
    }

    const getBaseURI = async () => {
      const uri = await web3.baseURI(nftMinter);
      setBaseURI(uri);
      console.log("Base URI: ", uri);
    }

    // how to execute this with await?
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      try {
        await checkResident();
        await checkWhitelist();
        await getBaseURI();
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, [nftMinter]);

  return (
    <div className="flex w-full">

      <NFTMintModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        walletClient={walletClient}
        account={account}
      />

      {isResident && baseURI !== "" ? (
        <div
          className="
            mx-auto my-auto
            px-6 py-3 font-semibold text-xl lg:text-2xl
            text-wera-dark
          "
        >
          <div className="text-wera-yellow mb-4">
            Congratulation! You are a Solar Resident 🎉
          </div>

          <Image
            src={baseURI}
            alt="Solar Resident NFT"
            className="dark mr-auto my-auto lg:mx-auto"
            width={400}
            height={400}
            priority
          />

        </div>
      ) : (
        isWhitelisted ? (
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
        ) : (
          <div
            className="
              mx-auto my-auto
              px-6 py-3 font-semibold text-xl lg:text-2xl
              text-wera-dark
            "
          >
            Your account is not whitelisted
          </div>
        )
      )}
    </div>
  );
};

export default SolarResidentView;
