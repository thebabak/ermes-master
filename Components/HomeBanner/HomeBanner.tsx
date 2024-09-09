import Link from 'next/link'
import React from 'react'

function HomeBanner() {
  return (
   <div className=' py-10' style={{background:"url(./banner.png)"}}>

   <div className='flex justify-center items-centers gap-2 font-bold text-xl lg:text-5xl'>
      <span className='text-[#7EA8F2]'>Ermes</span>
      <h1 className='text-gray-500'>International Limited</h1>
      <span className='text-[#F9AE05]'>.</span>
   </div>
   <div className='px-4'>
      <p
         className='text-white border-s-2 border-s-[#F9AE05] w-full lg:w-1/3 my-8 mx-auto px-4 py-4 bannerTextGradiant text-center'>
         Our mission is to own and develop financially disciplined businesses that lead 
         responsibly by providing the best products with superior branding to target markets.

      </p>
   </div>

   <div className='flex justify-center items-center flex-wrap gap-4'>
      <Link href={'/about-us'}  className='bg-black text-white flex justify-center items-center rounded-lg px-4 py-2 gap-4 text-2xl font-semibold'>
         <span> About Us</span>
         <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16.5" cy="17" r="16" fill="white" />
            <path
               d="M15.1658 9.84979C15.3303 9.75479 15.5299 9.72042 15.7348 9.77532L24.0266 11.9971C24.4227 12.1032 24.6627 12.5189 24.5566 12.9151L22.3348 21.2069C22.2286 21.603 21.8129 21.843 21.4168 21.7369C21.0207 21.6307 20.7807 21.215 20.8868 20.8189L22.9146 13.2511L15.3468 11.2233C14.9507 11.1172 14.7107 10.7015 14.8168 10.3053C14.863 10.1054 15.0012 9.94479 15.1658 9.84979Z"
               fill="#292D32" />
            <path
               d="M8.73523 20.5715L23.3104 12.1565C23.6655 11.9515 24.13 12.076 24.335 12.431C24.54 12.7861 24.4155 13.2506 24.0604 13.4556L9.48523 21.8706C9.13016 22.0756 8.66572 21.9511 8.46072 21.596C8.25572 21.241 8.38016 20.7765 8.73523 20.5715Z"
               fill="#292D32" />
         </svg>

      </Link>
      <Link href={'/about-us'}
         className='bg-white text-black flex justify-center items-center rounded-lg px-4 py-2 gap-4 text-2xl font-semibold'>
         <span> Learn more</span>
         <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16.5" cy="17" r="16" fill="#050A15" />
            <path
               d="M15.1658 9.84979C15.3303 9.75479 15.5299 9.72042 15.7348 9.77532L24.0266 11.9971C24.4227 12.1032 24.6627 12.5189 24.5566 12.9151L22.3348 21.2069C22.2286 21.603 21.8129 21.843 21.4168 21.7369C21.0207 21.6307 20.7807 21.215 20.8868 20.8189L22.9146 13.2511L15.3468 11.2233C14.9507 11.1172 14.7107 10.7015 14.8168 10.3053C14.863 10.1054 15.0012 9.94479 15.1658 9.84979Z"
               fill="white" />
            <path
               d="M8.73523 20.5715L23.3104 12.1565C23.6655 11.9515 24.13 12.076 24.335 12.431C24.54 12.7861 24.4155 13.2506 24.0604 13.4556L9.48523 21.8706C9.13016 22.0756 8.66572 21.9511 8.46072 21.596C8.25572 21.241 8.38016 20.7765 8.73523 20.5715Z"
               fill="white" />
         </svg>


      </Link>
   </div>
</div>
  )
}

export default HomeBanner