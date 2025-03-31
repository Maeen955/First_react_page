import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  FaEye, FaHeart, FaSearch } from 'react-icons/fa'
import { LuListFilter } from 'react-icons/lu'

const Body = () => {

    const API_URL ='https://dummyjson.com/products';
        const [items, setItems] = useState([]);
        const [loading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);
    const fetchData = async () => {
          setIsLoading(true);
       try{
        const response = await axios.get(API_URL);
        const products = response.data.products;
        console.log(products)
        setItems(products)
        setIsLoading(false);
        setError(null)
       } catch(err){
        setError(err);
        setIsLoading(false)
       }
    }
    useEffect(()=>{
        fetchData();
    }, []);
  
   
  return (
    <div className='hero'>
        <div className="container">
        <ul className='ani'>
               <p className="ma">Animation</p>
                <li>Discover</li>
                <li>branding</li>
                <li>illustration</li>
                <li>Mobile</li>
                <li>print</li>
                <li>product design</li>
                <li>typography</li>
                <li>web design</li>
            </ul>
            <h2>explore the world's leading design portfolios</h2>
            <p className='lorem'> amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, iste. Reiciendis quae quasi ratione assumenda dolorem tenetur.</p>
            <p className='input'>
                <FaSearch/>
                <input type="text" placeholder='Search...' />
            </p>
            <ul className='land'>
                <h3>Trending Search:</h3>
                <li>landing page</li>
                <li>ios</li>
                <li>food</li>
                <li>landingpage</li>
                <li>ledesign</li>
                <li>app design</li>
            </ul>
                    

        </div>

        <div className="cards">
            <div className="top">
                  <div className="filter">
                <select id='option'>
                    <option value="Popular">Popular</option>
                    <option value="Old">Old</option>
                    <option value="New">New</option>
                </select>
            </div>
            <div className="fill">
                <button>
                    <LuListFilter/>
                   <span>Filters</span> 
                </button>
            </div>
            </div>

            <div className="main">
              {loading && <h1>Loading....</h1>}
              {!loading && error && <h1>Internel server Error</h1>}
              {!loading && !error && items &&  items.slice(10, 28).map((item) => (
                <div className="card" key={item.id}>
                    <img  src={item.images[0]} className='mainimg' />
                   <div className='des'>
                    
                    <p className='brand'><img className='thumb' src={item.thumbnail} alt={item.thumbnail} /> {item.brand} <span className='pro'>PRO</span></p>
                   
                   <div className='love'>
                    <FaHeart className='eye'/><p> {item.stock}</p>
                    </div> 
                  <div className='love'>
                    <FaEye className='eye'/> <p> {item.rating}</p>
                    </div> 



                   </div>
                </div>
              ))}
            </div>
          
        </div>

        <div className="cardFotter">
            <p className='signUp'>Sign up to continue</p>
            <p className='signIn'>Or Sign in</p>
        </div>
         
          
         </div>
  )
}

export default Body