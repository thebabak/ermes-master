import React from 'react'
import CustomInput from '../CustomInput/CustomInput'

type props = {
   value:string
   onChange:(e:string)=>void
   placeHolder:string
   type:string
   title:string
}

function GetInTocheItem({onChange,placeHolder,type,value,title}:props) {
  
  return (
   <div className="w-full my-8">
   <div className={`mb-1 text-black `}>{title}</div>
   <CustomInput
     type={type}
     placeholder={placeHolder}
     className={ 'border border-black '}
     value={value}
     onChange={(e) => {
       onChange(e.target.value);
     }}
   />
 </div>
  )
}

export default GetInTocheItem