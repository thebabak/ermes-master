import React from 'react'
type props = {
   title:string 
   subTitle:string
   img:string
   id:number
}
function RawServicesBoxes({img,subTitle,title,id}:props) {
  return (
   <div className="px-4 lg:px-32 relative mb-[25vh] ">
   <div className={`flex ${id % 2 == 0 ?"justify-start":"justify-end"} items-center`}>
     <img src={img} className="w-full lg:w-1/2 !h-[350px] rounded-lg" alt="" />
   </div>
   <div className={`absolute top-[20%] bg-[#2D3136] border border-white  lg:bottom-[-15%] w-[90%] lg:w-[60%]  ${id % 2 == 0 ? "right-[5%]":""} px-2 lg:px-8 bg-modalBg py-5  lg:py-10 rounded-lg h-fit`}>
     <h1 className="text-blue-500 text-base lg:text-3xl mx-auto w-full text-center mb-5">
       
      {title}
     </h1>
     <p className="text-xs lg:text-2xl text-white">
       {subTitle}
     </p>
   </div>
 </div>
  )
}

export default RawServicesBoxes