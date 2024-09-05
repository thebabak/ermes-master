import React from 'react'

function WhyErmes() {


   const options1= [
      {id:1,title:"Quality Assurance",img:"w1.png",description:"We prioritize quality at every stage, from sourcing raw materials to delivering finished machinery, ensuring you receive products you can trust."},
      {id:2,title:"Innovation",img:"w2.png",description:"Our commitment to continuous improvement drives us to develop innovative solutions that keep you ahead of the competition."},
      {id:3,title:"Customer-Centric",img:"w3.png",description:"Our customer-first approach means we work closely with you to understand your needs and deliver solutions that not only meet but exceed your expectations."},
   ]

   const options2= [
      {id:4,title:"Global Reach",img:"w4.png",description:"With a global network of suppliers and partners, we ensure reliable and timely delivery of products and services, no matter where you are."},
      {id:5,title:"Sustainability",img:"w5.png",description:"We are dedicated to sustainable practices, ensuring that our products and processes minimize environmental impact."},
   ]


  return (
    <div className='px-4 lg:px-24 mb-10'>
      <div className='gradiant3 flex justify-center items-center text-xl lg:text-3xl py-5 my-8 rounded-lg font-semibold text-white'>
      Why Choose <span className='text-mainYellow mx-2'>Ermes</span> ?
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
         {options1.map(option => (
            <div key={option.id} className='flex flex-col gap-4 items-start gradiant4 mx-auto px-4 lg:px-8 py-8 rounded-lg'>
               <img src={`./${option.img}`} alt={option.title}  />
               <h3 className='text-sm  text-mainYellow font-semibold '>{option.title}</h3>
               <p className='text-white'>{option.description}</p>
            </div>
         ))}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
         {options2.map(option => (
            <div key={option.id} className='flex flex-col gap-4 items-start gradiant4 mx-auto px-4 lg:px-8 py-8 rounded-lg w-3/4'>
               <img src={`./${option.img}`} alt={option.title}  />
               <h3 className='text-sm  text-mainYellow font-semibold '>{option.title}</h3>
               <p className='text-white'>{option.description}</p>
            </div>
         ))}
      </div>
    </div>
  )
}

export default WhyErmes