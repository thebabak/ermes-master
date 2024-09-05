import React from 'react'
type props = {
  
    title:string
    subTitle:string
 
}
function ProductBoxTitles({title,subTitle}:props) {
  return (
    <div className='my-5 px-4'>

<div className="text-[#757A82] font-normal text-2xl ">{title}</div>
                  <div className="text-black text-base">{subTitle} </div>

    </div>
  )
}

export default ProductBoxTitles