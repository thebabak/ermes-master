import React from "react";
type props = {
  id: number;
  img: string;
  title: string;
  desc: string;
};
function AboutBox({ id, img, title, desc }: props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  px-4 lg:px-28 my-16 lg:my-24">
      <div
        className={`flex justify-center ${
          id == 2 ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="text-white text-xl md:text-2xl lg:text-4xl font-extrabold">
          0{id}
        </div>
        <img src={img} className="w-[150px] md:w-[250px] lg:w-[300px]" alt="" />
      </div>
      <div
        className={`flex flex-col justify-start  items-center ${
          id == 2 ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="text-white border-b-2 border-mainYellow lg:px-9 text-center w-fit text-xl md:text-2xl lg:text-4xl font-semibold">
          {title}
        </div>
        <p className="py-4 px-6 rounded-2xl text-black border mt-8 lg:w-[50%] mx-auto border-mainBlue bg-white">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default AboutBox;
