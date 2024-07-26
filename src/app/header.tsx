"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import RainbowButton from "../components/RainbowButton";
import MenuDropdown, { MenuItem } from "../components/MenuDropdown";

const menuItems: MenuItem[] = [
  {
    title: "???",
    route: "/???",
  },
  {
    title: "Invest",
    route: "/invest",
  },
  {
    title: "Stake",
    route: "/stake",
  },
  {
    title: "Faucet",
    route: "/faucet",
  },
];

export default function Header() {
  return (
    <header className="flex flex-row w-full mb-4 p-2 pt-4">
    {/* onClick={toggleDropdown} */}

      <div className="flex lg:hidden my-auto mx-2 items-center">
        <MenuDropdown menuItems={menuItems} />
      </div>

      <div className="basis-1/3 hidden lg:flex">
        {/* empty */}
      </div>

      <a
        className="basis-1/2 lg:basis-1/3 my-auto pointer-events-none lg:pointer-events-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/WeRaGlobal.svg"
          alt="WeRa Global"
          className="dark mr-auto my-auto lg:mx-auto"
          width={160}
          height={60}
          priority
        />
      </a>

      <div className="basis-1/2 lg:basis-1/3 mx-auto">
        <div className="w-min ml-auto pr-3 lg:pr-8">
          <RainbowButton />
        </div>
      </div>
    </header>
  );
}
