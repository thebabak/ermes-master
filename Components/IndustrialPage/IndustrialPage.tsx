import { industrialCategoriesItem } from '@/SiteInfos/Categories'
import React, { useEffect, useState } from 'react'
import CategoryBoxItem from '../CategoryBoxItem/CategoryBoxItem'
import ProductBox from '../ProductBox/ProductBox'


type props = {
   selectedindustrialTitle:string
   setSelectedindustrialTitle:React.Dispatch<React.SetStateAction<string>>

}

function IndustrialPage({selectedindustrialTitle,setSelectedindustrialTitle}:props) {
  const [products,setProducts] = useState<any[]>([])
  useEffect(()=>{
    industrialCategoriesItem.forEach((item) => {
      if (item.name == selectedindustrialTitle) {
        setProducts(item.products);
      }
    })
  },[selectedindustrialTitle])

  return (
   <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-10 lg:px-28 py-28">
   <div className="w-full col-span-1">
     {industrialCategoriesItem.map((item, index) => (
       <CategoryBoxItem
         title={item.name}
         key={item.id}
         selectedTitle={selectedindustrialTitle}
         setSelectedTitle={setSelectedindustrialTitle}
         showLine={industrialCategoriesItem.length !== index + 1 ? true : false}
         products={products}
       />
     ))}
   </div>

   <div className="hidden md:!block col-span-2 w-full h-[50vh]  overflow-y-auto">
     {products.map((item, index) => (
       <ProductBox
         hsCode={item.hsCode}
         img={item.img}
         name={item.productName}
         productId={item.id}
         key={index}
       />
     ))}
   </div>
 </div>
  )
}

export default IndustrialPage