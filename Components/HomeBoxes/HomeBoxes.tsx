import Link from 'next/link'
import React from 'react'
import ChevLeftDown from '../Icons/ChevLeftDown/ChevLeftDown'

function HomeBoxes() {
  return (
   <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4  mx-auto px-4 lg:px-20 my-10">


   <div className="right_box_blue w-full h-full py-10 grid grid-cols-3 bg-modalBlue rounded-lg">
     <div className="col-span-2 flex flex-col gap-4 justify-center items-start px-8">
       <div className="rounded-lg p-2 bg-black text-white">Industrial Product</div>
       <button className="bg-white px-4 py-2 rounded-xl flex justify-center items-center gap-2" >
        <ChevLeftDown color="black" />
        <Link href={'/products/Industrial'} className="text-black">See More</Link>
       </button>
     </div>
     <div className="col-span-1 flex justify-center items-center ">
        <img src="./blueBox.svg" className="w-[100px]" alt="" />
     </div>
   </div>


   <div className="right_box_yellow w-full h-full py-10 grid grid-cols-3 bg-modalYellow rounded-lg">
    
     <div className="col-span-1 flex justify-center items-center">
        <img src="./yellowBox.png" className="w-[100px]" alt="" />
     </div>

     <div className="col-span-2 flex flex-col gap-4 justify-center items-end px-8">
       <div className="rounded-lg p-2 bg-black text-white">Raw Material</div>
       <button className="bg-white px-4 py-2 rounded-xl flex justify-center items-center gap-2" >
        <ChevLeftDown color="black" />
        <Link href={'/products/Raw'} className="text-black">See More</Link>
       </button>
     </div>

   </div>

   

 </div>
  )
}

export default HomeBoxes