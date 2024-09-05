
import React from 'react'
import MinusIcon from '../Icons/MinusIcon/MinusIcon'
import PlusIcon from '../Icons/PlusIcon/PlusIcon'
type props = {
   selectedBox:number
   setSelectedBox:(e:number)=>void
   item:number 
   title:string
   desc:string
}
function AskedQuestionsBoxItem({selectedBox,setSelectedBox,desc,item,title}:props) {
  return (
   <div className="py-4 w-full    t07   border-b border-gray-600   cursor-pointer" onClick={() => {
      setSelectedBox(item)
   }}>
      <div
        className={`flex justify-between items-center t07 ${
          selectedBox == item ? "mb-10" : "mb-4"
        } mt-5 `}
      >
        <div className="text-white text-2xl font-semibold">
          {title}
        </div>
        <div
          className="w-fit h-fit cursor-pointer"
          onClick={() => {
             setSelectedBox(item)
          }}
        >
          {selectedBox == item ? <MinusIcon /> : <PlusIcon />}
        </div>
      </div>
      <p
        className={` text-gray-400 text-lg t07 ${
          selectedBox == item ? "h-[230px] md:h-[135px]" : "h-1"
        } overflow-hidden `}
      >
        {desc}
      </p>
    </div>
  )
}

export default AskedQuestionsBoxItem