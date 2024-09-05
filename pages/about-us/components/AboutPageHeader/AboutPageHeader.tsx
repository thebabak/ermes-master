
import ChevRightDownBlack from '@/Components/Icons/ChevRightDownBlack/ChevRightDownBlack'
import React from 'react'

function AboutPageHeader() {
  return (
    <div className='relative'>
      <div className=' gradiant7 px-4 lg:px-28 py-20 mt-10 z-20 grid'>
        <div className='bg-black rounded-lg text-base  md:text-2xl lg:text-3xl text-white px-4 py-2 w-fit z-20'>About Us</div>
        <div className='bg-white rounded-lg text-base  md:text-2xl lg:text-3xl text-black px-4 py-2 w-fit flex  items-center gap-2 mt-5 z-20'>
          <div className='z-20'>See More</div>
          <ChevRightDownBlack />
        </div>
      </div>
      <div className='absolute left-0 top-0 w-full h-full z-[-1] gradiant7'>
      </div>
      <div className='absolute left-0 top-0 w-full h-full '>
        <img src="./pattern.png" className='w-full h-full ' alt="" />
      </div>
    </div>
  )
}

export default AboutPageHeader