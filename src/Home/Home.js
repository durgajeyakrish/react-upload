
import React from 'react'
import Movies from "./Movies.json"
// import Nextmovies from "./Nextmovies.json"
import Product from "../Component/Product"
// import Product1 from "../Component/Product1"
import './Home.css'
import Footer from '../Footer/Footer'

const Home = () => {
  console.log("Movies",Movies)
  
  return (
    <div className='home'>
      <div  className='head'><h2>Recommended Movies</h2></div>
      <div className='home-container'>
      {Movies.map((product,index)=>(
        <Product product={product} key={index} />
      ))}
      </div>
    
      <Footer/>
    </div>
  )
}

export default Home
