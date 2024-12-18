"use client";

import React from "react";
import Image from "next/image";

import RainbowButton from "../components/RainbowButton";
import MenuDropdown, { MenuItem } from "../components/MenuDropdown";

const menuItems: MenuItem[] = [
  {
    title: "Become Solar Resident",
    route: "/residency",
  },
];

export default function Header() {
  return (
    <header className="
      flex flex-row w-full mb-4 p-4
    ">

      <div className="basis-1/3 hidden lg:flex">
        {/* empty */}
      </div>

      <div className="hidden my-auto mx-2 items-center">
        <MenuDropdown menuItems={menuItems} />
      </div>

      <a
        className="basis-1/2 lg:basis-1/3 my-auto pointer-events-none lg:pointer-events-auto"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.wera.global/"
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

      <div className="basis-1/2 lg:basis-1/3">
        <div className="
          flex justify-end
          relative mr-auto
        ">
          <RainbowButton />
        </div>
      </div>
    </header>
  );
}
