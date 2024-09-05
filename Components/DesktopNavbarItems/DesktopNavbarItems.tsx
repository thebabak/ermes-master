import Link from 'next/link';
import React, { useState } from 'react'
import ChevDown from '../Icons/ChevDown/ChevDown';
import { allAddresses } from '@/utils/addresses';

function DesktopNavbarItems() {
   const [isShowProductsMenuItem, setIsShowProductsMenuItem] = useState(false);
  return (
   <div className="flex justify-center items-center gap-4">
   <Link href={allAddresses.home} className='text-black'>Home</Link>
   <div className={`flex justify-center items-center relative  `}>
     <div className='text-black'>Products</div>
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
       } w-[100px] top-full flex-col justify-center items-start bg-black py-5 gap-4 px-4 rounded-lg z-10`}
     >
  <Link href={allAddresses.industrialProducts} className='text-white' onClick={()=>{setIsShowProductsMenuItem(false)}}>Industrial</Link>
       <Link href={allAddresses.rawProducts} className='text-white' onClick={()=>{setIsShowProductsMenuItem(false)}}>Raw</Link>
     </div>
   </div>
   <Link href={allAddresses.about} className='!text-black' >About</Link>
   <Link href={allAddresses.contact} className='!text-black' >Contact</Link>
   <Link href={allAddresses.rawServices} className='!text-black' >Services</Link>
 </div>
  )
}

export default DesktopNavbarItems
