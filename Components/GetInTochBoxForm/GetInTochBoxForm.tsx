import React, { useState } from 'react'
import GetInTocheItem from '../GetInTocheItem/GetInTocheItem';
import ChevUpRightIcon from '../Icons/ChevUpRightIcon/ChevUpRightIcon';


function GetInTochBoxForm() {
  
   const [email, setEmail] = useState("");
   const [fName, setFname] = useState("");
   const [lName, setLname] = useState("");
   const [message, setMessage] = useState("");
   return (
     <div
     className={` rounded-2xl  p-6 border bg-[#E7EAF0] border-mainBlue  px-8 py-12 flex flex-col justify-center items-center   mb-10`}
 >
       <div className={`text-lg lg:text-4xl text-black`}>Get in Touch</div>
       <GetInTocheItem
         onChange={setFname}
         placeHolder="Enter your First Name"
         title="First Name"
         type="text"
         value={fName}
       />
       <GetInTocheItem
         onChange={setLname}
         placeHolder="Enter your Last Name"
         title="Last Name"
         type="text"
         value={lName}
       />
       <GetInTocheItem
         onChange={setEmail}
         placeHolder="Enter your email"
         title="Your Email"
         type="email"
         value={email}
       />
       <div className="w-full">
         <div className={`mb-1 text-black `}>Message</div>
         <textarea
           value={message}
           onChange={(e) => {
             setMessage(e.target.value);
           }}
           placeholder={"Enter your message"}
           className={`w-full border border-black bg-transparent rounded-2xl px-4 py-2`}
         ></textarea>
       </div>
       <div className="w-full ">
          <button className="flex justify-center items-center mt-7 bg-mainPurple w-full py-4 rounded-lg text-white bg-black">SEND <ChevUpRightIcon/> </button>
       </div>
     </div>
   );
}

export default GetInTochBoxForm