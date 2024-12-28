import Link from "next/link";
import React, { FC, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";

export interface MenuItem {
  title: string;
  route?: string;
}

interface MenuDropdownProps {
  menuItems: MenuItem[];
}

const MenuDropdown: FC<MenuDropdownProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(old => !old);
  };

  const visibility = isOpen
    ?
    "flex"
    :
    "hidden";

  return (
    <>
      <div className="flex relative">
        <button
          className="hover:text-blue-400"
          onClick={toggle}
        >
          <RiMenu4Line className="w-[50px] h-[50px] text-sunny-400" />
        </button>
        <div className={`
          absolute ${visibility} flex-col top-8 z-30 w-[200px] min-h-[100px] py-3
          bg-black rounded-md border border-sunny-400/40 font-semibold
        `}>
          {
            menuItems.map(item =>
              <Link
                key={item.route}
                className="
                  hover:bg-yellow-200 hover:text-zinc-600 px-2 py-2 mx-1
                  border-y border-sunny-400/20
                "
                href={item?.route || ""}
                onClick={toggle}
              >
                {item.title}
              </Link>,
            )
          }
        </div>
      </div>
      {
        isOpen
          ?
          <div
            className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
            onClick={toggle}
          ></div>
          :
          <></>
      }
    </>
  );
};

export default MenuDropdown;
