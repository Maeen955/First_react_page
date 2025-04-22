import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import ProductionHouse from './Components/ProductionHouse';
import GenreMovieList from './Components/GenreMovieList';



const App = () => {


  return (
   <div className='text-white'>
    <Header/>

    <Slider/>

    <ProductionHouse/>

    <GenreMovieList/>
   </div>
  )
}

export default App