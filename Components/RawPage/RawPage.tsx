import React, { useEffect, useState } from "react";
import ProductBox from "../ProductBox/ProductBox";
import CategoryBoxItem from "../CategoryBoxItem/CategoryBoxItem";
import { rawCategoriesItem } from "@/SiteInfos/Categories";

type props = {
  selectedRawTitle: string;
  setSelectedRawTitle: React.Dispatch<React.SetStateAction<string>>;
};

function RawPage({
  selectedRawTitle,
  setSelectedRawTitle,
}: props) {
  const [products,setProducts] = useState<any[]>([])
  useEffect(()=>{
    rawCategoriesItem.forEach((item) => {
      if (item.name == selectedRawTitle) {
        setProducts(item.products);
      }
    })
  },[selectedRawTitle])
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-10 lg:px-28 py-28">
      <div className="w-full col-span-1">
        {rawCategoriesItem.map((item, index) => (
          <CategoryBoxItem
            title={item.name}
            key={item.id}
            selectedTitle={selectedRawTitle}
            setSelectedTitle={setSelectedRawTitle}
            showLine={rawCategoriesItem.length !== index + 1 ? true : false}
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
  );
}

export default RawPage;
