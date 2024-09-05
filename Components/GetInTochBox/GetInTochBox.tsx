import React from 'react'
import GetInTochBoxForm from '../GetInTochBoxForm/GetInTochBoxForm';
import ClockIcon from '../Icons/ClockIcon/ClockIcon';

function GetInTochBox() {
  return (
  <div className='relative'>
     <div className=" grid grid-cols-8 px-4 lg:px-24  gradiant5 py-10 " >
      <div className="col-span-8 lg:col-span-3 z-30">
        <GetInTochBoxForm />
      </div>
      <div className="col-span-8 lg:col-span-1 lg:pt-12 flex justify-center lg:block">
        <img src="./home/redirect.png" className="hidden lg:!block" alt="" />
        <img src="./home/redirectUp.png" className=" lg:!hidden" alt="" />
      </div>

      <div className="col-span-8 lg:col-span-4 z-30">
        <div className="text-3xl text-black mb-10">
        If you are interested in our professional shipping and logistics solutions,
         contact us today to discuss how we can support your business objectives.
        </div>
        <div
          className={`bg-modalBg  rounded-2xl  p-6 border border-black bg-[#E7EAF0] flex justify-center items-center flex-col`}
        >
          <div className="border-b-4 border-mainBlue text-black px-6 text-2xl py-2 ">
          Locations Us
          </div>
          <div className="w-full h-[30vh] rounded-xl overflow-hidden my-10">
          <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.085878291587!2d103.822849!3d1.311955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19054d5db59f%3A0x78b6b2cfbddf8bc0!2sSingapore!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                        width="100%" height="100%" frameBorder="0" aria-hidden="false"></iframe>
          </div>
          <div className="border-b-4 border-mainBlue text-black px-6 text-2xl py-2 ">
            Work Hours
          </div>

          <div className="px-6 text-2xl py-2 text-black flex justify-center items-center gap-4 my-5">
            <ClockIcon/>
            <div>9AM - 5PM | Monday-Saturday</div>
          </div>
          <div className="px-6 text-2xl py-2 flex justify-center items-center text-black">
          Ermes is always ready to answer and advise customers.
          </div>




        </div>
      </div>
    
    </div>
    <div className='absolute left-0 top-0 w-full h-full z-10' style={{background:"url(./pattern.png)"}}>
        {/* <img src="./pattern.png" className='w-full h-full ' alt="" /> */}
      </div>
  </div>
  )
}

export default GetInTochBox