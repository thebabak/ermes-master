import { allAddresses } from '@/utils/addresses'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function InProductsHeader() {
   const router = useRouter()
  return (
   <div className="grid grid-cols-3 w-full px-4 md:px-10 lg:px-28 pt-10 gap-2">
   <div className="col-span-2 bg-modalYellow h-[20vh] rounded-lg flex justify-around items-center text-black text-xl md:text-3xl lg:text-4xl font-semibold">
    <button className="bg-[#212529] rounded-lg text-white text-xl md:text-3xl lg:text-4xl font-semibold px-4 py-2">
     Industrial Material
    </button>
     <img src="../yellowBox.png" className="w-[100px]" alt="" />
   </div>
   <div
     className="col-span-1 bg-modalBlue h-[20vh] rounded-lg flex flex-col gap-4 justify-center items-center   cursor-pointer"
     onClick={() => {
      router.push(allAddresses.rawProducts)
     }}
   >
    <div className="text-sm text-nowrap md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-black bg-white rounded-lg px-1 lg:px-4 py-2"> Raw Product </div>

    <Link href={allAddresses.rawProducts} className="text-base md:text-3xl lg:text-4xl font-semibold text-white">See All</Link>
     
   </div>
 </div>
  )
}

export default InProductsHeader