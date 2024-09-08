import React from "react";
import AboutBox from "./components/AboutBox/AboutBox";
import AboutPageHeader from "./components/AboutPageHeader/AboutPageHeader";
import GetInTochBox from "@/Components/GetInTochBox/GetInTochBox";

function index() {
  const boxes = [
    {
      id: 1,
      img: "./a1.png",
      title: "Fresh Beginnings",
      desc: "Ermes Trading Limited is a newly founded company, bringing a fresh and innovative approach to the trade of raw materials and industrial machinery. Our mission is to connect high-quality suppliers with industries in need, ensuring seamless transactions and exceptional service.",
    },
    {
      id: 2,
      img: "./a2.png",
      title: "Our Business Focus",
      desc: "We specialize in the procurement and distribution of essential raw materials and advanced industrial machinery. Serving sectors like automotive, construction, food and beverage, healthcare, and manufacturing, we provide meticulously curated products that meet diverse industry needs.",
    },
    {
      id: 3,
      img: "./a3.png",
      title: "Our Business Focus",
      desc: "We specialize in the procurement and distribution of essential raw materials and advanced industrial machinery. Serving sectors like automotive, construction, food and beverage, healthcare, and manufacturing, we provide meticulously curated products that meet diverse industry needs.",
    },
  ];

  return (
    <div>
      <AboutPageHeader />


      <div className="!bg-no-repeat !bg-cover" style={{ background: "url(./aboutB.jpeg)" }}>
        <div className="px-4 lg:px-24 py-10 bg-[#808080aa]">
          <div className="lg:w-1/2 mx-auto">
            <p className="px-4 lg:px-8 py-2 lg:py-4 rounded-lg bg-[#00000055] text-white text-lg lg:text-2xl">
              <span className="text-mainYellow">Ermes</span> is a leading provider of high-quality raw materials and advanced industrial machinery, dedicated to empowering businesses with the resources and tools they need to thrive in a competitive marketplace. With a commitment to excellence, innovation, 
              and sustainability, Ermes has established itself as a trusted partner across a wide various industries.
            </p>
          </div>
        </div>
      </div>


      {boxes.map((item) => (
        <AboutBox key={item.id} {...item} />
      ))}

      <GetInTochBox />
    </div>
  );
}

export default index;
