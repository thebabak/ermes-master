import React from 'react'

type props = {
   title:string
   img: string
   hsCode:string
}

function MobileProductItem({hsCode,img,title}:props) {
  return (
   <div className="flex justify-start items-center h-[100px] gap-2 my-5">
   <img src={img} className="w-[100px]" alt="" />
   <div className="flex flex-col justify-between items-start  h-full py-2">
     <div className='text-white'>{title}</div>
     <div className='text-white'>{hsCode}</div>
   </div>
 </div>
  )
}

export default MobileProductItem