import React, { useRef } from 'react'
import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets//images/starwar.png'
import disneyV from './../assets/videos/disney.mp4'
import marvelV from './../assets/videos/marvel.mp4'
import nationalV from './../assets/videos/national-geographic.mp4'
import pixarV from './../assets/videos/pixar.mp4'
import starWarsV from './../assets/videos/star-wars.mp4'
const productionList = [
    {
        id:1,
        image:disney,
        video:disneyV
    },
    {
        id:2,
        image:marvel,
        video:marvelV
    },  {
        id:3,
        image:nationalG,
        video:nationalV
    },  {
        id:4,
        image:pixar,
        video:pixarV
    },  {
        id:5,
        image:starwar,
        video:starWarsV
    },
]





function ProductionHouse() {
    const videoRef = useRef([]);

    const handleMouseEnter = (index) => {
        if(videoRef.current[index] && videoRef.current[index].paused){
            videoRef.current[index].play().catch(error => {
                console.log(error)
            });
        }
    }
    const handleMouseLeave = (index) => {
        if(videoRef.current[index] && !videoRef.current[index].paused){
            videoRef.current[index].pause().catch(error => {
                console.log(error)
            });
        }
    }
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {productionList.map((item, index)=> (
            <div key={item.id}
            className='border-[2px] border-gray-600 rounded-lg
            hover:scale-110 transition-all relative duration-300 cursor-pointer 
            shadow-gray-800 ease-in-out'>
                <video
                ref={(el) => (videoRef.current[index] = el)} 
                onMouseLeave={() => handleMouseLeave(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                src={item.video} autoPlay loop playsInline muted
                className='absolute top-0 rounded-md  opacity-0
                hover:opacity-50'/>
                <img src={item.image} className='w-full z-[1]'/>

            </div>
        ))}
    </div>
  )
}

export default ProductionHouse