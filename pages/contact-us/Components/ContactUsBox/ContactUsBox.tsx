import React from 'react'

function ContactUsBox() {
  return (
  <>
   <div className="text-white border-b-2 mx-auto border-mainYellow lg:px-9 text-center w-fit text-xl md:text-2xl lg:text-4xl font-semibold">
   We Can't Wait to Hear from You
        </div>
   <div className="grid grid-cols-1 lg:grid-cols-2  px-4 lg:px-44 my-16 lg:my-24">
       <div
     className="flex flex-col justify-start  items-center "
   >
     <p className="py-4 px-6 rounded-2xl text-black border mt-8 lg:w-[50%] mx-auto border-mainBlue bg-white">
     We're here to help you with any questions or concerns you may have. Whether you're looking for more information about our products and services, need assistance with an order, or have any other inquiries, feel free to reach out to us. Our dedicated team is ready to provide you with prompt and professional support.
     </p>
   </div>
   <div
     className="flex justify-center"
   >

     <img src="./contact/phones.png" className="w-[150px] md:w-[250px] lg:w-[300px]" alt="" />
   </div>
  
 </div>
  </>
  )
}

export default ContactUsBox