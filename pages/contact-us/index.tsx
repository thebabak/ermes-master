import React from 'react'
import ContactUsHeader from './Components/ContactUsHeader/ContactUsHeader'
import ContactUsBox from './Components/ContactUsBox/ContactUsBox'
import GetInTochBox from '@/Components/GetInTochBox/GetInTochBox'


function index() {
  return (
    <div>
      <ContactUsHeader />


      <div className='pt-16 pb-8 lg:pb-[20vh] px-4 lg:px-24 !bg-no-repeat !bg-cover grid gap-8' style={{ background: "url(./contactU.jpeg)" }} >
        <h1 className='text-blue-700 font-semibold text-lg lg:text-2xl ms-[50%]'>
          We Can't Wait to Hear from You
        </h1>
        <p className='lg:w-1/2 bg-[#80808041] px-4 py-2 text-lg lg:text-2xl rounded-lg text-end lg:ms-auto'>
        We're here to assist with any questions or concerns you may have. Whether you're seeking more information about our products and services, 
        need help with an order, or have any other inquiries, feel free to reach out. Our dedicated team is ready to provide prompt and professional support..
          </p>
      </div>






      {/* <ContactUsBox /> */}
      <GetInTochBox />
    </div>
  )
}

export default index