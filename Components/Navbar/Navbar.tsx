import React, { useState } from "react";
import DesktopNavbarItems from "../DesktopNavbarItems/DesktopNavbarItems";
import MobileNavbarItems from "../MobileNavbarItems/MobileNavbarItems";
import BarsIcon from "../Icons/BarsIcon/BarsIcon";
import Link from "next/link";
import { allAddresses } from "@/utils/addresses";

function Navbar() {
  const [isShowMenuItem, setIsShowMenuItem] = useState(false);
  return (
    <>
      <div className="px-6 pt-6 ">
        <div className="rounded-lg bg-white px-8  flex justify-between items-center">
          <div className="flex justify-start items-center gap-4">
            <div>
               <img src="./navLogo.png" className="w-[70px] h-[50px]" alt="" />
            </div>
            <div
              className="w-fit h-fit  lg:!hidden cursor-pointer"
              onClick={() => {
                setIsShowMenuItem((prev) => !prev);
              }}
            >
              <BarsIcon />
            </div>
          </div>

          <div className="w-fit h-fit hidden lg:!block">
            <DesktopNavbarItems />
          </div>

          <Link href={allAddresses.contact} className="rounded-xl !text-white py-2 px-4 bg-black">
            Contact Us
          </Link >
        </div>
      </div>
      {isShowMenuItem && (
        <div className="w-full h-fit  lg:!hidden">
          <MobileNavbarItems />
        </div>
      )}
    </>
  );
}

export default Navbar;
