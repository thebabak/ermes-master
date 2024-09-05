import Link from "next/link";
import React, { useState } from "react";
import ChevDown from "../Icons/ChevDown/ChevDown";
import { allAddresses } from "@/utils/addresses";

function MobileNavbarItems() {
  const [isShowProductsMenuItem, setIsShowProductsMenuItem] = useState(false);
  return (
    <div className="w-full  px-6">
      <div className="flex flex-col bg-white rounded-lg w-full justify-center items-center gap-4">
        <Link href={allAddresses.home} className="w-full px-4 py-2  text-black">Home</Link>
        <div className={`flex justify-start px-4 py-2 items-center relative w-full `}>
          <div className="text-center  text-black">Products</ div >
          <div
            className="flex items-center pt-1 w-fit h-fit cursor-pointer"
            onClick={() => {
              setIsShowProductsMenuItem((prev) => !prev);
            }}
          >
            <ChevDown />
          </div>
          <div
       className={`absolute left-0  ${
         isShowProductsMenuItem ? "!flex" : "hidden"
       } w-[100px] top-full flex-col justify-center items-start bg-black py-5 gap-4 px-4 rounded-lg z-50`}
     >
       <Link href={allAddresses.industrialProducts} onClick={()=>{setIsShowProductsMenuItem(false)}}>Industrial</Link>
       <Link href={allAddresses.rawProducts} onClick={()=>{setIsShowProductsMenuItem(false)}}>Raw</Link>
     </div>
        </div>
        <Link href={allAddresses.about} className="w-full px-4 py-2  text-black" >About</Link>
   <Link href={allAddresses.contact} className="w-full px-4 py-2  text-black" >Contact</Link>
   <Link href={allAddresses.rawServices} className="w-full px-4 py-2  text-black" >Services</Link>
      </div>
    </div>
  );
}

export default MobileNavbarItems;
