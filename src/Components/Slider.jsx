import React, { useEffect, useRef, useState } from 'react'
import Global from '../Services/Global'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenwidth = window.innerWidth
function  Slider() {
    const [movieList, setMovieList] = useState([])
     const elementRef = useRef();
    useEffect(()=>{
      getTrendingMovies();
    },[])

   const getTrendingMovies = () => {
    Global.getTrendingVideos.then(resp=>{
        setMovieList(resp.data.results)

    })
   }

     const sliderRight = (element) => {
         element.scrollLeft += screenwidth-110
     }

     const sliderLeft = (element) => {
        element.scrollLeft -= screenwidth-110
    }

  return (
    <div>
      <HiChevronRight onClick={
        ()=> sliderRight(elementRef.current)} className='hidden md:block text-white text-[30px]
      absolute mx-8 mt-[150px] cursor-pointer right-0'/>
      <HiChevronLeft onClick={()=> sliderLeft(elementRef.current)} className='hidden md:block text-white text-[30px]
      absolute mx-8 mt-[150px] cursor-pointer'/>
 
    <div className='flex overflow-x-auto w-full
     px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}> 
        {movieList.map((item, index) => (
            <img key={index} src={IMAGE_BASE_URL+item.backdrop_path}
            className='min-w-full md:h-[310px] 
            object-cover object-left-top mr-5 rounded-md
            hover:border-[4px] border-gray-400
            duration-100 ease-in transition-all '  />
        ))
        }
    </div> 
      </div>
  )
}

export default  Slider