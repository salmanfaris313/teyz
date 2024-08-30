import React from 'react'
import Image from 'next/image' 
import User from '@/public/images/user.png'
import Link from 'next/link'
const Links=[
    {
        name:"Instagram",
        Link:"/"
    },
    {
        name:"Facebook",
        Link:"/"
    },
    {
        name:"Whatsapp",
        Link:"/"
    },
    {
        name:"Spotify",
        Link:"/"
    },
    {
        name:"Website",
        Link:"/"
    }
    
]



function MobileScreen() {
  return (
    <div className='bg-white p-6 w-[100%] flex flex-col rounded-3xl  ' >
        <div className='flex  justify-center text-center'>

        <Image className=" justify-center rounded-full w-20 h-20 border-[3px] border-[#4e4e4e4a]" src={User} alt="iuser" />
      
        </div>
        <div className='flex  flex-col justify-center text-center'>
     
          <h4 className=" text-black font-bold text-[17px] mt-3 mb-2 " >Salman Faris</h4>
          <p className="  text-black" >Passionate web developer 💻✨ Build with purpose.</p>
          {Links.map((item,index) => {
            return (
                <Link href="/" key={index} className='flex bg-blue-300 hover:bg-black transition duration-500 shadow-2xl px-6 py-3 rounded-3xl mt-6 text-white justify-center'>
            {item.name}
          </Link>
            )
          })}
          
         </div>
    </div>
  )
}

export default MobileScreen