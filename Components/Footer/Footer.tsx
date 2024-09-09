import Link from "next/link";
import React from "react";
import FooterLocation from "../Icons/FooterLocation/FooterLocation";
import FooterPhone from "../Icons/FooterPhone/FooterPhone";
import FooterMailIcon from "../Icons/FooterMailIcon/FooterMailIcon";

function Footer() {
  return (
    <footer className="pt-[14vh] bg-bg">
      <div className="px-1 lg:px-24 mb-28 lg:mb-5 ">
        <h1 className="ms-auto px-4 py-2 rounded-lg border-s-8 border-s-mainYellow bg-slate-100 w-fit  gradiant6 text-white">
          Ermes – Your partner in excellence and innovation.
        </h1>
      </div>
      <div className="bg-white mx-4 lg:mx-20 px-4 relative rounded-t-3xl">
        <div className=" grid grid-cols-1 lg:grid-cols-3 pt-[10vh]  ">
          <div className="col-span-1">
            <p className="text-black font-semibold leading-7 text-center">
            Ermes Trading Limited is a newly founded company, bringing a fresh and innovative approach to the trade of raw materials and industrial machinery. Our mission is to connect high-quality suppliers with industries in need, ensuring seamless transactions and exceptional service.
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col items-start lg:ps-28 justify-start gap-4">
              <div className="p-4 border-b-2 w-full  border-mainYellow text-mainBlue text-lg font-semibold">
                Link
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <Link href={"/about-us"} className="text-black font-semibold">
                  About Us
                </Link>
                <Link href={"/contact-us"} className="text-black font-semibold">
                  Contact Us
                </Link>
                <Link href={"/Industrial"} className="text-black font-semibold">
                  Products
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <div className="p-4 border-b-2 w-full  border-mainYellow text-mainBlue text-lg font-semibold">
                Info
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="flex justify-start items-center gap-3">
                  <FooterLocation />
                  <div className="text-black font-semibold">
                    Flat 2401-16 wing shing Industrial Building 26 NG fong
                    street san po kong KL
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <FooterPhone />
                  <div className="text-black font-semibold">
                    (+852) 81932316
                  </div>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <FooterMailIcon />
                  <div className="text-black font-semibold ">
                    info@ermes.hk
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="absolute left-[10%]  top-[-90px]">
          <img src="footerLogo.png" className="w-[200px] md:w-[250px]" alt="" />
        </div>
        <div className="w-full h-1 bg-mainBlue my-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  py-4 ">
          <div className="bg-black flex justify-center items-center gap-4 rounded-md  py-2 px-4">
            <div className="text-white">
              Terms & Condition
            </div>
            <div className="w-0.5 h-full bg-white"></div>
            <div className="text-white">©2022 Ermes. All rights reserved</div>
          </div>
          <div className="text-gray-500 py-4">
            ERMES International Limited
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
