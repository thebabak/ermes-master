import React from 'react'
type props = {
  color:string
}
function ChevLeftDown({color}:props) {
  return (
   <svg className='w-[20px]' viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
   <circle cx="17" cy="17" r="16" fill={`${color == 'white' ? "white" :"black"}`}/>
   <path d="M20.0748 23.5116C19.9404 23.6459 19.7566 23.7308 19.5444 23.7308L10.9602 23.7308C10.55 23.7308 10.2106 23.3913 10.2106 22.9812L10.2106 14.3969C10.2106 13.9868 10.55 13.6474 10.9602 13.6474C11.3703 13.6474 11.7097 13.9868 11.7097 14.3969L11.7097 22.2317L19.5444 22.2317C19.9546 22.2317 20.294 22.5711 20.294 22.9812C20.3011 23.1863 20.2091 23.3772 20.0748 23.5116Z" fill={`${color == 'white'?"#292D32":"white"}`}/>
   <path d="M23.5113 11.4908L11.6107 23.3914C11.3208 23.6813 10.84 23.6813 10.5501 23.3914C10.2601 23.1015 10.2601 22.6207 10.5501 22.3308L22.4507 10.4301C22.7406 10.1402 23.2214 10.1402 23.5113 10.4301C23.8012 10.7201 23.8012 11.2009 23.5113 11.4908Z" fill={`${color == 'white'?"#292D32":"white"}`}/>
   </svg>
   
  )
}

export default ChevLeftDown