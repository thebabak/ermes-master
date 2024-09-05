import ChevRightDownBlack from '@/Components/Icons/ChevRightDownBlack/ChevRightDownBlack'
import RawServicesBoxes from '@/Components/RawServicesBoxes/RawServicesBoxes'
import ServicesBoxes from '@/Components/ServicesBoxes/ServicesBoxes'
import { allAddresses } from '@/utils/addresses'
import Link from 'next/link'
import React from 'react'

function index() {

   const items = [
      { id: 1, title: 'Metals and Alloys', subTitle: "High-grade steel, aluminum, copper, and specialty alloys tailored to meet the specific requirements of different industries.", img: './os1.png' },
      { id: 2, title: 'Polymers and Plastics', subTitle: "A wide range of plastic resins and polymers designed for durability and performance.", img: './os2.png' },
      { id: 3, title: 'Chemicals and Compounds', subTitle: "Essential chemicals and compounds that ensure optimal performance and efficiency in industrial processes.", img: './os3.png' },
      { id: 4, title: 'Minerals and Ores', subTitle: "Premium quality minerals and ores sourced responsibly to support sustainable industrial growth.", img: './os4.png' },
   ]




   return (
      <>
         <div className='relative'>
            <div className=' gradiant7 px-4 lg:px-28 py-20 mt-10 z-20 grid'>
               <div className='bg-black rounded-lg text-base  md:text-2xl lg:text-3xl text-white px-4 py-2 w-fit z-20'>Our Services</div>
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


         <div className='grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-24'>
            <div className='flex justify-center items-center py-10'>
               <Link href={allAddresses.rawServices} className='bg-yellow-600 text-center text-black border-t-4 border-t-white px-4 py-8 text-lg lg:text-2xl font-semibold  w-3/4'>Raw Materials</Link>
            </div>
            <div className='flex justify-center items-center py-10'>
               <Link href={allAddresses.industrialServices} className='border-t-4 text-center border-t-white px-4 py-8 text-lg lg:text-2xl font-semibold text-white w-3/4'>Industrial Machinery</Link>
            </div>
         </div>
         <section className='px-4 lg:px-24'>
            <div className='my-10  gradiant8 border-s-4 border-s-mainYellow rounded-lg px-4 py-8 grid grid-cols-1 lg:grid-cols-2'>
               <div>
                  <div className='text-white text-lg lg:text-3xl font-semibold mb-9'>Raw Materials</div>
                  <p className='text-white text-lg lg:text-2xl'>At <span className='text-mainYellow'>Ermes</span>, we understand that the foundation of any successful manufacturing process starts with superior raw materials. Our extensive portfolio includes</p>
               </div>
               <div className='flex justify-end items-center'>
                  <img src="./yellowBox.png" alt="" />
               </div>
            </div>
         </section>


         {
            items.map((item, index) => (
               <ServicesBoxes
                  key={index}
                  img={item.img}
                  subTitle={item.subTitle}
                  title={item.title}
                  id={item.id}
               />
            ))
         }

         <div style={{ background: "url(./rawSBg.png)" }} className='!bg-no-repeat !bg-cover'>
         <div className='bg-[#0000008a] py-[10vh]'>
            <p className='w-fit lg:w-1/2 mx-auto p-8 text-mainYellow text-lg lg:text-2xl rounded-lg bg-[#808080ba]'>
               Our raw materials are sourced from reliable suppliers, ensuring consistency, quality, and compliance with international standards.
            </p>
         </div>
         </div>



      </>
   )
}

export default index