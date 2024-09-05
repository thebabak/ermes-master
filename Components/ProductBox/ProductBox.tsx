import React from 'react'
import ProductBoxTitles from '../ProductBoxTitles/ProductBoxTitles'
type props = {
  name:string
  hsCode:string
  productId:string
  img:string
}
function ProductBox({name,hsCode,productId,img}:props) {
  return (
   <div className="w-full bg-white rounded-lg mb-2">
   <div className="grid grid-cols-2">
     <div>
       <ProductBoxTitles title="Product name:" subTitle={name} />
       <ProductBoxTitles title="HS Code:" subTitle={hsCode}/>
       <ProductBoxTitles title="Product id number : " subTitle={productId} />
       {/* <ProductBoxTitles title="Usage: " subTitle="Planting and harvesting rice and other crops Planting and harvesting rice and other crops
Planting and harvesting rice and other crops Planting and harvesting rice and other crops" /> */}
     </div>

     <div className="flex justify-center items-center">
       <div className="w-[220px] h-[220px] bg-[#D9D9D9] rounded-xl flex justify-center items-center">
          <img src={`./${img}`} className="w-[170px] h-[170px] rounded-lg" alt="" />
       </div>
     </div>
   </div>
 </div>
  )
}

export default ProductBox