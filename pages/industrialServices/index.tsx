import ChevRightDownBlack from '@/Components/Icons/ChevRightDownBlack/ChevRightDownBlack'
import RawServicesBoxes from '@/Components/RawServicesBoxes/RawServicesBoxes'
import ServicesBoxes from '@/Components/ServicesBoxes/ServicesBoxes'
import { allAddresses } from '@/utils/addresses'
import Link from 'next/link'
import React from 'react'

function index() {

   const items = [
      { id: 1, title: 'Manufacturing Equipment', subTitle: "Advanced machinery for metalworking, plastic molding, chemical processing, and more, engineered for precision and durability.", img: './rs1.jpeg' },
      { id: 2, title: 'Automation Solutions', subTitle: "Cutting-edge automation technologies, including robotics and control systems, to streamline operations and reduce human error.", img: './rs2.jpeg' },
      { id: 3, title: 'Maintenance and Support', subTitle: "Comprehensive maintenance services and technical support to ensure your machinery operates at peak performance.", img: './rs3.jpeg' },
      { id: 4, title: 'Custom Solutions', subTitle: "Tailor-made machinery and equipment designed to meet the unique needs of your production line.", img: './rs4.jpeg' },
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
               <Link href={allAddresses.rawServices} className='text-white  text-center border-t-4 border-t-white px-4 py-8 text-lg lg:text-2xl font-semibold  w-3/4'>Raw Materials</Link>
            </div>
            <div className='flex justify-center items-center py-10'>
               <Link href={allAddresses.industrialServices} className='border-t-4  border-t-white px-4 py-8 text-lg lg:text-2xl font-semibold text-white text-center bg-blue-500 w-3/4'>Industrial Machinery</Link>
            </div>
         </div>


         <section className='px-4 lg:px-24'>
            <div className='my-10  gradiant9 border-s-4 border-s-mainBlue rounded-lg px-4 py-8 grid grid-cols-1 lg:grid-cols-2'>
               <div>
                  <div className='text-white text-lg lg:text-3xl font-semibold mb-9'>Industrial Machinery</div>
                  <p className='text-white text-lg lg:text-2xl'> <span className='text-mainBlue font-semibold'>Ermes</span> is at the forefront of industrial innovation, providing state-of-the-art machinery that enhances productivity and efficiency. Our machinery division offers:</p>
               </div>
               <div className='flex justify-end items-center'>
                  <img src="./indS.png" alt="" />
               </div>
            </div>
         </section>


         {
            items.map((item, index) => (
               <RawServicesBoxes
                  key={index}
                  img={item.img}
                  subTitle={item.subTitle}
                  title={item.title}
                  id={item.id}
               />
            ))
         }

         <div style={{ background: "url(./indBg.png)" }} className='!bg-no-repeat !bg-cover'>
         <div className='bg-[#000000ac] py-[10vh]'>
            <p className='w-fit lg:w-1/2 mx-auto p-8 text-white text-lg lg:text-2xl rounded-lg bg-[#2e486b8b]'>
               Our raw materials are sourced from reliable suppliers, ensuring consistency, quality, and compliance with international standards.
            </p>
         </div>
         </div>



      </>
   )
}

export default index