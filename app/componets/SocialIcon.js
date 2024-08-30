import React from 'react'
import Image from 'next/image'
import Applemusic from '@/public/images/social/apple-music.svg'
import Instgram from '@/public/images/social/instagram.svg'
import Spotify from '@/public/images/social/spotify.svg'
import Tiktok from '@/public/images/social/tiktok.svg'
import Youtube from '@/public/images/social/youtube.svg'
const SocialImages = [
    {   
        name:"Apple Music",
        image:Applemusic,
    },
    {   
        name:"Instgram",
        image:Instgram,
    },
    {   
        name:"Spotify",
        image:Spotify,
    },
    {   
        name:"Tiktok",
        image:Tiktok,
    },
    {   
        name:"Youtube",
        image:Youtube,
    }
]





function SocialIcon() {
  return (
    <div className='flex'>
        {SocialImages.map((item,index) =>{
            return(
                <div key={index} className="shadow-md shadow-slate-300 p-3 mr-5 mt-4 rounded-lg cursor-pointer transition ease-in-out delay-150  hover:bg-black border hover:border-black-600">
                <Image src={item.image} alt={item.name}  className='w-[55px] h-[55px]' />
            </div>
            )

        })}
      
    </div>
  )
}

export default SocialIcon