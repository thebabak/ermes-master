
import React, { useState } from "react";
import CloseIcon from "../Icons/CloseIcon/CloseIcon";
import MobileProductItem from "../MobileProductItem/MobileProductItem";

type Props = {
  title: string;
  selectedTitle: string;
  setSelectedTitle: React.Dispatch<React.SetStateAction<string>>;
  showLine: boolean;
  products?: any[];
};

function CategoryBoxItem({
  title,
  selectedTitle,
  setSelectedTitle,
  showLine,
  products,
}: Props) {
  
  const selectHandler = () => {
    setSelectedTitle(title);
    setMobileProductDetailModalShow((prev) => !prev);
  };
  const [mobileProductDetailModalShow, setMobileProductDetailModalShow] =
    useState(false);
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="flex justify-center items-center gap-2">
        <div
          className={`w-6 h-6 rounded-full border-2  ${
            title == selectedTitle ? "border-mainYellow" : "border-gray-400"
          }`}
          onClick={selectHandler}
        ></div>
        <div
          className={`${title == selectedTitle ? "text-mainYellow" : "text-white"} font-semibold cursor-pointer`}
          onClick={selectHandler}
        >
          {title}
        </div>
      </div>
      {showLine && (
        <div className="w-6 h-6 flex justify-center items-center">
          <div className={`w-0.5 h-5 ${title == selectedTitle ? "bg-mainYellow" : "bg-gray-400"} `}></div>
        </div>
      )}

      {mobileProductDetailModalShow && (
        <div className="absolute block lg:!hidden h-[60vh] overflow-y-auto w-[90%] left-[5%] top-[10%] bg-[#000000dc] rounded-lg">
          <div className="flex justify-end items-center px-4 py-4">
            <div
              className="w-fit h-fit bg-white rounded-lg"
              onClick={() => {
                setMobileProductDetailModalShow(false);
              }}
            >
              <CloseIcon />
            </div>
          </div>
          {products?.map((item, index) => (
            <MobileProductItem
              hsCode={item.hsCode}
              img={item.img}
              title={item.productName}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryBoxItem;
